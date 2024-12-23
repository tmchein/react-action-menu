import { MenuItem } from "@mui/base";
import ActionMenuStyles from "./ActionMenu.module.css";
import type { ActionMenuItemListProps } from "./types";

function ActionMenuItemList({
  options,
  selectedOption,
}: ActionMenuItemListProps) {
  return (
    <>
      {options.map((option) => {
        return (
          <MenuItem
            onClick={() => selectedOption?.(option)}
            id={option.id}
            key={option.id}
            value={option.value}
            className={ActionMenuStyles["action-menu-item"]}
          >
            {option.label}
          </MenuItem>
        );
      })}
    </>
  );
}

export { ActionMenuItemList };
