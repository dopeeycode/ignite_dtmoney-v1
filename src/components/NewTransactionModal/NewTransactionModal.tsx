import Modal from "react-modal"

import { close as CloseIcon, income, outcome } from '../../assets/directory';
import { Container, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}  
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-btn_close"
      >
        <img src={CloseIcon} alt="Botão de fechar o modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>
        <input 
          placeholder="Título" 
        />
        <input 
          type="number" 
          placeholder="Valor" 
        />

        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria" 
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>

  )
}
