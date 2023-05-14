import { styled } from "styled-components";

import { darken } from 'polished'

const teste = [
  '#a1a1a1',
  '#a104a2',
  '#e76e8a',
  '#20e201',
]

export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: .25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;


    & + input {
    //todo input que tem outro acima, terá uma margin no topo

      margin-top: 1rem;
    }

  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green-500);
    color: #fff;
    border-radius: .25rem;
    border: 0;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: .3s filter;

    &:hover{
      filter: brightness(.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;

  button {
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: .25rem;

    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: .3s border-color;

    &:hover{
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      color: var(--text-title);
    }
  }
`