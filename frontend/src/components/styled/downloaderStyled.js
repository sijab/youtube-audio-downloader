import styled from 'styled-components';

const Logo = styled.div`
  font-family: 'Bangers', cursive;
  margin: 30px 0 30px 0;
  text-align: center;
  font-size: 50px;
  /* font-weight: bold; */
  letter-spacing: 15px;
  color: gray;
`;

const WindowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-bottom: 100px;
`;

export {
    Logo,
    WindowContainer
}