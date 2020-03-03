import React, { Component } from 'react';
import videoLengthValidate from '../helpers/durationValidate';
import { InfoContainer, InfoTitle, InfoDuration, ImageDiv, TrashButton } from './styled/infoStyled';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';




class Info extends Component {

    render() {
        return (
            <>
                <InfoContainer>
                    <ImageDiv thumbnail={this.props.thumbnail} />

                    <InfoTitle title={this.props.title}>
                        Nazwa utworu: &nbsp; <b> {` ${this.props.title}`}</b>
                    </InfoTitle>

                    <InfoDuration duration={this.props.duration}>
                        Długość utworu: &nbsp; <b> {`${videoLengthValidate(this.props.duration)}`}</b>
                    </InfoDuration>

                    <TrashButton onClick = {this.props.remove}>
                        <DeleteForeverIcon fontSize = "large"/>
                    </TrashButton>
                </InfoContainer>
            </>
        )
    }
}



export default Info;