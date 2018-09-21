/* eslint-disable react/prop-types */
import React from 'react';
import { string, number, func, node } from 'prop-types';
import StyledGrid from './StyledGrid';

const rowPropTypes = {
    gutter: string,
    styles: func,
    className: string,
    children: node,
};

const rowDefaultProps = {
    gutter: undefined,
    styles: undefined,
    className: undefined,
    children: undefined,
};

const colPropTypes = {
    s: number,
    m: number,
    l: number,
    xl: number,
    xxl: number,
    gutter: string,
    styles: func,
    className: string,
    children: node,
};

const colDefaultProps = {
    s: undefined,
    m: undefined,
    l: undefined,
    xl: undefined,
    xxl: undefined,
    gutter: undefined,
    styles: undefined,
    className: undefined,
    children: undefined,
};

const Row = ({ gutter, styles, className, children }) => (
    <StyledGrid.Row
        styles={styles}
        className={className}
    >
        {React.Children.map(children, child => React.cloneElement(child, { gutter }))}
    </StyledGrid.Row>
);

const Col = ({ s, m, l, xl, xxl, gutter, styles, className, children }) => (
    <StyledGrid.Col
        colS={s}
        colM={m}
        colL={l}
        colXL={xl}
        colXXL={xxl}
        gutter={gutter}
        styles={styles}
        className={className}
    >
        {children}
    </StyledGrid.Col>
);

const Grid = { Row, Col };

Grid.Row.propTypes = rowPropTypes;
Grid.Row.defaultProps = rowDefaultProps;

Grid.Col.propTypes = colPropTypes;
Grid.Col.defaultProps = colDefaultProps;

export default Grid;
