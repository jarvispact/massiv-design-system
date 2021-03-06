import { cx } from '@emotion/css';
import React from 'react';
import { Theme } from '../theme/default-theme';
import { omit } from '../utils/omit';
import { useCss } from '../hooks/use-css';
import { HTMLAttributesWithoutStyleProps, LiteralUnion, UnpackThemeScope } from '../utils/types';
import { widthSystemDef, WidthSystemObj } from '../system/width';
import { heightSystemDef, HeightSystemObj } from '../system/height';

const systemDefinitions = omit(['width', 'height', 'w', 'h'], {
    ...widthSystemDef,
    ...heightSystemDef,
    cssWidth: { themeScope: 'width', getCSS: (v: string) => ({ width: v }) },
    cssHeight: { themeScope: 'height', getCSS: (v: string) => ({ height: v }) },
});

type SystemObj<T extends Theme> = Omit<WidthSystemObj<T>, 'width' | 'w'> &
    Omit<HeightSystemObj<T>, 'height' | 'h'> & {
        cssWidth?: LiteralUnion<UnpackThemeScope<T, 'width'>>;
        cssHeight?: LiteralUnion<UnpackThemeScope<T, 'height'>>;
    };

const omitProps = Object.keys(systemDefinitions);

export type ImageProps<T extends Theme = Theme> = HTMLAttributesWithoutStyleProps<
    React.ImgHTMLAttributes<HTMLImageElement>
> &
    SystemObj<T> & {
        width?: string;
        height?: string;
        [x: string]: unknown;
    };

export const Image = React.forwardRef(
    <T extends Theme>({ className, ...props }: ImageProps<T>, ref: React.ForwardedRef<HTMLImageElement>) => {
        const { css } = useCss<T>();
        const dynamicStyle = css(props, systemDefinitions);
        const newClassName = cx(dynamicStyle, className);
        return <img className={newClassName} {...omit(omitProps, { ...props, ref })} />;
    },
);

Image.displayName = 'Image';
