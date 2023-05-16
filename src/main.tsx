import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Model, createServer } from 'miragejs';

createServer({
  models: {
    transaction: Model, 
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          type: 'deposit',
          category: 'Dev',
          amount: '12000',
          createdAt: new Date('2023-05-16 08:18'),
        },
        {
          id: 2,
          title: 'Computador',
          type: 'withdraw',
          category: 'Acessórios',
          amount: '2000',
          createdAt: new Date('2023-02-16 16:28'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      // Dados que está vindo da requisição
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
