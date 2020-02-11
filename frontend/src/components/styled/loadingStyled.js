import styled, { keyframes, createGlobalStyle  } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

const LoadingContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width:100vw;
    height: 100vh;
    background-color: white;
    opacity: 0.7;
`;

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const bounce = keyframes`

    0% {
        top: 30px;
        height: 5px;
        border-radius: 60px 60px 20px 20px;
        transform: scaleX(2);
    }

    35% {
        height: 30px;
        border-radius: 50%;
        transform: scaleX(1);
    }
    
    100% {
        top: 0;
    }
`; 

const Bounceball = styled.div`
    position: relative;
    display: inline-block;
    height: 37px;
    width: 15px;
    
    &:before {
        position: absolute;
        content: '';
        display: block;
        top: 0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #fbae17;
        transform-origin: 50%;
        animation: ${bounce} 500ms alternate infinite ease;
    }
`;

const Text = styled.div`
    color: #fbae17;
    display: inline-block;
    margin-left: 5px;
    font-size: 22px;
    letter-spacing: 4px;
`;

export {
    GlobalStyles,
    LoadingContainer,
    Wrapper,
    Bounceball,
    Text
}