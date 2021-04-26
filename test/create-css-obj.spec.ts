import { expect } from 'chai';
import { SystemConfig } from '../src/system/system';
import { defaultTheme } from '../src/theme/default-theme';
import { createCssObj } from '../src/utils/create-css-obj';

describe('create-css-obj', () => {
    it('should get value from theme by theme section and component prop value', () => {
        const config: Array<SystemConfig> = [{ componentProp: 'p', cssProp: 'padding', themeScope: 'spacing' }];
        const props = { p: 'xs' };
        const obj = createCssObj(config, props, defaultTheme);
        expect(obj).to.eql({ padding: '0.15rem' });
    });

    it('should get value from component prop value directly', () => {
        const config: Array<SystemConfig> = [{ componentProp: 'p', cssProp: 'padding', themeScope: 'spacing' }];
        const props = { p: '0.25rem' };
        const obj = createCssObj(config, props, defaultTheme);
        expect(obj).to.eql({ padding: '0.25rem' });
    });

    it('should get responsive value from theme by theme section and component prop value', () => {
        const config: Array<SystemConfig> = [{ componentProp: 'p', cssProp: 'padding', themeScope: 'spacing' }];
        const props = { p: ['xs', 's', 'm'] };
        const obj = createCssObj(config, props, defaultTheme);
        expect(obj).to.eql({
            padding: '0.15rem',
            [`@media(min-width: ${defaultTheme.breakpoint.xs})`]: { padding: '0.25rem' },
            [`@media(min-width: ${defaultTheme.breakpoint.s})`]: { padding: '0.5rem' },
        });
    });

    it('should get responsive value from component prop value directly', () => {
        const config: Array<SystemConfig> = [{ componentProp: 'p', cssProp: 'padding', themeScope: 'spacing' }];
        const props = { p: ['0.15rem', '0.25rem', '0.5rem'] };
        const obj = createCssObj(config, props, defaultTheme);
        expect(obj).to.eql({
            padding: '0.15rem',
            [`@media(min-width: ${defaultTheme.breakpoint.xs})`]: { padding: '0.25rem' },
            [`@media(min-width: ${defaultTheme.breakpoint.s})`]: { padding: '0.5rem' },
        });
    });
});
