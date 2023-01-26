import { useForm } from "react-hook-form";
import { MagnifyingGlass } from "phosphor-react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, TextField } from "components";

import { useTransactions } from "contexts/TransactionsContext";

import { SearchFormContainer } from "./styles";

const formSchema = zod.object({
  query: zod.string(),
});

type SearchFormType = zod.infer<typeof formSchema>;

export function SearchForm() {
  const { fetchTransactions } = useTransactions();

  const { register, handleSubmit, formState } = useForm<SearchFormType>({
    defaultValues: {
      query: "",
    },
    resolver: zodResolver(formSchema),
  });

  async function handleSearchTransactions(data: SearchFormType) {
    await fetchTransactions(data.query);
  }

  const { isSubmitting } = formState;

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <TextField
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <Button disabled={isSubmitting} type="submit" variant="outline">
        <MagnifyingGlass size={20} />
        Buscar
      </Button>
    </SearchFormContainer>
  );
}
