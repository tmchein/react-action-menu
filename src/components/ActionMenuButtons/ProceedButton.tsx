import { MouseEvent } from "react";
import { ActionButtonProps } from "./types";

export function ProceedButton(props: ActionButtonProps) {
  const wrappedOnClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    props?.onClick?.(e);
  };

  return (
    <button {...props} onClick={wrappedOnClick}>
      {props.children || "Yes"}
    </button>
  );
}
