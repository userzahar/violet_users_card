
import { HeaderLink, HeaderStyled } from "./Header.styled"

export const Header = () => {
    return  <HeaderStyled>
      <nav>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/tweets">Tweets</HeaderLink>
      </nav>
      </HeaderStyled>
}