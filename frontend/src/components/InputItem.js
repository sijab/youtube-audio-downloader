import React, {Component} from 'react';
import { sendUrl, getUrl } from '../action/action';
import { connect } from 'react-redux';
import { InputAdress } from './styled/inputItemStyled';


class InputItem extends Component {


    render() {
        return (
            <>
                <InputAdress 
                    id="outlined-basic" 
                    label="Podaj URL" 
                    variant="outlined"
                    onChange = {e => { this.props.getUrl(e.target.value); this.props.sendUrl(e.target.value)}}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    url: state.url
})

const mapDispatchToProps = {
    sendUrl,
    getUrl
}

export default connect(mapStateToProps, mapDispatchToProps)(InputItem);