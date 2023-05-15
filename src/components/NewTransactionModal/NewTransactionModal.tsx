import Modal from "react-modal"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { close as CloseIcon, income as IncomeIcon, outcome as OutcomeIcon } from '../../assets/directory';
import { Container, TransactionTypeContainer, RadioBox, SpanFormModalError } from "./styles";
import { useState } from "react";

// Types
import { NewTransactionModalProps, } from "../../@types/TransactionModalProps";

const createTransactionScheme = z.object({
  title: z.string()
    .nonempty('Título Obrigatório'),
  value: z.coerce.number()
    .min(1, 'Valores acima ou igual a 1$')
  ,
  category: z.string()
    .nonempty('Categoria Obrigatória'),
})

export default function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [typeTransaction, setTypeTransaction] = useState('')

  const [output, setOutput] = useState('')
  const { 
      register, 
      handleSubmit,
      formState: { errors }
    } = useForm<CreateFormTransactionData>({
    resolver: zodResolver(createTransactionScheme)
  })

  function createTransaction(data: any ){
    setOutput(JSON.stringify(data, null, 2))
  }

  type CreateFormTransactionData = z.infer<typeof createTransactionScheme>


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

      <Container 
        onSubmit={handleSubmit(createTransaction)}
      >
        <h2>Cadastrar transação</h2>
        <input 
          placeholder="Título" 
          {...register('title')}
        />
        {errors.title && 
          <SpanFormModalError>
            {errors.title.message}
          </SpanFormModalError>
        }
        <input 
          type="number" 
          {...register('value')}
          placeholder="Valor" 
        />
        {errors.value && 
          <SpanFormModalError>
            {errors.value.message}
          </SpanFormModalError>
        }

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
          {...register('category')}
        />
        {errors.category && 
          <SpanFormModalError>
            {errors.category.message}
          </SpanFormModalError>
        }

        <button type="submit">Cadastrar</button>
        <pre>{output}</pre>
      </Container>
    </Modal>

  )
}
