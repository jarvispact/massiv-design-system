import React from 'react';
import { func } from 'prop-types';
import { ThemeContext } from '../../contexts';

const propTypes = {
    render: func,
    children: func,
};

const defaultProps = {
    render: undefined,
    children: undefined,
};

const ThemeChanger = ({ render, children }) => (
    <ThemeContext.Consumer>
        {({ setTheme }) => (render ? render(setTheme) : children(setTheme))}
    </ThemeContext.Consumer>
);

ThemeChanger.propTypes = propTypes;
ThemeChanger.defaultProps = defaultProps;

export default ThemeChanger;
