import { GlobalStyle } from "./styles/global"
import Modal from 'react-modal'


import Header from "./components/Header/Header"
import Dashboard from "./components/Dashboard/Dashboard"
import NewTransactionModal from "./components/NewTransactionModal/NewTransactionModal"
import TransactionsProvider from "./context/TransactionsContext"
import { useState } from "react"

Modal.setAppElement('#root')


export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)


  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle/>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
    </TransactionsProvider>
  )
}
