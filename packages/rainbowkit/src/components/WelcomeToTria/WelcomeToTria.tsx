import React, { useState } from "react";
import { Text } from "../Text/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { BorderedContainer } from "../BorderedContainer/BorderedContainer";

const WelcomeToTria = ({
  continueClicked = (f) => f,
  logo = null,
  username,
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
          alignItems: "center",
        }}
      >
        {logo}
        <Text
          color="modalText"
          style={{
            marginTop: 24,
            color: "rgba(16, 16, 16, 1.0)",
            fontSize: 24,
            fontWeight: 400,
          }}
        >
          {" "}
          Welcome to Tria{" "}
        </Text>
        <Text
          color="modalText"
          style={{
            color: "rgba(16, 16, 16, 1.0)",
            fontSize: 18,
            fontWeight: 600,
            marginTop: 16,
          }}
        >
          {username}
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 24,
              gap: 8,
            }}
          >
            <Text
              color="modalText"
              style={{
                color: "rgba(25, 25, 25, 1.0)",
                fontSize: 24,
                fontWeight: 400,
                alignItems: "center",
              }}
            >
              {" "}
              {"Continue to "}{" "}
            </Text>
            <Text
              color="modalText"
              style={{
                color: "black",
                fontSize: 24,
                fontWeight: 500,
                alignItems: "center",
              }}
            >
              Opensea!
            </Text>
          </div>
          <Text
            color="modalText"
            style={{
              color: "rgba(128, 128, 128, 1.0)",
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            Your @tria wallet is created and can be used on any device and
            blockchain.
          </Text>
          <PrimaryButton title="Continue" clickAction={continueClicked} />
        </BorderedContainer>
      </div>
    </div>
  );
};

export default WelcomeToTria;
