const buildScopedProps = (propertyConfigList, componentProps) => Object.keys(componentProps).reduce((acc, key) => {
    const config = propertyConfigList.find(({ componentProperty }) => componentProperty === key);
    acc[config ? config.scopedProperty : key] = componentProps[key];
    return acc;
}, {});

export default buildScopedProps;
