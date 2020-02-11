import styled from 'styled-components';

const InfoContainer = styled.div`
    width: 70vw;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 50% 50%;
    margin: 20px 0 20px 0;
`;

const InfoTitle = styled.div`
    width: 100%;
    /* border: 2px solid black; */
    display: ${props => props.title ? 'flex' : 'none'};
    align-items: center;
`;

const InfoDuration = styled.div`
    grid-area: 2 / 2 / 3 /3;
    width: 50vw;;
    /* border: 2px solid black; */
    display: ${props => props.duration ? 'flex' : 'none'};
    align-items: center;
`;

const ImageDiv = styled.div`
    grid-area: 1 / 1 / 3 / 2;
    width: ${props => props.thumbnail === "" ? '' : "150px"};
    height: ${props => props.thumbnail === "" ? '' : "100px"};
    background-image: url(${props => props.thumbnail});
    background-position: center;
    background-size: cover;
    /* border: 1px solid red; */
`;

export {
    InfoContainer,
    InfoTitle,
    InfoDuration,
    ImageDiv
}