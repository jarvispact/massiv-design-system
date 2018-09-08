import React from 'react';

const ThemeContext = React.createContext({
    themes: {},
    activeTheme: '',
    setTheme: () => {},
});

export default ThemeContext;
