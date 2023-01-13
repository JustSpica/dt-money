import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { Button, TextField } from "components";

import {
  CloseButton,
  Content,
  Overlay,
  RadioButtonType,
  TransactionTypeContainer,
} from "./styles";

export function Modal() {
  return (
    <DialogPrimitive.Portal>
      <Overlay />
      <Content>
        <DialogPrimitive.Title>Nova transação</DialogPrimitive.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form>
          <TextField type="text" placeholder="Descrição" required />
          <TextField type="number" placeholder="Preço" required />
          <TextField type="text" placeholder="Categoria" required />
          <TransactionTypeContainer>
            <RadioButtonType value="income" variant="income">
              <ArrowCircleUp size={24} />
              Entrada
            </RadioButtonType>
            <RadioButtonType value="outcome" variant="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </RadioButtonType>
          </TransactionTypeContainer>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </DialogPrimitive.Portal>
  );
}
