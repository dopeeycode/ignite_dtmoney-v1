import { logo } from '../../assets/directory'

// Components Styled
import { Container, Content } from './styles'


export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type='button'>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
