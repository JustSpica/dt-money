import { HeaderContainer, HeaderContent } from "components/Header/styles";

import logoImage from "assets/svg/logo.svg";

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
