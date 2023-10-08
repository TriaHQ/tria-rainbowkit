import React from "react";
import styled from "styled-components";
import { Box, BoxProps } from "../Box/Box";

export type TextProps = {
  id?: string;
  as?:
    | "code"
    | "div"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "label"
    | "p"
    | "span";
  children?: React.ReactNode;
  color: BoxProps["color"];
  font?: BoxProps["fontFamily"];
  // lineHeight?: BoxProps['lineHeight']
  size?: BoxProps["fontSize"];
  style?: React.CSSProperties;
  // transform?: BoxProps['textTransform']
  weight?: BoxProps["fontWeight"];
  className?: string;
  tabIndex?: number;
  textAlign?: BoxProps["textAlign"];
  display?: BoxProps["display"];
};

// const StyledText = styled.small`
//   font-family: "Roboto", sans-serif;
//   font-size: 18px;
// `;

// const MosterratText = styled.p<{ $size: number }>`
//   /* Adapt the colors based on primary prop */
//   font-size: ${size};
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #bf4f74;
//   border-radius: 3px;
// `;

export const Text = React.forwardRef(
  (
    {
      as = "div",
      children,
      className,
      color,
      display,
      font = "body",
      id,
      size = "16",
      style,
      tabIndex,
      textAlign = "inherit",
      weight = "regular",
    }: TextProps,
    ref: React.Ref<HTMLElement>
  ) => {
    // return <div> {children} </div>;

    // return <StyledText>{children}</StyledText>;

    return (
      <Box
        as={as}
        className={className}
        color={color}
        display={display}
        fontFamily={font}
        fontSize={size}
        fontWeight={weight}
        id={id}
        ref={ref}
        style={style}
        tabIndex={tabIndex}
        textAlign={textAlign}
      >
        {children}
      </Box>
    );
  }
);

Text.displayName = "Text";
