import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(270deg, #68d8a8,#47ada1,#478288);
  
}
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
img {
    display: block;
}
p {
    margin: 0;
}
`;
