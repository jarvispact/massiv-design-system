import React from 'react';
import { string, bool, func } from 'prop-types';
import StyledIcon from './StyledIcon';

const propTypes = {
    name: string.isRequired,
    color: string,
    scale: string,
    disabled: bool,
    loading: bool,
    onClick: func,
    className: string,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    disabled: undefined,
    loading: undefined,
    onClick: undefined,
    className: undefined,
};

const Icon = ({ name, color, scale, disabled, loading, onClick, className }) => {
    const cssClassNames = `material-icons ${className || ''}`;
    return (
        <StyledIcon
            color={disabled ? 'lightGray' : color}
            scale={scale}
            disabled={disabled}
            loading={loading}
            onClick={disabled || loading ? undefined : onClick}
            className={cssClassNames}
        >
            {loading ? 'settings' : name}
        </StyledIcon>
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
