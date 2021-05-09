import { expect } from 'chai';
import { defaultTheme, Theme } from '../src/theme/default-theme';
import { paddingSystemDef } from '../src/system/padding';
import { buildCssObj } from '../src/utils/build-css-obj';
import { SystemDefinitionObj } from '../src/system/system';

describe('build-css-obj', () => {
    it('should directly pipe a simple style rule', () => {
        const inputObject = { padding: '42px' };
        const expectedObject = { padding: '42px' };
        const result = buildCssObj(defaultTheme, paddingSystemDef as SystemDefinitionObj<Theme>, inputObject);
        expect(result).to.eql(expectedObject);
    });

    it('should take the value from the correct theme section by key', () => {
        const inputObject = { padding: 's' };
        const expectedObject = { padding: defaultTheme.spacing.s };
        const result = buildCssObj(defaultTheme, paddingSystemDef as SystemDefinitionObj<Theme>, inputObject);
        expect(result).to.eql(expectedObject);
    });

    it('should merge multiple rules correctly', () => {
        const inputObject = { px: 's', py: '42px' };
        const expectedObject = { paddingLeft: defaultTheme.spacing.s, paddingRight: defaultTheme.spacing.s, paddingTop: '42px', paddingBottom: '42px' };
        const result = buildCssObj(defaultTheme, paddingSystemDef as SystemDefinitionObj<Theme>, inputObject);
        expect(result).to.eql(expectedObject);
    });

    it('should handle a obj as value correctly', () => {
        const inputObject = {
            padding: {
                value: '5px',
                hover: '42px',
                focus: '12px',
                s: '2px',
                m: '3px',
                l: '4px',
                xl: '5px',
                xxl: '6px',
                xxxl: '7px',
            },
            px: {
                hocus: '12px',
            },
        };

        const expectedObject = {
            padding: '5px',
            '&:hover': { padding: '42px', paddingLeft: '12px', paddingRight: '12px' },
            '&:focus': { padding: '12px', paddingLeft: '12px', paddingRight: '12px' },
            [`@media(min-width: ${defaultTheme.breakpoint.s})`]: { padding: '2px' },
            [`@media(min-width: ${defaultTheme.breakpoint.m})`]: { padding: '3px' },
            [`@media(min-width: ${defaultTheme.breakpoint.l})`]: { padding: '4px' },
            [`@media(min-width: ${defaultTheme.breakpoint.xl})`]: { padding: '5px' },
            [`@media(min-width: ${defaultTheme.breakpoint.xxl})`]: { padding: '6px' },
            [`@media(min-width: ${defaultTheme.breakpoint.xxxl})`]: { padding: '7px' },
        };

        const result = buildCssObj(defaultTheme, paddingSystemDef as SystemDefinitionObj<Theme>, inputObject);
        expect(result).to.eql(expectedObject);
    });
});
