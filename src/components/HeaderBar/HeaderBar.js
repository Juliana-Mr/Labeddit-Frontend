import { useLocation, useNavigate } from "react-router-dom";
import HeaderLogo from "../../images/logo2.svg"
import { goToLoginPage, goToPostsPage } from "../../routes/coordinator";
import { TOKEN_NAME } from "../../constants/constants";
import Close from "../../images/close.svg"
import { HeaderBarContainer } from "./HeaderBar.styled";


export default function HeaderBar() {
  const location = useLocation()
  const navigate = useNavigate()

  const deslogar = () => {
    window.localStorage.removeItem(TOKEN_NAME)
    goToLoginPage(navigate)
  }

  const renderCorrectButtons = () => {
    switch (location.pathname) {
      case "/signup":
        return <button onClick={() => goToLoginPage(navigate)}>Entrar</button>

      case "/":
        return <button onClick={deslogar}>Deslogar</button>

      default:
        return (
          <>
            <button onClick={() => goToPostsPage(navigate)}>
              <img className="close-icon" src={Close} alt="Voltar para posts" />
            </button>

            <button className="logout-btn" onClick={deslogar}>Deslogar</button>
          </>
        )
    }
  }

  return (
    <HeaderBarContainer>
      <img id="header-bar-logo" src={HeaderLogo} alt="LabEddit mini logo" />

      {renderCorrectButtons()}
    </HeaderBarContainer>
  );
}