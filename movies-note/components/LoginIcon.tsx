import React from "react";
import LoginIconSvg from "../assets/images/login-icon.svg";

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

export function LoginIcon({
  width = 24,
  height = 24,
  color = "#fff",
}: IconProps) {
  return <LoginIconSvg width={width} height={height} fill={color} />;
}
