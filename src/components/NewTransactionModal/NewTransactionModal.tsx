import Modal from "react-modal"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormEvent, useState } from "react";


import { close as CloseIcon, income as IncomeIcon, outcome as OutcomeIcon } from '../../assets/directory';
import { Container, TransactionTypeContainer, RadioBox, SpanFormModalError } from "./styles";

// Types
type CreateFormTransactionData = z.infer<typeof createTransactionScheme>
import { NewTransactionModalProps, } from "../../@types/TransactionModalProps";
import { useTransactions } from "../../hooks/useTransactions";


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
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [typeTransaction, setTypeTransaction] = useState('')

  const { formState: { errors }} = useForm<CreateFormTransactionData>({
    resolver: zodResolver(createTransactionScheme)
  })


  async function handleCreateNewwTransaction(e: FormEvent){
    e.preventDefault()

   await createTransaction({
    title,
    amount: value,
    category,
    type: typeTransaction,
   })

   setTitle('')
   setValue(0)
   setCategory('')
   setTypeTransaction('deposit')
   onRequestClose();

  }

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
        onSubmit={handleCreateNewwTransaction}
      >
        <h2>Cadastrar transação</h2>
        <input 
          placeholder="Título" 
          value={title}
          onChange={event => setTitle(event.target.value)}
          // {...register('title')}
        />
        {errors.title && 
          <SpanFormModalError>
            {errors.title.message}
          </SpanFormModalError>
        }
        <input 
          type="number" 
          // {...register('value')}
          placeholder="Valor" 
          value={value}
          onChange={event => setValue(Number(event.target.value))}
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
          value={category}
          onChange={event => setCategory(event.target.value)}
          // {...register('category')}
        />
        {errors.category && 
          <SpanFormModalError>
            {errors.category.message}
          </SpanFormModalError>
        }

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>

  )
}
