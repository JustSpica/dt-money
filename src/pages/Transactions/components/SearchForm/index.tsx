import { MagnifyingGlass } from "phosphor-react";

import { Button, TextField } from "components";

import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <TextField type="text" placeholder="Busque por transações" />
      <Button variant="outline">
        <MagnifyingGlass size={20} />
        Buscar
      </Button>
    </SearchFormContainer>
  );
}
