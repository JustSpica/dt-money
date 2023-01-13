import * as DialogPrimitive from "@radix-ui/react-dialog";

import logoImage from "assets/svg/logo.svg";

import { Button, Modal } from "components";

import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} />

        <DialogPrimitive.Root>
          <DialogPrimitive.Trigger asChild>
            <Button>Nova transação</Button>
          </DialogPrimitive.Trigger>
          <Modal />
        </DialogPrimitive.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
