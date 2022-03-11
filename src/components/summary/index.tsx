import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entries" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={incomeImg} alt="outcoming" />
        </header>
        <strong>- R$ 1000,00</strong>
      </div>
      <div className="highlighted-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </Container>
  );
}
