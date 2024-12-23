import { createContext, useState } from "react";
import { ActionMenuOption } from "../components/ActionMenu";
import { ActionMenuContextProps, ActionMenuContextType } from "./types";

// eslint-disable-next-line react-refresh/only-export-components
export const ActionMenuContext = createContext<ActionMenuContextType | null>(
  null,
);

const ActionMenuContextProvider = ({ children }: ActionMenuContextProps) => {
  const [selectedOption, setSelectedOption] =
    useState<ActionMenuOption | null>();

  return (
    <ActionMenuContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </ActionMenuContext.Provider>
  );
};

export { ActionMenuContextProvider };
