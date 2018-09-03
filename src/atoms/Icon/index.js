import React from 'react';
import { string, bool, func } from 'prop-types';
import StyledIcon from './StyledIcon';

const propTypes = {
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

const Icon = ({ name, color, scale, loading, onClick, className, styles }) => {
    const cssClassNames = `material-icons ${className || ''}`;
    return (
        <StyledIcon
            color={color}
            scale={scale}
            loading={loading}
            onClick={loading ? undefined : onClick}
            className={cssClassNames}
            styles={styles}
        >
            {loading ? 'settings' : name}
        </StyledIcon>
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
