import React from "react";
import { Box } from "../Box/Box";
import BorderedBox from "../BorderedBox/BorderedBox";
import LoginInput from "../LoginInput/LoginInput";
import { Text } from "../Text/Text";

export enum PasswordScreenType {
  Login = "Login",
  EnterAndConfirmPassword = "EnterAndConfirmPassword",
}

const EnterTriaPassword = ({
  ctaClicked = (f) => f,
  ctaTitle = "Log in",
  logo = null,
  primaryText = "",
  primaryPlaceholder = "",
  screenType = PasswordScreenType.Login,
  secondaryPlaceholder = "Password",
  title = "Continue with Tria",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 0.5,
          flexDirection: "column",
        }}
      >
        {logo}
        <Text
          style={{
            alignSelf: "center",
            marginTop: 24,
          }}
        >
          {" "}
          Connect with Opensea{" "}
        </Text>
      </div>

      <Box
        cursor="pointer"
        style={{
          borderImage: "linear-gradient(#9F8BFF4D, #7053FF4D) 30",
          borderRadius: "16!important",
          borderStyle: "solid",
          borderWidth: "1.5px",
          padding: 16,
        }}
      >
        <Text> {title} </Text>
        <LoginInput
          isCTAButton={false}
          placeholder={primaryPlaceholder}
          value={primaryText}
        />
        <LoginInput
          ctaClicked={(input) => {
            //perform password validations here
            ctaClicked(input);
          }}
          ctaTitle={ctaTitle}
          placeholder={secondaryPlaceholder}
        />
      </Box>
    </div>
  );
};

export default EnterTriaPassword;
