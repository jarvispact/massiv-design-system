import { expect } from 'chai';
import { defaultTheme, Theme } from '../src/theme/default-theme';
import { paddingSystemDef } from '../src/system/padding';
import { buildCssObj } from '../src/utils/build-css-obj';
import { SystemDefinitionObj, SystemObj } from '../src/system/system';

describe('build-css-obj', () => {
    it('should directly pipe a simple style rule', () => {
        const inputObject = { p: '42px' };
        const expectedObject = { padding: '42px' };
        const result = buildCssObj(defaultTheme, paddingSystemDef as SystemDefinitionObj<Theme, keyof SystemObj<Theme>>, inputObject);
        expect(result).to.eql(expectedObject);
    });

    it('should take the value from the correct theme section by key', () => {
        const inputObject = { padding: '2' };
        const expectedObject = { padding: defaultTheme.spacing['2'] };
        const result = buildCssObj(defaultTheme, paddingSystemDef as SystemDefinitionObj<Theme, keyof SystemObj<Theme>>, inputObject);
        expect(result).to.eql(expectedObject);
    });

    it('should merge multiple rules correctly', () => {
        const inputObject = { px: '2', py: '42px' };
        const expectedObject = { paddingLeft: defaultTheme.spacing['2'], paddingRight: defaultTheme.spacing['2'], paddingTop: '42px', paddingBottom: '42px' };
        const result = buildCssObj(defaultTheme, paddingSystemDef as SystemDefinitionObj<Theme, keyof SystemObj<Theme>>, inputObject);
        expect(result).to.eql(expectedObject);
    });

    it('should handle property responsive array syntax', () => {
        const inputObject = { p: ['41px', '42px', '43px', '44px', '45px', '46px', '47px'] };

        const expectedObject = {
            padding: '41px',
            [`@media(min-width: ${defaultTheme.breakpoint.s})`]: { padding: '42px' },
            [`@media(min-width: ${defaultTheme.breakpoint.m})`]: { padding: '43px' },
            [`@media(min-width: ${defaultTheme.breakpoint.l})`]: { padding: '44px' },
            [`@media(min-width: ${defaultTheme.breakpoint.xl})`]: { padding: '45px' },
            [`@media(min-width: ${defaultTheme.breakpoint.xxl})`]: { padding: '46px' },
            [`@media(min-width: ${defaultTheme.breakpoint.xxxl})`]: { padding: '47px' },
        };

        const result = buildCssObj(defaultTheme, paddingSystemDef as SystemDefinitionObj<Theme, keyof SystemObj<Theme>>, inputObject);
        expect(result).to.eql(expectedObject);
    });

    it('should handle property object syntax', () => {
        const inputObject = { p: { value: '41px', s: '42px', m: '43px', l: '44px', xl: '45px', xxl: '46px', xxxl: '47px' } };

        const expectedObject = {
            padding: '41px',
            [`@media(min-width: ${defaultTheme.breakpoint.s})`]: { padding: '42px' },
            [`@media(min-width: ${defaultTheme.breakpoint.m})`]: { padding: '43px' },
            [`@media(min-width: ${defaultTheme.breakpoint.l})`]: { padding: '44px' },
            [`@media(min-width: ${defaultTheme.breakpoint.xl})`]: { padding: '45px' },
            [`@media(min-width: ${defaultTheme.breakpoint.xxl})`]: { padding: '46px' },
            [`@media(min-width: ${defaultTheme.breakpoint.xxxl})`]: { padding: '47px' },
        };

        const result = buildCssObj(defaultTheme, paddingSystemDef as SystemDefinitionObj<Theme, keyof SystemObj<Theme>>, inputObject);
        expect(result).to.eql(expectedObject);
    });

    it('should handle custom selectors', () => {
        const inputObject = { p: '2', customSelectors: { '&:hover': { p: '4' } } };
        const expectedObject = { padding: defaultTheme.spacing['2'], '&:hover': { padding: defaultTheme.spacing['4'] } };
        const result = buildCssObj(defaultTheme, paddingSystemDef as SystemDefinitionObj<Theme, keyof SystemObj<Theme>>, inputObject);
        expect(result).to.eql(expectedObject);
    });
});
