import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputIttem from './InputItem';
import { Container, WindowContainer, VideoInfoContainer, InputItemContainer} from "./styled/windowStyled";
import Info from './Info';
import Loading from './Loading';

class Window extends Component {

    render() {
        return (
            <>
            <Container />
                <WindowContainer>
                    <InputItemContainer>
                        <InputIttem />
                    </InputItemContainer>

                    {this.props.urlInput === this.props.urlResponse ? null : <Loading />}

                    {this.props.videoObject.map(item => (
                        <VideoInfoContainer key={item.id}>
                            <Info
                                title={item.title}
                                thumbnail={item.thumbnail}
                                duration={item.duration}
                                urlResponse={item.urlResponse}
                                urlInput = {this.props.urlInput} />
                        </VideoInfoContainer>
                    ))}
                </WindowContainer>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    videoObject: state.videoObject,
    id: state.id,
    title: state.title,
    thumbnail: state.thumbnail,
    duration: state.duration,
    urlInput: state.urlInput,
    urlResponse: state.urlResponse
})


export default connect(mapStateToProps, null)(Window);