import React from 'react';
import { shape, object, string, bool, func } from 'prop-types';
import { withTheme } from 'styled-components';
import StyledIcon from './StyledIcon';

const propTypes = {
    theme: shape({
        settings: shape({
            icons: object,
        }).isRequired,
    }).isRequired,
    name: string.isRequired,
    fontColor: string,
    fontScale: string,
    loading: bool,
    className: string,
    styles: func,
};

const defaultProps = {
    fontColor: undefined,
    fontScale: undefined,
    loading: undefined,
    className: undefined,
    styles: undefined,
};

const Icon = ({ theme, name, fontColor, fontScale, loading, className, styles }) => (
    <StyledIcon
        fontColor={fontColor}
        fontScale={fontScale}
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
