import React, { Component } from 'react';
import { shape, string, node } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../contexts';

const propTypes = {
    themes: shape({}).isRequired,
    activeTheme: string.isRequired,
    children: node.isRequired,
};

class Theme extends Component {
    constructor(props) {
        super(props);
        const { themes, activeTheme } = this.props;
        this.state = { themes, activeTheme };
    }

    setTheme = (theme) => {
        this.setState({ activeTheme: theme });
    }

    render() {
        const { setTheme } = this;
        const { children } = this.props;
        const { themes, activeTheme } = this.state;

        const ctx = {
            themes,
            activeTheme,
            setTheme,
        };

        return (
            <ThemeContext.Provider value={ctx}>
                <ThemeProvider theme={ctx.themes[ctx.activeTheme]}>{children}</ThemeProvider>
            </ThemeContext.Provider>
        );
    }
}

Theme.propTypes = propTypes;

export default Theme;
