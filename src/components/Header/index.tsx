import logoImage from "assets/svg/logo.svg";

import { Button } from "components";

import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} />
        <Button>Nova transação</Button>
      </HeaderContent>
    </HeaderContainer>
  );
}
