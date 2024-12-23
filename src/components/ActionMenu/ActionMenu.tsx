import { useRef, useState } from "react";
import { ActionMenuOption, ActionMenuProps } from "./types";
import { Dropdown } from "../Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { ActionMenuItemList } from "./ActionMenuItemList";
import ActionMenuStyles from "./ActionMenu.module.css";
import clsx from "clsx";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useOnEscape } from "../../hooks/useOnEscape";
import { useActionMenuContext } from "../../hooks/useActionMenuContext";

export function ActionMenu({ text, options }: ActionMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
  const { selectedOption, setSelectedOption } = useActionMenuContext();
  const MenuButtonRef = useRef<HTMLButtonElement>(null);
  const MenuRef = useRef<HTMLDivElement>(null);

  const open = Boolean(anchorEl);

  // Handling exiting actions
  useOnClickOutside(MenuRef, (e) => {
    const element = e.target as HTMLElement;
    if (element.id !== "MenuButton") {
      closeActionMenu();
    }
  });

  useOnEscape(MenuRef, () => {
    if (open) {
      closeActionMenu();
    }
  });

  const closeActionMenu = () => {
    setAnchorEl(null);
    setSelectedOption(null);
  };

  /* 
  NOTE:
  The strategy for rendering or calling actions is the following:
  If we have an action then we execute it, if not then we execute
  The render action. 
  */
  const handleOptionSelection = (option: ActionMenuOption) => {
    if (option.action) {
      option.action();
      closeActionMenu();
    } else if (option.renderAction) {
      setSelectedOption(option);
    } else {
      closeActionMenu();
    }
  };

  const wrappedOnClose = () => {
    //props.onClose?.()
  };

  const wrappedOnOpen = () => {
    //props.onOpen?()
  };

  const buttonAnchorLeftPoint = (MenuButtonRef?.current?.offsetWidth || 0) / 2;

  return (
    <Dropdown open={open} onClose={wrappedOnClose} onOpen={wrappedOnOpen}>
      <MenuButton
        slotProps={{
          root: {
            id: "MenuButton",
            onClick: (e) => {
              if (!anchorEl) setAnchorEl(e.target as HTMLElement);
              if (open) {
                closeActionMenu();
              }
            },
          },
        }}
        className={clsx([
          ActionMenuStyles["action-menu-button"],
          open ? ActionMenuStyles["action-menu-button-active"] : null,
        ])}
        ref={MenuButtonRef}
      >
        {text}
      </MenuButton>
      <Menu
        ref={MenuRef}
        slotProps={{
          listbox: {
            className: ActionMenuStyles["action-menu-list-box"],
            style: {
              left: `-${buttonAnchorLeftPoint}px`,
            },
          },
        }}
      >
        {selectedOption?.renderAction ? (
          selectedOption?.renderAction
        ) : (
          <ActionMenuItemList
            selectedOption={(option) => handleOptionSelection(option)}
            options={options}
          />
        )}
      </Menu>
    </Dropdown>
  );
}
