import React, { Component } from 'react';
import videoLengthValidate from '../helpers/durationValidate';
import { InfoContainer, InfoTitle, InfoDuration, ImageDiv, TrashButton } from './styled/infoStyled';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PropTypes from 'prop-types';



class Info extends Component {

    render() {

        const { thumbnail, title, duration, remove } = this.props;
        
        return (
            <>
                <InfoContainer>
                    <ImageDiv thumbnail={ thumbnail } />

                    <InfoTitle title={ title }>
                        Nazwa utworu: &nbsp; <b> {` ${ title }`}</b>
                    </InfoTitle>

                    <InfoDuration duration={ duration }>
                        Długość utworu: &nbsp; <b> {`${videoLengthValidate( duration )}`}</b>
                    </InfoDuration>

                    <TrashButton onClick = { remove }>
                        <DeleteForeverIcon fontSize = "large"/>
                    </TrashButton>
                </InfoContainer>
            </>
        )
    }
}

Info.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired
}

export default Info;