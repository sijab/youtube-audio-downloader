import styled, { createGlobalStyle } from 'styled-components';

const Container = createGlobalStyle`
  body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #212121;
  box-sizing: border-box;
  }
`;

const WindowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    background-color: #272C34;
    min-height: 70vh;
    /* border-radius: 50px; */
    padding: 10px 0 40px 0;
`;

const InfoItemDecoration = styled.div`
    margin: 20px 0 0 0;
    border: 5px solid black;
    display: ${props => props.empty < 1 ? 'none' : 'block'};
    width: 95%;
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
    InfoItemDecoration,
    VideoInfoContainer,
    InputItemContainer
}