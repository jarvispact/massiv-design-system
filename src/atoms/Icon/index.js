import React from 'react';
import { shape, string, bool, func } from 'prop-types';
import { withTheme } from 'styled-components';
import StyledIcon from './StyledIcon';

const propTypes = {
    theme: shape({
        icons: shape({
            className: string.isRequired,
        }).isRequired,
    }).isRequired,
    name: string.isRequired,
    color: string,
    scale: string,
    loading: bool,
    onClick: func,
    className: string,
    styles: func,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    loading: undefined,
    onClick: undefined,
    className: undefined,
    styles: undefined,
};

const Icon = ({ theme, name, color, scale, loading, onClick, className, styles }) => (
    <StyledIcon
        color={color}
        scale={scale}
        loading={loading}
        onClick={loading ? undefined : onClick}
        className={`${theme.icons.className} ${className || ''}`}
        styles={styles}
    >
        {loading ? 'settings' : name}
    </StyledIcon>
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default withTheme(Icon);
