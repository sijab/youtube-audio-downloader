import React, { Component } from 'react';
import { LoadingContainer, Wrapper, Bounceball, Text } from './styled/loadingStyled';

class Loading extends Component {

    render() {

        const { name } = this.props;

        return (
            <>
                <LoadingContainer>
                    <Wrapper>
                        <div>
                            <Bounceball />
                            <Text>{`${ name }`}</Text>
                        </div>
                    </Wrapper>
                </LoadingContainer>
            </>
        )
    }
}

export default Loading;