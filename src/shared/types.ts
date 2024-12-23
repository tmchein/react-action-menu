import { Dispatch, SetStateAction } from "react";
import { ActionMenuOption } from "../components/ActionMenu";

type GenericOption = {
  id: string;
  label: string;
  value: string;
};

type ActionMenuContextType = {
  selectedOption: ActionMenuOption | null | undefined;
  setSelectedOption: Dispatch<
    SetStateAction<ActionMenuOption | null | undefined>
  >;
};

type ActionMenuContextProps = {
  children: React.ReactElement;
};

export type { GenericOption, ActionMenuContextProps, ActionMenuContextType };
