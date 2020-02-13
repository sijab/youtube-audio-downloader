import styled from 'styled-components'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const InputAdress = styled(TextField)`

    input {
        color: white
    }
    label {
        color: white; 
    }
    label.Mui-focused {
      color: white
    }
    .MuiOutlinedInput-root {
        fieldset {
            border-color: white; 
        }

        /* &:hover fieldset {
        border-color: yellow; 
        } */

        &.Mui-focused fieldset {
        border-color: #050607; 
        color: white
        }
  }

  width: 50vw;
`;



const InputButton = styled(Button)`
    && {
        color: white;
        margin: 0 0 0 20px;
        border-color: white;
        width: 100px;
        &:hover {
            background-color: gray;
        }
    }
`;

export {
    InputAdress,
    InputButton
}