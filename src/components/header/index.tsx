import { useState } from "react";
import Modal from "react-modal";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onNewTransactionModalOpen: () => void;
}

export function Header({ onNewTransactionModalOpen }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney logo" />
        <button type="button" onClick={onNewTransactionModalOpen}>
          New Transaction
        </button>
      </Content>
    </Container>
  );
}
