import React from "react";
import { Text } from "../Text/Text";

const TagView = ({
  actionText = "Continue with Tria",
  backgroundColor,
  title,
  titleColor,
  width = "100px",
}) => {
  return (
    <div
      style={{ alignItems: "center", display: "flex", flexDirection: "row" }}
    >
      <Text color="modalText" size="18" style={{ width: 160 }}>
        {actionText}
      </Text>

      <div
        display="flex"
        style={{
          background: backgroundColor,
          borderRadius: "22px",
          width: { width },
        }}
      >
        <Text
          size="12"
          style={{ color: titleColor, marginLeft: 12, width: { width } }}
        >
          {" "}
          {title}{" "}
        </Text>
      </div>
    </div>
  );
};

export default TagView;
