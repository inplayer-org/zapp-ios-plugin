import React, { useState, useEffect } from "react";

import AssetFlow from "./AssetFlow";
import LogoutFlow from "./LogoutFlow";
import * as R from "ramda";

import { useNavigation } from "@applicaster/zapp-react-native-utils/reactHooks/navigation";
import { localStorage as defaultStorage } from "@applicaster/zapp-react-native-bridge/ZappStorage/LocalStorage";
import { isVideoEntry, inPlayerAssetId } from "../Utils/payloadUtils";
import { setConfig } from "../Services/inPlayerService";
import { getPluginData } from "../Utils/customizationUtils";
import { isValueInStorage } from "../Utils/storageUtils";
import { isHook } from "../Utils/payloadUtils";

const getScreenStyles = R.compose(
  R.prop("styles"),
  R.find(R.propEq("type", "quick-brick-inplayer")),
  R.values,
  R.prop("rivers")
);

console.disableYellowBox = true;

const InPlayer = (props) => {
  const HookTypeData = {
    UNDEFINED: "Undefined",
    PLAYER_HOOK: "PlayerHook",
    SCREEN_HOOK: "ScreenHook",
    USER_ACCOUNT: "UserAccount",
  };

  const navigator = useNavigation();
  const [idToken, setIdtoken] = useState(null);
  const [hookType, setHookType] = useState(HookTypeData.UNDEFINED);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const { callback, payload } = props;
  const screenStyles = getPluginData(screenData);

  let stillMounted = true;

  useEffect(() => {
    setupEnviroment();
  }, []);

  const checkIdToken = async () => {
    const token = await isTokenInStorage("idToken");
    setIdtoken(token);
  };

  const setupEnviroment = async () => {
    const {
      configuration: { in_player_environment },
    } = props;

    await checkIdToken();
    initFromNativeLocalStorage();

    setConfig(in_player_environment);

    if (isVideoEntry(payload)) {
      if (inPlayerAssetId({ payload, configuration: props.configuration })) {
        stillMounted && setHookType(HookTypeData.PLAYER_HOOK);
      } else {
        callback && callback({ success: true, error: null, payload });
      }
    } else {
      if (!isHook(navigator)) {
        stillMounted && setHookType(HookTypeData.USER_ACCOUNT);
      } else {
        stillMounted && setHookType(HookTypeData.SCREEN_HOOK);
      }
    }
    return () => {
      stillMounted = false;
    };
  };

  const assetFlowCallback = ({ success, payload, error }) => {
    console.log("Asset Flow CallBack Anton", {
      success,
      payload,
      error,
      callback,
    });
    if (error) {
      showAlert("General Error!", error?.message);
    }
    callback &&
      callback({
        success,
        error,
        payload,
      });
  };

  const accountFlowCallback = async ({ success }) => {
    if (success) {
      const token = localStorage.getItem("inplayer_token");
      await defaultStorage.setItem("idToken", token);
    }
    if (hookType === HookTypeData.SCREEN_HOOK && success) {
      const { callback } = props;
      callback && callback({ success, error: null, payload: payload });
    } else if (hookType === HookTypeData.PLAYER_HOOK) {
      success
        ? stillMounted && setIsUserAuthenticated(true)
        : callback && callback({ success, error: null, payload: payload });
    } else if (hookType === HookTypeData.USER_ACCOUNT) {
      navigator.goBack();
    } else {
      callback && callback({ success: success, error: null, payload: payload });
    }
  };

  const renderPlayerHook = () => {
    return isUserAuthenticated ? (
      <AssetFlow
        assetFlowCallback={assetFlowCallback}
        screenStyles={screenStyles}
        {...props}
      />
    ) : (
      <AccountFlow
        accountFlowCallback={accountFlowCallback}
        backButton={hookType === HookTypeData.PLAYER_HOOK}
        screenStyles={screenStyles}
        {...props}
      />
    );
  };

  const renderScreenHook = () => {
    return (
      <AccountFlow
        accountFlowCallback={accountFlowCallback}
        backButton={hookType === HookTypeData.PLAYER_HOOK}
        screenStyles={screenStyles}
        {...props}
      />
    );
  };

  const renderLogoutScreen = () => {
    return <LogoutFlow screenStyles={screenStyles} {...props} />;
  };

  const renderUACFlow = () => {
    return idToken ? renderLogoutScreen() : renderScreenHook();
  };

  const renderFlow = () => {
    switch (hookType) {
      case HookTypeData.PLAYER_HOOK:
        return renderPlayerHook();
      case HookTypeData.SCREEN_HOOK:
        return renderScreenHook();
      case HookTypeData.USER_ACCOUNT:
        return renderUACFlow();
      case HookTypeData.UNDEFINED:
        return null;
    }
  };

  return renderFlow();
};

export default InPlayer;