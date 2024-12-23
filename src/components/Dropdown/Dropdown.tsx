import { Dropdown as BaseDropdown } from "@mui/base/Dropdown";
import { DropdownProps as BaseDropdownProps, ButtonProps } from "@mui/base";
import { useState } from "react";

type DropdownProps = BaseDropdownProps & {
  onOpen?: () => void;
  onClose?: () => void;
  onClick?: ButtonProps["onClick"];
};

type DropdownOnOpenChangeEvent =
  | React.MouseEvent<Element, MouseEvent>
  | React.KeyboardEvent<Element>
  | React.FocusEvent<Element, Element>
  | null;

function Dropdown({ onOpen, onClose, onClick, ...rest }: DropdownProps) {
  const [dropdownState, setDropdownState] = useState(rest.defaultOpen || false);

  const handleDropdownState = (e: DropdownOnOpenChangeEvent, open: boolean) => {
    onClick?.(e as React.MouseEvent<HTMLButtonElement, MouseEvent>);
    if (!dropdownState && open) {
      setDropdownState(true);
      onOpen?.();
    } else {
      setDropdownState(false);
      onClose?.();
    }
  };

  const wrappedOnOpenChange = (e: DropdownOnOpenChangeEvent, open: boolean) => {
    handleDropdownState(e, open);
    rest?.onOpenChange?.(e, open);
  };

  return (
    <BaseDropdown {...rest} onOpenChange={wrappedOnOpenChange}>
      {rest.children}
    </BaseDropdown>
  );
}

export { Dropdown };
