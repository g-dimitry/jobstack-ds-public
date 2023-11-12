import { ComponentPropsWithRef, forwardRef } from "react";
import styled from "@emotion/styled";

interface CommonProps {
  children: string;
}

type ButtonProps = ComponentPropsWithRef<"button"> &
  CommonProps & {
    as?: "button";
    isDisabled?: boolean;
    isLoading?: boolean;
  };

type LinkProps = ComponentPropsWithRef<"a"> &
  CommonProps & {
    as: "a";
  };

type ButtonOrLinkProps = ButtonProps | LinkProps;

const StyledAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border: none;
  border-radius: 100px;
  text-decoration: none;
  height: ${(props) => props.theme.spacing(10)}px;
  padding: 0 ${(props) => props.theme.spacing(6)}px;
  background-color: ${(props) => props.theme.schemes.light.primary};
  color: ${(props) => props.theme.schemes.light.onPrimary};
  ${(props) => props.theme.getTypographyStyles("body", "medium")}

  &:hover {
    background-color: ${(props) => props.theme.schemes.light.primary}${Math.floor((1 - 0.08) * 255).toString(16)};
  }
  &:focus {
    background-color: ${(props) => props.theme.schemes.light.primary}${Math.floor((1 - 0.12) * 255).toString(16)};
  }
  &:active {
    background-color: ${(props) => props.theme.schemes.light.primary}${Math.floor((1 - 0.12) * 255).toString(16)};
  }
`;

const StyledButton = styled.button<{ isDisabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border: none;
  border-radius: 100px;
  height: ${(props) => props.theme.spacing(10)}px;
  padding: 0 ${(props) => props.theme.spacing(6)}px;
  background-color: ${(props) => props.theme.schemes.light.primary};
  color: ${(props) => props.theme.schemes.light.onPrimary};
  ${(props) => props.theme.getTypographyStyles("body", "medium")}
  ${(props) =>
    props.isDisabled
      ? `background-color: ${props.theme.schemes.light.onSurface}${Math.floor(
          0.12 * 255
        ).toString(16)};`
      : `
      cursor: pointer;
      &:hover {
        background-color: ${props.theme.schemes.light.primary}${Math.floor(
          (1 - 0.08) * 255
        ).toString(16)};
      }
      &:focus {
        background-color: ${props.theme.schemes.light.primary}${Math.floor(
          (1 - 0.12) * 255
        ).toString(16)};
      }
      &:active {
        background-color: ${props.theme.schemes.light.primary}${Math.floor(
          (1 - 0.12) * 255
        ).toString(16)};
      }
    `}
`;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonOrLinkProps
>(function (props, ref) {
  if (props.as === "a") {
    const { as, ...anchorProps } = props;
    return <StyledAnchor {...anchorProps} ref={ref as LinkProps["ref"]} />;
  }
  const {
    as = "button",
    isDisabled = false,
    isLoading = false,
    ...buttonProps
  } = props;
  return (
    <StyledButton
      {...buttonProps}
      type="button"
      ref={ref as ButtonProps["ref"]}
      isDisabled={isDisabled}
      disabled={isDisabled}
    />
  );
});
