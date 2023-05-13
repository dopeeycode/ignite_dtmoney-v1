import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: .25rem;
    color: var(--text-title);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong{
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      display: block;
    }

    &.highlight-background{
      background: var(--green-500);
      color: #FFF;
    }

  }
  
`;