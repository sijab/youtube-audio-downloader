import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputIttem from './InputItem';
import { Container, WindowContainer, InfoItemDecoration, VideoInfoContainer, InputItemContainer, DownloadButton } from "./styled/windowStyled";
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

                    {this.props.loading ? <Loading /> : null }

                    <InfoItemDecoration empty = {this.props.videoObject.length}>
                        {this.props.videoObject.map(item => (
                            <VideoInfoContainer key={item.id}>
                                <Info
                                    title={item.title}
                                    thumbnail={item.thumbnail}
                                    duration={item.duration} />
                            </VideoInfoContainer>
                        ))}
                    </InfoItemDecoration>
                    <DownloadButton variant="outlined" empty = {this.props.videoObject.length}>Download</DownloadButton>
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
    loading: state.loading
})


export default connect(mapStateToProps, null)(Window);