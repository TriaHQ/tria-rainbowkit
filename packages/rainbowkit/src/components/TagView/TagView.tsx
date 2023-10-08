import React from "react";
import { Text } from "../Text/Text";

const TagView = ({
  actionText = "Continue with Tria",
  backgroundColor,
  title,
  titleColor,
  width = 100,
}) => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: "12px",
      }}
    >
      <Text color="modalText" size="18">
        {actionText}
      </Text>

      <div
        display="flex"
        style={{
          background: backgroundColor,
          borderRadius: "22px",
          width,
        }}
      >
        <Text size="12" style={{ color: titleColor, marginLeft: 12, width }}>
          {" "}
          {title}{" "}
        </Text>
      </div>
    </div>
  );
};

export default TagView;
