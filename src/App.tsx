import { GlobalStyle } from "./styles/global"
import Modal from 'react-modal'
import { useState } from "react"


import Header from "./components/Header/Header"
import Dashboard from "./components/Dashboard/Dashboard"
import NewTransactionModal from "./components/NewTransactionModal/NewTransactionModal"

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
    <>
      <GlobalStyle/>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
    </>
  )
}
