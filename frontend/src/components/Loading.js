import React, { Component } from 'react';
import { GlobalStyles, LoadingContainer, Wrapper, Bounceball, Text } from './styled/loadingStyled';

class Loading extends Component {

    render() {
        return(
            <>
                <GlobalStyles />
                <LoadingContainer>
                    <Wrapper>
                        <div>
                            <Bounceball />
                            <Text>Loading</Text>
                        </div>
                    </Wrapper>
                </LoadingContainer>
            </>
        )
    }
}

export default Loading;