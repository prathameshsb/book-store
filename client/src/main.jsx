import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import your store
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your App component with Provider and pass the store */}
      <App />
    </Provider>
  </React.StrictMode>,
)


