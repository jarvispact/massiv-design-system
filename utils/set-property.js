/* eslint-disable no-param-reassign */

const setProperty = (cssKey, key, value, propertyConfigList) => {
    propertyConfigList.forEach((propertyConfig) => {
        if (propertyConfig.cssProperty === cssKey) {
            propertyConfig[key] = value;
        }
    });
};

export default setProperty;
