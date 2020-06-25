import React from 'react';
import { styled } from '../theme/styled';
import { WithTheme } from '../theme';
import { buildCss, CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp } from '../types';
import { BoxProps, Box } from '../atoms';

const getPropertyConfigList = (inline?: boolean): CssPropertyConfig[] =>
    inline
        ? [
              {
                  cssProperty: 'margin-right',
                  componentProps: ['spacing'],
                  themeScope: 'spacing',
              },
          ]
        : [
              {
                  cssProperty: 'margin-bottom',
                  componentProps: ['spacing'],
                  themeScope: 'spacing',
              },
          ];

type Props = BoxProps & { spacing?: ResponsiveProp; inline?: boolean };

export const Stack: React.FC<Props> = styled(Box)<Props>`
    ${(props) => props.inline && 'display: inline-block'};
    > * {
        ${(props) => buildCss<WithTheme<Props>>(getPropertyConfigList(props.inline))(props)}
    }

    & > :last-child {
        ${(props) => (props.inline ? 'margin-right: 0px' : 'margin-bottom: 0px')};
    }
`;
