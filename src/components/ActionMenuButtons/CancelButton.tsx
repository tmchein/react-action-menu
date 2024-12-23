import { MouseEvent } from "react";
import { ActionButtonProps } from "./types";
import { useActionMenuContext } from "../../hooks/useActionMenuContext";

export function CancelButton(props: ActionButtonProps) {
  const { setSelectedOption } = useActionMenuContext();

  const wrappedOnClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    props?.onClick?.(e);
    setSelectedOption(null);
  };

  return (
    <button {...props} onClick={wrappedOnClick}>
      {props.children || "No"}
    </button>
  );
}
