import React from "react";
import { Box } from "../Box/Box";

const BorderedBox = ({ children }: any) => {
  return (
    <Box
      cursor="pointer"
      style={{
        borderImage: "linear-gradient(#9F8BFF4D, #7053FF4D) 30",
        borderRadius: "16px",
        borderStyle: "solid",
        borderWidth: "1.5px",
        overflow: "hidden",
        padding: 16,
      }}
    >
      {children}
    </Box>
  );
};

export default BorderedBox;
