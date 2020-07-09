import { StyleSheet, Text, View } from "react-native";
import { mapKeyToStyle, withEndSpace } from "../../../Utils/Customization";
import OpenURLButton from "../Buttons/OpenUrlButton";
import React from "react";

const termsOFUseStyleKeys = ["terms_of_use_instructions", "terms_of_use_link"];
const termsOfUseUrl = "https://google.com";

export default function Footer({ screenStyles }) {
  const {
    terms_of_use_instructions_text: termsOfUseText,
    terms_of_use_link_text: termsOfUseLink,
  } = screenStyles;

  const [
    termsOfUseStyle,
    termsOfUseLinkStyle,
  ] = termsOFUseStyleKeys.map((key) => mapKeyToStyle(key, screenStyles));

  return (
    <View style={styles.footer}>
      <Text
        style={[termsOfUseStyle, { textAlign: "center" }]}
        numberOfLines={3}
        ellipsizeMode="tail"
      >
        {withEndSpace(termsOfUseText)}
        <OpenURLButton linkStyle={termsOfUseLinkStyle} url={termsOfUseUrl}>
          {termsOfUseLink}
        </OpenURLButton>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    height: 80,
    paddingVertical: 10,
  },
});
