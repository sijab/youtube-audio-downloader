import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputIttem from './InputItem';
import { Container, WindowContainer, InfoItemDecoration, VideoInfoContainer, InputItemContainer, DownloadButton } from "./styled/windowStyled";
import Info from './Info';
import Loading from './Loading';
import { removeItem } from '../action/action';

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
                        {this.props.videoObject.map((item, index)=> (
                            <VideoInfoContainer key={index}>
                                <Info
                                    title={item.title}
                                    thumbnail={item.thumbnail}
                                    duration={item.duration} 
                                    remove = {() => this.props.removeItem(item.id)}
                                    />
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
    title: state.title,
    thumbnail: state.thumbnail,
    duration: state.duration,
    loading: state.loading
})

const mapDispatchToProps = {
    removeItem
}


export default connect(mapStateToProps, mapDispatchToProps)(Window);