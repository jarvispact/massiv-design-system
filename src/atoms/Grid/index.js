/* eslint-disable react/prop-types */
import React from 'react';
import { string, func, node } from 'prop-types';
import StyledGrid from './StyledGrid';
import { stringOrArray, numberOrArray } from '../../prop-types';

const rowPropTypes = {
    gutter: stringOrArray,
    columns: numberOrArray,
    styles: func,
    className: string,
    children: node,
};

const rowDefaultProps = {
    gutter: undefined,
    columns: undefined,
    styles: undefined,
    className: undefined,
    children: undefined,
};

const colPropTypes = {
    gutter: stringOrArray,
    columns: numberOrArray,
    styles: func,
    className: string,
    children: node,
};

const colDefaultProps = {
    gutter: undefined,
    columns: undefined,
    styles: undefined,
    className: undefined,
    children: undefined,
};

const Row = ({ gutter, columns, styles, className, children }) => (
    <StyledGrid.Row
        styles={styles}
        className={className}
    >
        {React.Children.map(children, child => React.cloneElement(child, { gutter, columns }))}
    </StyledGrid.Row>
);

const Col = ({ gutter, columns, styles, className, children }) => (
    <StyledGrid.Col
        gutter={gutter}
        columns={columns}
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
