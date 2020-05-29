const path = ([key, ...restPath], obj = {}) => {
    if (Object.keys(obj).length <= 0) return undefined;
    return key && obj[key] ? path(restPath, obj[key]) : obj;
};

export default path;
