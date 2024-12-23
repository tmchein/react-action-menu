import { useContext } from "react";
import { ActionMenuContext } from "../shared/context";

export const useActionMenuContext = () => {
  const actionMenuContext = useContext(ActionMenuContext);

  if (!actionMenuContext) {
    throw new Error(
      "To use the useActionMenuContext you need to wrap it in the provider",
    );
  }

  return actionMenuContext;
};
