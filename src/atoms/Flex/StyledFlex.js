/* eslint-disable no-multi-spaces, comma-spacing */
import styled from 'styled-components';
import Box from '../Box';
import buildCss from '../../build-css';

const flexParentProperties = [
    { cssProp: 'flex-direction',    reactProp: 'flexDirection',     themeProp: null },
    { cssProp: 'flex-wrap',         reactProp: 'flexWrap',          themeProp: null },
    { cssProp: 'flex-flow',         reactProp: 'flexFlow',          themeProp: null },
    { cssProp: 'justify-content',   reactProp: 'justifyContent',    themeProp: null },
    { cssProp: 'align-items',       reactProp: 'alignItems',        themeProp: null },
    { cssProp: 'align-content',     reactProp: 'alignContent',      themeProp: null },
];

const flexChildProperties = [
    { cssProp: 'order',         reactProp: 'flexOrder',     themeProp: null },
    { cssProp: 'flex-grow',     reactProp: 'flexGrow',      themeProp: null },
    { cssProp: 'flex-shrink',   reactProp: 'flexShrink',    themeProp: null },
    { cssProp: 'flex-basis',    reactProp: 'flexBasis',     themeProp: null },
    { cssProp: 'flex',          reactProp: 'flex',          themeProp: null },
    { cssProp: 'align-self',    reactProp: 'alignSelf',     themeProp: null },
];

const StyledFlex = {
    Parent: styled(Box)`
        ${buildCss(flexParentProperties)};
        display: ${props => props.flexDisplay};
        ${props => props.styles && props.styles(props)};
    `,
    Child: styled(Box)`
        ${buildCss(flexChildProperties)};
        ${props => props.styles && props.styles(props)};
    `,
};

export default StyledFlex;
