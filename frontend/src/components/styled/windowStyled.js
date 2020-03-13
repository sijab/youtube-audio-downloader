import styled, { createGlobalStyle } from 'styled-components';
import Button from '@material-ui/core/Button';

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
  border-radius: 5px;
  padding: 10px 0 40px 0;
`;

const InfoItemDecoration = styled.div`
  margin: 20px 0 0 0;
  border: 1px solid white;
  /* background-color: #282828; */
  background: none;
  border-radius: 5px;
  color: white;
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

const DownloadButton = styled(Button)`
  &&{
    border-color: white;
    color: white;
    display: ${props => props.empty < 1 ? 'none' : 'block'};
    margin-top: 30px;
    /* z-index: -1; */
  }
`;

export {
  Container,
  WindowContainer,
  InfoItemDecoration,
  VideoInfoContainer,
  InputItemContainer,
  DownloadButton
}