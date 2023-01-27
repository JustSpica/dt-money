import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { Button, TextField } from "components";

import { useTransactions } from "contexts/TransactionsContext";

import {
  CloseButton,
  Content,
  Overlay,
  RadioButtonType,
  TransactionTypeContainer,
} from "./styles";

const formSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(["income", "outcome"]),
});

type NewTransactionFormType = zod.infer<typeof formSchema>;

export function Modal() {
  const createNewTransaction = useTransactions(context => {
    return context.createNewTransaction;
  });

  const { control, register, reset, handleSubmit } =
    useForm<NewTransactionFormType>({
      resolver: zodResolver(formSchema),
    });

  function handleCreateNewTransaction(data: NewTransactionFormType) {
    const { category, description, price, type } = data;

    createNewTransaction({
      category,
      createdAt: new Date(),
      description,
      price,
      type,
    });

    reset();
  }

  return (
    <DialogPrimitive.Portal>
      <Overlay />
      <Content>
        <DialogPrimitive.Title>Nova transação</DialogPrimitive.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <TextField
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <TextField
            type="number"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <TextField
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionTypeContainer
                onValueChange={field.onChange}
                value={field.value}
              >
                <RadioButtonType value="income" variant="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </RadioButtonType>
                <RadioButtonType value="outcome" variant="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </RadioButtonType>
              </TransactionTypeContainer>
            )}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </DialogPrimitive.Portal>
  );
}
