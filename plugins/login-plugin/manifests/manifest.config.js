const baseManifest = {
  dependency_repository_url: [],
  dependency_name: "@applicaster/quick-brick-inplayer",
  author_name: "Applicaster",
  author_email: "zapp@applicaster.com",
  name: "inPlayer Hook Plugin",
  description: "InPlayer Hook Plugin",
  type: "general",
  screen: true,
  react_native: true,
  identifier: "quick-brick-inplayer",
  ui_builder_support: true,
  whitelisted_account_ids: ["5c9ce7917b225c000f02dfbc"],
  deprecated_since_zapp_sdk: "",
  unsupported_since_zapp_sdk: "",
  preload: true,
  npm_dependencies: [
    "@inplayer-org/inplayer.js@2.13.3",
    "react-native-dropdownalert@4.2.1",
    "@applicaster/applicaster-iap@0.2.9",
    "@react-native-community/async-storage@1.9.0",
    "react-native-actionsheet@2.4.0",
    "react-native-keyboard-aware-scroll-view@0.9.1",
  ],
  styles: {
    fields: [
      {
        key: "background_color",
        type: "color_picker",
        label: "Background font color",
        initial_value: "#161b29ff",
      },
      {
        key: "title_font_ios",
        type: "ios_font_selector",
        label: "iOS title font",
        initial_value: "Montserrat-Bold",
      },
      {
        key: "title_font_android",
        type: "android_font_selector",
        label: "Android title font",
        initial_value: "Montserrat-Bold",
      },
      {
        key: "title_font_size",
        type: "number_input",
        label: "Title font size",
        initial_value: 15,
      },
      {
        key: "title_font_color",
        type: "color_picker",
        label: "Title font color",
        initial_value: "#ffffffff",
      },
      {
        key: "title_font_text",
        type: "text_input",
        label: "Text title",
        initial_value: "InPlayer",
      },
      {
        key: "back_button_font_ios",
        type: "ios_font_selector",
        label: "iOS back button font",
        initial_value: "Montserrat-Bold",
      },
      {
        key: "back_button_font_android",
        type: "android_font_selector",
        label: "Android back button font",
        initial_value: "Montserrat-Bold",
      },
      {
        key: "back_button_font_size",
        type: "number_input",
        label: "Back button font size",
        initial_value: 15,
      },
      {
        key: "back_button_font_color",
        type: "color_picker",
        label: "Back button font color",
        initial_value: "#ffffffff",
      },
      {
        key: "back_button_text",
        type: "text_input",
        label: "Back button title",
        initial_value: "Back",
      },
      {
        key: "fields_font_ios",
        type: "ios_font_selector",
        label: "iOS input fields title font",
        initial_value: "Montserrat-SemiBold",
      },
      {
        key: "fields_font_android",
        type: "android_font_selector",
        label: "Android input fields title font",
        initial_value: "Montserrat-SemiBold",
      },
      {
        key: "fields_font_size",
        type: "number_input",
        label: "Input fields title font size",
        initial_value: 13,
      },
      {
        key: "fields_font_color",
        type: "color_picker",
        label: "Input fields font color",
        initial_value: "#ffffffff",
      },
      {
        key: "fields_placeholder_font_color",
        type: "color_picker",
        label: "Input fields placeholder font color",
        initial_value: "#ffffffff",
      },
      {
        key: "fields_separator_color",
        type: "color_picker",
        label: "Input fields separator color",
        initial_value: "#a9a9a9ff",
      },
      {
        key: "fields_email_text",
        type: "text_input",
        label: "Email field placeholder text",
        initial_value: "E-mail",
      },
      {
        key: "fields_password_text",
        type: "text_input",
        label: "Password field placeholder text",
        initial_value: "Password",
      },
      {
        key: "fields_token_text",
        type: "text_input",
        label: "Token field placeholder text",
        initial_value: "Token",
      },
      {
        key: "fields_password_confirmation_text",
        type: "text_input",
        label: "Password field confirmation placeholder text",
        initial_value: "Password Confirmation",
      },
      {
        key: "fields_set_new_password_text",
        type: "text_input",
        label: "New password field placeholder text",
        initial_value: "New password",
      },
      {
        key: "fields_name_text",
        type: "text_input",
        label: "Name field placeholder text",
        initial_value: "Enter your name",
      },
      {
        key: "forgot_password_font_ios",
        type: "ios_font_selector",
        label: "iOS forgot password font",
        initial_value: "Montserrat-Regular",
      },
      {
        key: "forgot_password_font_android",
        type: "android_font_selector",
        label: "Android forgot password font",
        initial_value: "Montserrat-Regular",
      },
      {
        key: "forgot_password_font_size",
        type: "number_input",
        label: "Forgot password font size",
        initial_value: 11,
      },
      {
        key: "forgot_password_font_color",
        type: "color_picker",
        label: "Forgot password font color",
        initial_value: "#a9a9a9ff",
      },
      {
        key: "forgot_password_text",
        type: "text_input",
        label: "Forgot password title",
        initial_value: "Forgotten your Username or Password?",
      },
      {
        key: "action_button_background_color",
        type: "color_picker",
        label: "iOS action button background color",
        initial_value: "#f1af13ff",
      },
      {
        key: "action_button_font_ios",
        type: "ios_font_selector",
        label: "iOS action button font",
        initial_value: "Montserrat-Bold",
      },
      {
        key: "action_button_font_android",
        type: "android_font_selector",
        label: "Android action button font",
        initial_value: "Montserrat-Bold",
      },
      {
        key: "action_button_font_size",
        type: "number_input",
        label: "Action button font size",
        initial_value: 15,
      },
      {
        key: "action_button_font_color",
        type: "color_picker",
        label: "Action button font Color",
        initial_value: "#ffffffff",
      },
      {
        key: "action_button_login_text",
        type: "text_input",
        label: "Action button login title",
        initial_value: "LOG IN",
      },
      {
        key: "action_button_signup_text",
        type: "text_input",
        label: "Action button sign up title",
        initial_value: "SIGN UP",
      },
      {
        key: "action_button_forgot_password_text",
        type: "text_input",
        label: "Action button request password title",
        initial_value: "REQUEST PASSWORD",
      },
      {
        key: "action_button_set_new_password_text",
        type: "text_input",
        label: "Action button set new password title",
        initial_value: "SET NEW PASSWORD",
      },
      {
        key: "create_account_link_font_ios",
        type: "ios_font_selector",
        label: "iOS Create account link font",
        initial_value: "Montserrat",
      },
      {
        key: "create_account_link_font_android",
        type: "android_font_selector",
        label: "Android Create account link font",
        initial_value: "Montserrat",
      },
      {
        key: "create_account_link_font_size",
        type: "number_input",
        label: "Create account link font size",
        initial_value: 11,
      },
      {
        key: "create_account_link_font_color",
        type: "color_picker",
        label: "Create account link font color",
        initial_value: "#a9a9a9ff",
      },
      {
        key: "create_account_link_text",
        type: "text_input",
        label: "Create account link title",
        initial_value: "No user? Sign Up!",
      },
    ],
  },
  custom_configuration_fields: [
    {
      type: "text",
      key: "in_player_client_id",
      tooltip_text: "In Player Client ID",
      default: "",
    },
    {
      type: "text",
      key: "in_player_referrer",
      tooltip_text: "In Player Referrer URL",
      default: "",
    },
    {
      type: "text",
      key: "in_player_custom_asset_key",
      tooltip_text: "Custom asset key",
      default: "extensions.event_inplayer_id",
    },
    {
      type: "tag_select",
      key: "in_player_environment",
      tooltip_text: "InPlayer working environment",
      options: [
        {
          text: "Development",
          value: "develop",
        },
        {
          text: "Production",
          value: "prod",
        },
      ],
      initial_value: "prod",
    },
    {
      type: "text",
      key: "consumable_type_mapper",
      tooltip_text: "Mapping key for consumable purchase",
      default: "consumable",
    },
    {
      type: "text",
      key: "non_consumable_type_mapper",
      tooltip_text: "Mapping key for non consumable purchase",
      default: "ppv",
    },
    {
      type: "text",
      key: "subscription_type_mapper",
      tooltip_text: "Mapping key for subscription purchase",
      default: "subscription",
    },
  ],
  targets: ["mobile"],
  ui_frameworks: ["quickbrick"],
};

function createManifest({ version, platform }) {
  const basePlatform = platform.includes("ios") ? "ios" : "android";

  const manifest = {
    ...baseManifest,
    platform,
    dependency_version: version,
    manifest_version: version,
    api: api[basePlatform],
    project_dependencies: project_dependencies[basePlatform],
    extra_dependencies: extra_dependencies[basePlatform],
    min_zapp_sdk: min_zapp_sdk[platform],
  };

  return manifest;
}

const api = {
  ios: {},
  android: {
    class_name: "com.reactnativecommunity.asyncstorage.AsyncStoragePackage",
    react_packages: [
      "com.reactnativecommunity.asyncstorage.AsyncStoragePackage",
      "com.applicaster.iap.reactnative.IAPPackage",
    ],
    proguard_rules:
      "-keep public class com.reactnativecommunity.asyncstorage.** {*;}",
  },
};

const project_dependencies = {
  ios: [],
  android: [
    {
      "react-native-community_async-storage":
        "node_modules/@react-native-community/async-storage/android",
    },
    {
      ApplicasterIAP:
        "./quick_brick/node_modules/@applicaster/applicaster-iap/Android/iap",
    },
    {
      ApplicasterIAPRN:
        "./quick_brick/node_modules/@applicaster/applicaster-iap/Android/iap-rn",
    },
  ],
};

const extra_dependencies = {
  ios: [
    {
      ApplicasterIAP:
        ":path => 'node_modules/@applicaster/applicaster-iap/iOS/ApplicasterIAP.podspec'",
    },
    {
      RNCAsyncStorage:
        ":path => 'node_modules/@react-native-community/async-storage/RNCAsyncStorage.podspec'",
    },
  ],
  android: [],
};
const min_zapp_sdk = {
  ios: "20.2.0-Dev",
  android: "20.0.0",
  ios_for_quickbrick: "0.1.0-alpha1",
  android_for_quickbrick: "0.1.0-alpha1",
};

module.exports = createManifest;
