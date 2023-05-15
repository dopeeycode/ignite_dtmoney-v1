import Modal from "react-modal"

import { close as CloseIcon, income as IncomeIcon, outcome as OutcomeIcon } from '../../assets/directory';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [typeTransaction, setTypeTransaction] = useState('')


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
          <RadioBox
            type="button"
            onClick={() => { setTypeTransaction('deposit') }}
            isActive={typeTransaction === 'deposit'}
            activeColor={'green'}
          >
            <img src={IncomeIcon} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={typeTransaction === 'withdraw'}
            activeColor={'red'}
            onClick={() => { setTypeTransaction('withdraw') }}
          >
            <img src={OutcomeIcon} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria" 
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>

  )
}
