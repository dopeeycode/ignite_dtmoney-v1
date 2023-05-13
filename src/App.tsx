import { GlobalStyle } from "./styles/global"

import Header from "./components/Header/Header"
import Dashboard from "./components/Dashboard/Dashboard"

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Dashboard />
    </>
  )
}
