import { HTMLProps } from "react";

export type ActionButtonProps = Pick<
  HTMLProps<HTMLButtonElement>,
  "id" | "onClick" | "ref" | "children"
>;
