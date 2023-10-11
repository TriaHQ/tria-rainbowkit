import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const LoginInput = ({
  ctaClicked = (f) => f,
  ctaTitle = "Log in",
  isCTAButton = true,
  isEditable = true,
  placeholder = "",
  value = "",
  isLoadingButton = true,
  isPasswordType = false,
}) => {
  const [input, setInput] = useState(value);
  const [buttonClicked, setIsButtonClicked] = useState(false);

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        paddingX: 12,
        fontFamily: "Montserrat",
      }}
    >
      <input
        type={isPasswordType ? "password" : "text"}
        disabled={!isEditable}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        style={{
          background: "rgba(16, 16, 16, 0.05)",
          borderRadius: "20px",
          borderWidth: "0px",
          flex: 1,
          height: "40px",
          marginBottom: "20px",
          marginRight: "12px",
          marginTop: "20px",
          paddingLeft: "20px",
        }}
        value={input}
      />
      {isCTAButton && !buttonClicked && (
        <button
          color="white"
          onClick={() => {
            if (
              input.replace(/\s/g, "") &&
              input.replace(/\s/g, "").length > 0
            ) {
              setIsButtonClicked(true);
              ctaClicked(input);
            }
          }}
          style={{
            background: "black",
            borderRadius: "20px",
            color: "white",
            height: "40px",
            width: "99px",
            fontSize: 16,
            fontWeight: 600,
            fontFamily: "Montserrat",
          }}
          type="button"
        >
          {ctaTitle}
        </button>
      )}
      {isCTAButton && buttonClicked && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "black",
            height: 40,
            width: 99,
            borderRadius: 20,
          }}
        >
          <ThreeDots
            height="20"
            width="40"
            color="white"
            ariaLabel="three-dots-loading"
          />
        </div>
      )}
    </div>
  );
};

export default LoginInput;
