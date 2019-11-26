import styled from 'styled-components';
import Box from '../atoms/box';

const Inline = styled(Box)`
    display: inline-block;

    > * {
        margin-right: ${props => props.theme.spacing[props.spacing] || props.spacing};
    }

    & > :last-child {
        margin-right: 0px;
    }
`;

export default Inline;
