const clone = (listOfObjects) => listOfObjects.map(obj => ({ ...obj }));

export default clone;
