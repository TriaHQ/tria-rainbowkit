import React from "react";
import { touchableStyles } from "../../css/touchableStyles";
import { isMobile } from "../../utils/isMobile";
import { Box } from "../Box/Box";
import BackButtonVector from "../SVG/BackButtonVector";

export const BackButton = ({
  "aria-label": ariaLabel = "Close",
  onClick,
}: {
  "aria-label"?: string;
  onClick: () => void;
}) => {
  const mobile = isMobile();
  return (
    <Box
      alignItems="center"
      aria-label={ariaLabel}
      as="button"
      borderColor="actionButtonBorder"
      borderRadius="full"
      borderStyle="solid"
      borderWidth="0"
      className={touchableStyles({ active: "shrinkSm", hover: "growLg" })}
      color="closeButton"
      display="flex"
      height={mobile ? "30" : "28"}
      justifyContent="center"
      onClick={onClick}
      style={{ willChange: "transform" }}
      transition="default"
      type="button"
      width={mobile ? "30" : "28"}
    >
      <BackButtonVector />
    </Box>
  );
};
