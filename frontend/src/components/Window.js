import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputIttem from './InputItem';
import { Container, WindowContainer, InfoItemDecoration, VideoInfoContainer, InputItemContainer, DownloadButton } from "./styled/windowStyled";
import Info from './Info';
import Loading from './Loading';
import { removeItem, sendUrlToBackend, startDownload } from '../action/action';
import PropTypes from 'prop-types';

class Window extends Component {

    render() {

        const { downloadStart, loading, videoArray, videoUrlArray } = this.props;
        const { removeItem, startDownload, sendUrlToBackend } = this.props;

        return (
            <>
                <Container />
                <WindowContainer>
                    <InputItemContainer>
                        <InputIttem />
                    </InputItemContainer>


                    {downloadStart ? <Loading name = {`Download`} /> : null }
                    {loading ? <Loading name = {`Loading`} /> : null }

                    <InfoItemDecoration empty = {videoArray.length}>
                        {videoArray.map((item, index)=> (
                            <VideoInfoContainer key={index}>
                                <Info
                                    title={item.title}
                                    thumbnail={item.thumbnail}
                                    duration={item.duration} 
                                    remove = {() => removeItem(item.id)}
                                />
                            </VideoInfoContainer>
                        ))}
                    </InfoItemDecoration>
                    <DownloadButton 
                        onClick = {() => {
                            startDownload()
                            sendUrlToBackend(videoUrlArray)
                        }}
                        variant="outlined" 
                        empty = {videoArray.length}
                    >DOWNLOAD</DownloadButton>
                </WindowContainer>
            </>
        )
    }
}

Window.propTypes = {
    downloadStart: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    videoArray: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired,
    startDownload: PropTypes.func.isRequired,
    sendUrlToBackend: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    videoArray: state.videoArray,
    title: state.title,
    thumbnail: state.thumbnail,
    duration: state.duration,
    loading: state.loading,
    videoUrlArray: state.videoUrlArray,
    downloadStart: state.downloadStart
})

const mapDispatchToProps = {
    removeItem,
    sendUrlToBackend,
    startDownload
}


export default connect(mapStateToProps, mapDispatchToProps)(Window);