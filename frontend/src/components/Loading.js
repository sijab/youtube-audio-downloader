import React, { Component } from 'react';
import { LoadingContainer, Wrapper, Bounceball, Text } from './styled/loadingStyled';

class Loading extends Component {

    render() {
        return(
            <>
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