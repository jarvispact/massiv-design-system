import styled from 'styled-components';
import { getBackgroundColor, getBorder, getShadow, getFontColor } from './helpers';

const StyledButton = styled.button`
    width: 100%;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: ${getBackgroundColor()};
    ${getBorder()};
    ${getShadow()};
    color: ${getFontColor()};
    font-size: ${props => props.theme.fontScale[props.scale] || props.scale};
    font-family: ${props => props.theme.fonts.paragraph};
    padding: 0.5rem 1rem;
    &:focus {
        outline: 0;
    }
    ${props => props.styles && props.styles(props)};
`;

export default StyledButton;
