import { Box, BoxProps } from './box';
import { styled } from '../theme';

type Props = BoxProps & { inline?: boolean };

export const Flex: React.FC<Props> = styled(Box)`
    display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};
`;
