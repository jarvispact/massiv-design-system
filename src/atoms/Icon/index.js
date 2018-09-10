import React from 'react';
import { shape, string, bool, func } from 'prop-types';
import styled, { withTheme } from 'styled-components';

const propTypes = {
    theme: shape({}).isRequired,
    name: string.isRequired,
    color: string,
    scale: string,
    loading: bool,
    className: string,
    styles: func,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    loading: undefined,
    className: undefined,
    styles: undefined,
};

const StyledIcon = styled.i`
    ${props => props.theme.components.Icon(props)};
    ${props => props.styles && props.styles(props)};
`;

const Icon = ({ theme, name, color, scale, loading, className, styles }) => (
    <StyledIcon
        color={color}
        scale={scale}
        loading={loading}
        className={`${theme.settings.icons.className || ''} ${className || ''}`.trim()}
        styles={styles}
    >
        {loading ? 'settings' : name}
    </StyledIcon>
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default withTheme(Icon);
