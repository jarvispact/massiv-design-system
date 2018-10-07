import React from 'react';
import { shape, object, string, bool, func } from 'prop-types';
import { withTheme } from 'styled-components';
import StyledIcon from './StyledIcon';
import { stringOrArray } from '../../prop-types';

const propTypes = {
    theme: shape({
        settings: shape({
            icons: object,
        }).isRequired,
    }).isRequired,
    name: string.isRequired,
    display: stringOrArray,
    color: stringOrArray,
    scale: stringOrArray,
    loading: bool,
    styles: func,
    className: string,
};

const defaultProps = {
    display: undefined,
    color: undefined,
    scale: undefined,
    loading: undefined,
    styles: undefined,
    className: undefined,
};

const Icon = ({ theme, name, display, color, scale, loading, className, styles }) => (
    <StyledIcon
        iconDisplay={display}
        fontColor={color}
        fontScale={scale}
        loading={loading}
        className={`${theme.settings.icons ? theme.settings.icons.className : ''} ${className || ''}`.trim()}
        styles={styles}
    >
        {loading ? 'settings' : name}
    </StyledIcon>
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default withTheme(Icon);
