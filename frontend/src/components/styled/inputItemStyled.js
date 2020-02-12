import styled from 'styled-components'
import { TextField } from '@material-ui/core';

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
        border-color: black; 
        color: white
        }
  }

  width: 50vw;
`;

export {
    InputAdress
}