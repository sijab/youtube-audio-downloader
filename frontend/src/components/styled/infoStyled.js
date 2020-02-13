import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';


const InfoContainer = styled.div`
    width: 70vw;
    display: grid;
    grid-template-columns: 20% 65% 10%;
    grid-template-rows: 50% 50%;
    margin: 20px 0 20px 0;
`;

const InfoTitle = styled.div`
    width: 50vw;
    display: ${props => props.title ? 'flex' : 'none'};
    align-items: center;
    padding: 0 0 0 20px;
`;

const InfoDuration = styled.div`
    grid-area: 2 / 2 / 3 /3;
    width: 50vw;
    display: ${props => props.duration ? 'flex' : 'none'};
    align-items: center;
    padding: 0 0 0 20px;
`;

const ImageDiv = styled.div`
    grid-area: 1 / 1 / 3 / 2;
    width: ${props => props.thumbnail === "" ? '' : "150px"};
    height: ${props => props.thumbnail === "" ? '' : "100px"};
    background-image: url(${props => props.thumbnail});
    background-position: center;
    background-size: cover;
    border: 1px solid white;
    margin: 0 0 0 20px;
`;

const TrashButton = styled(IconButton)`
    && {
        grid-area: 1 / 3 / 3 / 4;
        color: white;
    }
`;

export {
    InfoContainer,
    InfoTitle,
    InfoDuration,
    ImageDiv,
    TrashButton
}