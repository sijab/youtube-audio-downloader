import React, { Component } from 'react';
import videoLenghtValidate from '../helpers/durationValidate';
import { InfoContainer, InfoTitle, InfoDuration, ImageDiv, TrashButton } from './styled/infoStyled';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';




class Info extends Component {

    render() {
        return (
            <>
                <InfoContainer>
                    <ImageDiv thumbnail={this.props.thumbnail} />

                    <InfoTitle title={this.props.title}>
                        Nazwa utworu: <b> {` ${this.props.title}`}</b>
                    </InfoTitle>

                    <InfoDuration duration={this.props.duration}>
                        Długość utworu: <b> {`${videoLenghtValidate(this.props.duration)}`}</b>
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