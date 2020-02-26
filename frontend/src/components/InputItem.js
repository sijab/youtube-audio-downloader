import React, {Component} from 'react';
import { sendUrl, getUrl, startLoading, resetInput } from '../action/action';
import { connect } from 'react-redux';
import { InputAdress, InputButton } from './styled/inputItemStyled';


class InputItem extends Component {


    render() {
        return (
            <>
                <InputAdress 
                    error = {this.props.error}
                    value = {this.props.urlInput}
                    id="outlined-basic" 
                    label="Podaj URL"
                    variant="outlined"
                    onChange = {e => this.props.getUrl(e.target.value)}
                />

                <InputButton variant="outlined" 
                onClick = {() => { 
                    this.props.startLoading(); 
                    this.props.sendUrl(this.props.urlInput);
                    this.props.resetInput();
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
    resetInput
}

export default connect(mapStateToProps, mapDispatchToProps)(InputItem);