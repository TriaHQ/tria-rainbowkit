import React from "react";
import BorderedBox from "../BorderedBox/BorderedBox";
import LoginInput from "../LoginInput/LoginInput";
import { Text } from "../Text/Text";

const EnterTriaName = (
  enterTriaNameBodyText = "",
  enterTriaNameClickAction = (f) => f,
  enterTriaNameCTATitle = "Next",
  enterTriaNamePrimaryText = "Create your tria name",
  logo = null,
  title = "Creating your Tria account",
  triaNameValue = ""
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
        <Text style={{ alignSelf: "center", marginTop: 24 }}>{title}</Text>
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
        <BorderedBox>
          <Text> {enterTriaNamePrimaryText} </Text>
          <Text>{enterTriaNameBodyText}</Text>
          <LoginInput
            ctaClicked={enterTriaNameClickAction}
            ctaTitle={enterTriaNameCTATitle}
            value={triaNameValue}
          />
        </BorderedBox>
      </div>
    </div>
  );
};
export default EnterTriaName;
