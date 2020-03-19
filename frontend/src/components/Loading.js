import React, { Component } from 'react';
import { LoadingContainer, Wrapper, Bounceball, Text } from './styled/loadingStyled';
import PropTypes from 'prop-types';

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

Loading.propTypes = {
    name: PropTypes.string.isRequired
}

export default Loading;