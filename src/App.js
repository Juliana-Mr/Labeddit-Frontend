import { AppContainer, GlobalStyle } from './GlobalStyle-components';
import Router from './routes/Router';

export default function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router />
    </AppContainer>
  );
}