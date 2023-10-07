import React from "react";
import { Box } from "../Box/Box";

export const BorderedContainer = ({ children, isSelected = true }: any) => {
  return (
    <Box
      style={{
        borderRadius: "16px",
        borderStyle: "solid",
        borderWidth: "1.5px",
        display: "flex",
        overflow: "hidden",
        padding: "16px",
        flexDirection: "column",
        border: isSelected
          ? "1.50px rgba(158.82, 139.32, 255, 0.30) solid"
          : "1.50px rgba(16, 16, 16, 0.03) solid",
      }}
    >
      {children}
    </Box>
  );
};
