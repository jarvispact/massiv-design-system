import React, { Component } from 'react';
import { shape, string, node } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './theme-context';

const propTypes = {
    themes: shape({}).isRequired,
    activeTheme: string.isRequired,
    children: node.isRequired,
};

class Theme extends Component {
    constructor(props) {
        super(props);
        const { themes, activeTheme } = this.props;
        this.state = { themes, activeTheme, setTheme: this.setTheme }; // eslint-disable-line react/no-unused-state
    }

    setTheme = (theme) => {
        this.setState({ activeTheme: theme });
    }

    render() {
        const { children } = this.props;
        const { themes, activeTheme } = this.state;

        return (
            <ThemeContext.Provider value={this.state}>
                <ThemeProvider theme={themes[activeTheme]}>{children}</ThemeProvider>
            </ThemeContext.Provider>
        );
    }
}

Theme.propTypes = propTypes;

export default Theme;
