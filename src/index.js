import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { IntlProvider } from 'react-intl';

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const userLanguage = navigator.language || navigator.userLanguage;
const messages = userLanguage.startsWith("es") ? localeEsMessages : localeEnMessages;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={userLanguage} messages={messages}>
    <Container className="mt-3">
      <App />
    </Container>
  </IntlProvider>
);