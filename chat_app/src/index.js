import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './components/context/authContext';
import { ChatProvider } from './components/context/chatContext';
import MessageProvider from './components/context/MessageProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
          <ChatProvider>
            <App />
            </ChatProvider>      
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
