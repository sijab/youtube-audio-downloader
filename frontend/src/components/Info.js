import React, { Component } from 'react';
import videoLenghtValidate from '../common/durationValidate';
import { InfoContainer, InfoTitle, InfoDuration, ImageDiv} from './styled/infoStyled';

class Info extends Component {

    render() {
        return (
            <>
            {/* {`${this.props.urlInput}`} <br/>
            {`${this.props.urlResponse}`} <br/> */}
                <InfoContainer>
                    <ImageDiv thumbnail={this.props.thumbnail} />

                    <InfoTitle title={this.props.title}>
                        Nazwa utworu: <b> {` ${this.props.title}`}</b>
                    </InfoTitle>

                    <InfoDuration duration={this.props.duration}>
                        Długość utworu: <b> {`${videoLenghtValidate(this.props.duration)}`}</b>
                    </InfoDuration>
                </InfoContainer>
            </>
        )
    }
}



export default Info;