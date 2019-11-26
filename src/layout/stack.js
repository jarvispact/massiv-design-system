import styled from 'styled-components';
import Box from '../atoms/box';

const Stack = styled(Box)`
    > * {
        margin-bottom: ${props => props.theme.spacing[props.spacing] || props.spacing};
    }

    & > :last-child {
        margin-bottom: 0px;
    }
`;

export default Stack;
