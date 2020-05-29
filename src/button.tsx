import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    padding: 10px;
`;

type Props = {
    color: string;
};

export const Test = ({ color }: Props) => {
    return (
        <Button
            onClick={() => {
                console.log('hello');
            }}
            aria-label="foo"
            style={{ color }}
            className="sldjksdhkjfhsdjkfgsdfjhsdfhsdgf"
        >
            heelo world
        </Button>
    );
};
