import { GenericOption } from "../../shared/types";

export type ActionMenuOption = GenericOption & {
  action?: (args?: unknown) => void;
  renderAction?: JSX.Element;
};

export type ActionMenuProps = {
  options: ActionMenuOption[];
  text: string;
};

export type ActionMenuItemListProps = {
  options: ActionMenuProps["options"];
  selectedOption?: (option: ActionMenuOption) => void;
};
