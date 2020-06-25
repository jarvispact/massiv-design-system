import { Box, BoxProps } from '../atoms/box';
import { styled } from '../theme';

type Props = BoxProps & { inline?: boolean };

export const Grid: React.FC<Props> = styled(Box)`
    display: ${(props) => (props.inline ? 'inline-grid' : 'grid')};
`;
