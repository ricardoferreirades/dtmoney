import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from ".././../assets/close.svg";
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      type,
      title,
      value,
      category,
    };

    api.post("transactions", data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" className="react-modal-close">
        <img src={closeImg} alt="close modal icon" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>New transaction</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          min={0}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={incomeImage} alt="An arrow up" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => {
              setType("withdraw");
            }}
          >
            <img src={outcomeImage} alt="An arrow down" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Save</button>
      </Container>
    </Modal>
  );
}
