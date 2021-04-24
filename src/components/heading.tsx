import React from 'react';
import { Theme } from '../theme/default-theme';
import { useTheme } from '../theme/theme-provider';
import { BoxProps, createBox } from './box';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = BoxProps<Theme, HTMLHeadingElement> & {
    variant: Variant;
};

const HeadingBox = createBox();

export const Heading: React.FC<Props> = ({children, ...props}) => {
    const {theme} = useTheme();
    return <HeadingBox as={props.variant} {...props}>{children}</HeadingBox>;
};
