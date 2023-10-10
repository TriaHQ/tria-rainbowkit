import React from "react";
import { Box } from "../Box/Box";
import { BorderedContainer } from "../BorderedContainer/BorderedContainer";
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
          color="accentColor"
          style={{
            alignSelf: "center",
            marginTop: 24,
          }}
        >
          {" "}
          Connect with Opensea{" "}
        </Text>
      </div>

      <BorderedContainer>
        <Text color="accentColor"> {title} </Text>
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
      </BorderedContainer>
    </div>
  );
};

export default EnterTriaPassword;
