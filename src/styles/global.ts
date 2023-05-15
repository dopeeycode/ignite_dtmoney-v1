import { createGlobalStyle } from "styled-components"
import { darken } from 'polished'

export const GlobalStyle = createGlobalStyle`

  :root{
    --background: #f0f2f5;
    --red: #E52E4D;
    --purple: #5429cc;
    --green-500: #33CC95;
    
    --purple-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disable] {
    opacity: .6;
    cursor: not-allowed;
  }

  // all styles generals of modal

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  } 

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: .24rem;
  }

  .react-modal-btn_close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    
    transition: .3s all ;

    &:hover{
      filter: brightness(.7);
      transform: scale(1.1);
    }
  }

`