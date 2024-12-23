import { RefObject, useEffect } from "react";

const targetEvents = ["mousedown", "touchstart"];

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref?.current?.contains(event.target as Node)) {
        return;
      }

      handler(event as MouseEvent);
    };
    targetEvents.forEach((e) => document.addEventListener(e, listener));

    return () => {
      targetEvents.forEach((e) => document.removeEventListener(e, listener));
    };
  }, [ref, handler]);
};
