import styled, { createGlobalStyle } from 'styled-components';

const Container = createGlobalStyle`
  body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(205, 211, 198);
  }
`;

const WindowContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: #8e8e8e;
    min-height: 70vh;
    border-radius: 50px;
`;

const VideoInfoContainer = styled.div`
    width: 100%;
`;

const InputItemContainer = styled.div`
    margin: 40px 0 0 0;
    width: 100%;
    display: flex;
    justify-content: center;
`;


export {
    Container,
    WindowContainer,
    VideoInfoContainer,
    InputItemContainer
}