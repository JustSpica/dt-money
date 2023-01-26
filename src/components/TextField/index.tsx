import { forwardRef, InputHTMLAttributes } from "react";

import { TextFieldContainer } from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    return <TextFieldContainer ref={ref} {...props} />;
  },
);
TextField.displayName = "TextField";
