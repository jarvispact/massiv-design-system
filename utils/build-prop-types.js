const buildPropTypes = (propertyConfigList, defaultPropTypes) => propertyConfigList.reduce((acc, config) => {
    acc.propTypes[config.componentProperty] = config.propertyType;
    acc.defaultProps[config.componentProperty] = config.defaultProperty;
    return acc;
}, defaultPropTypes);

export default buildPropTypes;
