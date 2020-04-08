import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from 'App';
import Account from "components/Account";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Account>
            <App />
        </Account>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

