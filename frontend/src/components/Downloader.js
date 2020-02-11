import React, { Component } from 'react';
import Window from './Window';
import { Logo, WindowContainer } from './styled/downloaderStyled';

class Downloader extends Component {
    render() {
        return (
            <>
                <Logo>YTDL MP3 DOWNLOADER</Logo>
                <WindowContainer>
                    <Window />
                </WindowContainer>
            </>
        )
    }
}

export default Downloader;