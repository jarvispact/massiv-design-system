import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../utils/build-css';
import displayPropertyConfig from '../utils/display-property-config';
import spacingPropertyConfig from '../utils/spacing-property-config';
import widthPropertyConfig from '../utils/width-property-config';
import heightPropertyConfig from '../utils/height-property-config';
import colorPropertyConfig from '../utils/color-property-config';
import borderPropertyConfig from '../utils/border-property-config';
import overflowPropertyConfig from '../utils/overflow-property-config';
import boxShadowPropertyConfig from '../utils/box-shadow-property-config';
import { arrayOfStringsOrString } from '../utils/prop-types';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import setProperty from '../utils/set-property';
import clone from '../utils/clone';

const themeProperty = null;
const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

const tableHeaderPropertyConfig = [
    {
        cssProperty: 'text-align',
        componentProperty: 'textAlign',
        scopedProperty: 'massivTextAlign',
        themeProperty,
        propertyType,
        defaultProperty,
    },
];

const propertyConfig = [
    ...clone(displayPropertyConfig),
    ...clone(spacingPropertyConfig),
    ...clone(widthPropertyConfig),
    ...clone(heightPropertyConfig),
    ...clone(colorPropertyConfig),
    ...clone(borderPropertyConfig),
    ...clone(overflowPropertyConfig),
    ...clone(boxShadowPropertyConfig),
    ...clone(tableHeaderPropertyConfig),
];

setProperty('background-color', 'defaultProperty', 'gray200', propertyConfig);

const StyledTableHeader = styled.thead`
    ${buildCss(propertyConfig)}
`;

const TableHeader = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledTableHeader {...scopedProps}>{children}</StyledTableHeader>);
};

const defaultPropTypes = {
    propTypes: { children: node },
    defaultProps: { children: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
