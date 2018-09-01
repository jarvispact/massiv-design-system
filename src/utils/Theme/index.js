import React from 'react';
import { shape, object, node } from 'prop-types';
import { ThemeProvider } from 'styled-components';

const propTypes = {
    theme: shape({
        screen: object,
        color: object,
        scale: object,
    }).isRequired,
    children: node.isRequired,
};

const Theme = ({ theme, children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = propTypes;

export default Theme;
