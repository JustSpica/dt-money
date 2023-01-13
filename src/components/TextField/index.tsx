import { InputHTMLAttributes } from "react";

import { TextFieldContainer } from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextField(props: TextFieldProps) {
  return <TextFieldContainer {...props} />;
}
