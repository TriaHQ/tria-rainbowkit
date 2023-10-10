import React from "react";
import { BorderedContainer } from "../BorderedContainer/BorderedContainer";
import LoginInput from "../LoginInput/LoginInput";
import { Text } from "../Text/Text";

const EnterTriaNameComponent = (
  clickAction = (f) => f,
  logo = null,
  value = ""
) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flex: 0.5, flexDirection: "column" }}>
        {logo}
        <Text
          color="accentColor"
          style={{ alignSelf: "center", marginTop: 24 }}
        >
          {" "}
          Creating your Tria account{" "}
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          flex: 0.5,
          flexDirection: "row",
          alignItems: "flex-end",
          padding: 16,
        }}
      >
        <BorderedContainer>
          <Text color="accentColor"> Create your tria name </Text>
          <Text color="accentColor">
            Your @tria is like Gmail, for Web3. Pay, receive and log-in to apps
            on any device, and blockchain.
          </Text>
          <LoginInput
            ctaClicked={(input) => {
              //perform password validations here
              clickAction(input);
            }}
            ctaTitle="Next"
            value={value}
          />
        </BorderedContainer>
      </div>
    </div>
  );
};
export default EnterTriaNameComponent;
