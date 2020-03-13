import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputIttem from './InputItem';
import { Container, WindowContainer, InfoItemDecoration, VideoInfoContainer, InputItemContainer, DownloadButton } from "./styled/windowStyled";
import Info from './Info';
import Loading from './Loading';
import { removeItem, sendUrlToBackend, startDownload } from '../action/action';

class Window extends Component {

    render() {

        const { downloadStart, loading, videoObject, videoUrlArray } = this.props;
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

                    <InfoItemDecoration empty = {videoObject.length}>
                        {videoObject.map((item, index)=> (
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
                        empty = {videoObject.length}
                    >DOWNLOAD</DownloadButton>
                </WindowContainer>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    videoObject: state.videoObject,
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