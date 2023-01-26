import { useForm } from "react-hook-form";
import { MagnifyingGlass } from "phosphor-react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, TextField } from "components";

import { SearchFormContainer } from "./styles";

const formSchema = zod.object({
  query: zod.string(),
});

type SearchFormType = zod.infer<typeof formSchema>;

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormType>({
    defaultValues: {
      query: "",
    },
    resolver: zodResolver(formSchema),
  });

  function handleSearchTransactions(data: SearchFormType) {
    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <TextField
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <Button type="submit" variant="outline">
        <MagnifyingGlass size={20} />
        Buscar
      </Button>
    </SearchFormContainer>
  );
}
