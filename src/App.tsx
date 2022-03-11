import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <h1>Hi Ricardo</h1>

      <button type="button" disabled={true}>
        button
      </button>

      <GlobalStyle />
    </div>
  );
}
