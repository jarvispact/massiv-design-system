import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { string, shape, arrayOf, func } from 'prop-types';
import Text from './text';
import Icon from './icon';
import Button from './button';
import Box from './box';
import Flex from './flex';

const defaultButtonProps = {
    bg: 'white',
    textAlign: 'left',
    minWidth: '200px',
};

const defaultIconProps = {
    fontSize: 'xl',
};

let lastScrollY = 0;
let ticking = false;

const getDropdownDimensionsForRef = (ref) => {
    const { bottom, left, width } = ref.current.getBoundingClientRect();

    return {
        top: Math.round(bottom + lastScrollY),
        left: Math.round(left),
        width: Math.round(width),
    };
};

const getDropdownDefaultProps = (position) => ({
    as: 'ul',
    mt: '8px',
    mb: '8px',
    bg: 'white',
    borderRadius: '2px',
    boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.60);',
    position: 'absolute',
    top: `${position.top}px`,
    left: `${position.left}px`,
    width: `${position.width}px`,
    clipPath: 'polygon(80% 16%, 90% 0, 100% 16%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0 14%);',
});

const Select = ({ options, name, value, onChange, buttonProps, iconProps, dropdownProps }) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [dropdownDimensions, setDropdownDimensions] = useState(null);
    const buttonRef = useRef(null);

    const handleScroll = () => {
        lastScrollY = window.scrollY;

        if (!ticking && buttonRef.current) {
            window.requestAnimationFrame(() => {
                setDropdownDimensions(getDropdownDimensionsForRef(buttonRef));
                ticking = false;
            });

            ticking = true;
        }
    };

    const handleResize = () => {
        if (!buttonRef.current) return;
        setDropdownDimensions(getDropdownDimensionsForRef(buttonRef));
    };

    const handleClickOutSide = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setDropDownOpen(false);
        }
    };

    const toggleDropDownOpen = () => {
        if (!buttonRef.current) return;
        setDropdownDimensions(getDropdownDimensionsForRef(buttonRef));
        setDropDownOpen(prev => !prev);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        document.addEventListener('click', handleClickOutSide);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', handleClickOutSide);
        };
    }, []);

    useLayoutEffect(() => {
        setDropdownDimensions(getDropdownDimensionsForRef(buttonRef));
    }, [buttonRef.current]);

    return (
        <>
            <Button ref={buttonRef} onClick={toggleDropDownOpen} {...defaultButtonProps} {...buttonProps}>
                <Flex justifyContent="space-between">
                    <Text>{(options.find(option => option.value === value) || {}).label}</Text>
                    <Icon name="keyboard_arrow_down" {...defaultIconProps} {...iconProps} />
                </Flex>
            </Button>
            {(dropDownOpen && dropdownDimensions) ? (
                <Box {...getDropdownDefaultProps(dropdownDimensions)} {...dropdownProps}>
                    {options.map((option) => (
                        <Text
                            as="li"
                            p="6px"
                            key={option.value}
                            color={value === option.value ? 'primary' : undefined}
                            onClick={() => onChange({ target: { name, value: option.value } })}
                        >
                            {option.label}
                        </Text>
                    ))}
                </Box>
            ) : null}
        </>
    );
};

Select.propTypes = {
    options: arrayOf(shape({
        value: string.isRequired,
        label: string.isRequired,
    })).isRequired,
    name: string.isRequired,
    value: string.isRequired,
    onChange: func.isRequired,
    buttonProps: shape({}),
    iconProps: shape({}),
    dropdownProps: shape({}),
};

Select.defaultProps = {
    buttonProps: undefined,
    iconProps: undefined,
    dropdownProps: undefined,
};

export default Select;
