import { string, oneOfType, arrayOf } from 'prop-types';

export const arrayOfStringsOrString = oneOfType([arrayOf(string), string]);
