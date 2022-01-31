import ReactDOM from 'react-dom';
import React from 'react';
import { AppRoutes } from 'routes';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'styles/theme';
import { SidebarDrawerProvider } from 'context/SidebarDrawerContext';
import { mock } from 'mock/mirage';
import reportWebVitals from './reportWebVitals';

mock();
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <AppRoutes />
      </SidebarDrawerProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
