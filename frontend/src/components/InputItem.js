import React, {Component} from 'react';
import { sendUrl, getUrl, startLoading, resetInput, makeUrlsArray } from '../action/action';
import { connect } from 'react-redux';
import { InputAdress, InputButton } from './styled/inputItemStyled';


class InputItem extends Component {

    render() {

        const { error, urlInput } = this.props;
        const { getUrl, startLoading, sendUrl, makeUrlsArray, resetInput } = this.props;

        return (
            <>
                <InputAdress 
                    error = { error }
                    value = { urlInput }
                    id="outlined-basic" 
                    label="Podaj URL"
                    variant="outlined"
                    onChange = {e => getUrl(e.target.value)}
                />

                <InputButton variant="outlined" 
                onClick = {() => { 
                    startLoading(); 
                    sendUrl( urlInput );
                    makeUrlsArray( urlInput );
                    resetInput();
                }
                }>ADD</InputButton>

            </>
        )
    }
}

const mapStateToProps = (state) => ({
    urlInput: state.urlInput,
    loading: state.loading,
    error: state.error
})

const mapDispatchToProps = {
    sendUrl,
    getUrl,
    startLoading,
    resetInput,
    makeUrlsArray
}

export default connect(mapStateToProps, mapDispatchToProps)(InputItem);