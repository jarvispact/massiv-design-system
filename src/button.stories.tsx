import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Test } from './button';

export default { title: 'Button' };

export const withText = () => <Button onClick={action('onClick')}>Hello Button</Button>;

export const withTest = () => <Test color="blue" />;

export const withEmoji = () => (
    <Button>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
);
