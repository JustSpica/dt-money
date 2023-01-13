import logoImage from "assets/svg/logo.svg";

import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} />
        <button>Nova transação</button>
      </HeaderContent>
    </HeaderContainer>
  );
}
