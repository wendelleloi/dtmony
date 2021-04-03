import { createGlobalStyle }  from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --red: #E52E4D;
  --blue: #5429dc;
  --green: #33cc95;
  
  --light-blue: #6933ff;
  
  --text-title: #363f5f;
  --text-body: #969cb3;
  
  --background: #f0f2f5;
  --shape: #ffffff;
}

* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

// font-size padrão do browser é 16px, ideal para desktop

// REM = 1rem = font-size
// 1rem = 16px (padrão web browser)


html {
  @media (max-width:1080px) {
    font-size: 93.75%; // 15px
  }
  @media (max-width:720px) {
    font-size: 87.5%; // 14px
  }
}

body {
  background-color: var(--background);
  -webkit-font-smoothing: antialiased;
}


// por padão os botões, inputs textarea não usam a font
// do <body> por padrão

body, input, button, textarea {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

// a font dos h1, ... no HTML por padrão é 500
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button { 
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay{
  background-color: rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content:center;
  align-items: center;

}
.react-modal-content{
  width: 100%;
  max-width: 576px;

  background-color: var(--background);

  padding: 3rem;

  position: relative;

  border-radius: 0.25rem;
}

.react-modal-close {
  position: absolute;

  right: 1.5rem;
  top: 1.5rem;

  border: 0;
  background-color:transparent;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8)
  }
}
`