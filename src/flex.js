import React from 'react';
import { string, bool, node } from 'prop-types';
import styled from 'styled-components';

const StyledFlex = styled.div`
    display: ${props => props.massivDisplay};
    flex-direction: ${props => props.massivDirection};
    flex-wrap: ${props => props.massivFlexWrap};
    flex-flow: ${props => props.massivFlexFlow};
    justify-content: ${props => props.massivJustifyContent};
    align-items: ${props => props.massivAlignItems};
    align-content: ${props => props.massivAlignContent};
`;

const Flex = ({
    inline,
    direction,
    flexWrap,
    flexFlow,
    justifyContent,
    alignItems,
    alignContent,
    children,
    ...otherProps
}) => (
    <StyledFlex
        massivDisplay={inline ? 'inline-flex' : 'flex'}
        massivDirection={direction}
        massivFlexWrap={flexWrap}
        massivFlexFlow={flexFlow}
        massivJustifyContent={justifyContent}
        massivAlignItems={alignItems}
        massivAlignContent={alignContent}
        {...otherProps}
    >
        {children}
    </StyledFlex>
);

Flex.propTypes = {
    inline: bool,
    direction: string,
    flexWrap: string,
    flexFlow: string,
    justifyContent: string,
    alignItems: string,
    alignContent: string,
    children: node,
};

Flex.defaultProps = {
    inline: false,
    direction: undefined,
    flexWrap: undefined,
    flexFlow: undefined,
    justifyContent: undefined,
    alignItems: undefined,
    alignContent: undefined,
    children: undefined,
};

export default Flex;
