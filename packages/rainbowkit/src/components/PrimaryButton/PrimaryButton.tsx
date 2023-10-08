import React, { useState } from "react";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

const PrimaryButton = ({ clickAction = (f) => f, title = "" }) => {
  return (
    <div style={{ margin: 6 }}>
      <Box onClick={clickAction}>
        <div
          style={{
            background: "linear-gradient(111.34deg, #9F8BFF 0%, #7053FF 100%)",
            borderRadius: "16px",
            borderStyle: "solid",
            borderWidth: "0px",
            padding: 8,
          }}
        >
          <Text
            textAlign="center"
            color="connectButtonText"
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            {" "}
            {title}{" "}
          </Text>
        </div>
      </Box>
    </div>
  );
};

export default PrimaryButton;
