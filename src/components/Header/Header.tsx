import { HeaderContainer, HeaderContent } from "./Header.styles";

import logo from "../../assets/Logo.svg";
import effect from "../../assets/effect.svg";
import effectFlipped from "../../assets/effectFlipped.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={effect} alt="" />
      <HeaderContent>
        <img src={logo} alt="" />
      </HeaderContent>
      <img src={effectFlipped} alt="" />
    </HeaderContainer>
  );
}
