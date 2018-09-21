import styled from 'styled-components';
import Box from '../Box';

const StyledFlex = {
    Parent: styled(Box)`
        display: ${props => props.flexDisplay};
        flex-direction: ${props => props.flexDirection};
        flex-wrap: ${props => props.flexWrap};
        flex-flow: ${props => props.flexFlow};
        justify-content: ${props => props.justifyContent};
        align-items: ${props => props.alignItems};
        align-content: ${props => props.alignContent};
        ${props => props.styles && props.styles(props)};
    `,
    Child: styled(Box)`
        order: ${props => props.flexOrder};
        flex-grow: ${props => props.flexGrow};
        flex-shrink: ${props => props.flexShrink};
        flex-basis: ${props => props.flexBasis};
        flex: ${props => props.flex};
        align-self: ${props => props.alignSelf};
        ${props => props.styles && props.styles(props)};
    `,
};

export default StyledFlex;
