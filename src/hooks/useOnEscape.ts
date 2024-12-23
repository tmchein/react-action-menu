import { RefObject, useEffect } from "react";

export const useOnEscape = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: KeyboardEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (!ref.current || event.key !== "Escape") {
        return;
      }

      handler(event);
    };

    document.addEventListener("keydown", listener);
  }, [handler, ref]);
};
