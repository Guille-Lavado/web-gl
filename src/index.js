import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Typer, MultiTyper } from './Typer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* </React.StrictMode> */}
      {/* <App /> */}
      <MultiTyper 
        texts={[
          "Primer texto que se escribe.",
          "Segundo texto en secuencia.",
          "Tercer y último texto.",
        ]}
      />
      <Typer text="Hola Mundo" repeat={false} />
    {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
