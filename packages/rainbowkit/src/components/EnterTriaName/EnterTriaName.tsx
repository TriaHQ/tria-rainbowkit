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
        <Text color="modalText" style={{ alignSelf: "center", marginTop: 24 }}>
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
          <Text color="modalText"> Create your tria name </Text>
          <div style={{ width: 360, height: 34, mixBlendMode: "difference" }}>
            <span style="color: 'rgba(255, 255, 255, 0.50)', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'">
              Your{" "}
            </span>
            <span style="color: 'rgba(255, 255, 255, 0.90)', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word'">
              @tria
            </span>
            <span style="color: 'rgba(255, 255, 255, 0.50)', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'">
              {" "}
              is like Gmail, for Web3. Pay, receive and log-in to apps on any
              device, and blockchain.
            </span>
          </div>
          <LoginInput
            ctaClicked={(input) => {
              //perform password validations here
              clickAction(input);
            }}
            ctaTitle="Next"
            placeholder="tria name"
            value={value}
          />
        </BorderedContainer>
      </div>
    </div>
  );
};
export default EnterTriaNameComponent;
