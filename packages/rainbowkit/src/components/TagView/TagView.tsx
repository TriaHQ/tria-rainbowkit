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
      <Text
        color="modalText"
        size="18"
        style={{
          color: "rgba(50, 50, 50, 1.0)",
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        {actionText}
      </Text>

      <div
        style={{
          background: backgroundColor,
          borderRadius: "22px",
          width,
        }}
      >
        <Text
          color="accentColor"
          size="12"
          style={{
            color: titleColor,
            marginLeft: 12,
            width,
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          {" "}
          {title}{" "}
        </Text>
      </div>
    </div>
  );
};

export default TagView;
