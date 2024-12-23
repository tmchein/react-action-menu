import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ActionMenuOption } from "../components/ActionMenu";

type ActionMenuContextType = {
  selectedOption: ActionMenuOption | null | undefined;
  setSelectedOption: Dispatch<
    SetStateAction<ActionMenuOption | null | undefined>
  >;
};

type contextProps = {
  children: React.ReactElement;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ActionMenuContext = createContext<ActionMenuContextType | null>(
  null,
);

const ActionMenuContextProvider = ({ children }: contextProps) => {
  const [selectedOption, setSelectedOption] =
    useState<ActionMenuOption | null>();

  return (
    <ActionMenuContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </ActionMenuContext.Provider>
  );
};

export { ActionMenuContextProvider };
