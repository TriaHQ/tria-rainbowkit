import React, { useState } from "react";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

const SecondaryButton = ({ clickAction = (f) => f, title = "" }) => {
  return (
    <div style={{ margin: 6 }}>
      <Box onClick={clickAction}>
        <Text textAlign="center" color="modalText">
          {" "}
          {title}{" "}
        </Text>
      </Box>
    </div>
  );
};

export default SecondaryButton;
