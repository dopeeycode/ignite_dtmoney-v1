import styled from "styled-components";

export const Container = styled.header`
  background: var(--purple);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 1rem 10rem;

  button {
    color: #fff;
    background: var(--purple-light);
    border: 0;
    padding:0 2rem;
    border-radius: .25rem;
    height: 3rem;
    
    transition: filter .3s;
    &:hover{
      filter: brightness(.9);
    }
  }
`