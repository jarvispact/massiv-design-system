import React, { useState, useRef, useLayoutEffect } from 'react';
import { string, shape, arrayOf, func } from 'prop-types';
import Text from './text';
import Icon from './icon';
import Button from './button';
import Box from './box';
import Flex from './flex';

const dropdownOffset = 4;
const getDropdownId = name => `${name}-list`;
const getItemId = (name, value) => value ? `${name}-${value}` : '';

const scheduleButtonFocusOnDropdownOpen = (buttonRef) => {
    setTimeout(() => {
        if (buttonRef.current && buttonRef.current.nextElementSibling) {
            buttonRef.current.nextElementSibling.firstElementChild.firstElementChild.focus();
        }
    }, 100);
};

const Select = ({ options, name, value, onChange, onBlur, defaultLabel, buttonProps, iconProps, dropdownProps }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(false);
    const buttonRef = useRef(null);
    const [buttonBoundingBox, setButtonBoundingBox] = useState(null);

    const toggleDropdown = () => {
        setDropdownOpen(prev => {
            if (!prev) scheduleButtonFocusOnDropdownOpen(buttonRef);
            return !prev;
        });
    };

    const handleEscapeKeyPress = (event) => {
        if (event.key === 'Escape') {
            setDropdownOpen(false);
            buttonRef.current.focus();
            event.preventDefault();
            event.stopPropagation();
        }
    };

    const handleListKeyboardNavigation = (option) => (event) => {
        if (event.key === ' ') {
            onChange({ target: { name, value: option.value } });
            event.preventDefault();
            event.stopPropagation();
        }
        if (event.key === 'ArrowDown' && event.target.nextElementSibling) {
            event.target.nextElementSibling.focus();
            event.preventDefault();
            event.stopPropagation();
        }
        if (event.key === 'ArrowUp' && event.target.previousElementSibling) {
            event.target.previousElementSibling.focus();
            event.preventDefault();
            event.stopPropagation();
        }
    };

    const handleItemClick = (option) => () => {
        onChange({ target: { name, value: option.value } });
        setDropdownOpen(false);
        buttonRef.current.focus();
    };

    const selectedLabel = defaultLabel || (options.find(option => option.value === value) || {}).label;
    const iconName = dropdownOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down';

    const handleScroll = () => {
        setLastScrollY(window.scrollY);
        setButtonBoundingBox(buttonRef.current.getBoundingClientRect());
    };

    const handleClickOutside = (event) => {
        if (dropdownOpen && buttonRef.current && !buttonRef.current.contains(event.target)) {
            setDropdownOpen(false);
            buttonRef.current.focus();
        }
    };

    useLayoutEffect(() => {
        setButtonBoundingBox(buttonRef.current.getBoundingClientRect());
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <>
            <Button
                id={name}
                ref={buttonRef}
                onClick={toggleDropdown}
                onBlur={() => {
                    if (onBlur) onBlur({ target: { name, value } });
                }}
                bg="white"
                minWidth="200px"
                aria-label={selectedLabel}
                aria-haspopup="listbox"
                aria-expanded={String(dropdownOpen)}
                {...buttonProps}
            >
                <Flex justifyContent="space-between" alignItems="center" aria-hidden="true">
                    <Text>{selectedLabel}</Text>
                    <Icon name={iconName} color="gray800" fontSize="l" {...iconProps} />
                </Flex>
            </Button>
            {dropdownOpen && (
                <Box
                    position="absolute"
                    top={`${buttonBoundingBox.bottom + dropdownOffset + lastScrollY}px`}
                    left={`${buttonBoundingBox.left}px`}
                    width={`${buttonBoundingBox.width}px`}
                    bg="white"
                    maxHeight="250px"
                    overflow="hidden"
                    borderRadius="2px"
                    boxShadow="0px 0px 2px 0px rgba(0,0,0,0.60);"
                    zIndex="100"
                    style={{ marginBottom: '10px' }} // HACK: when open dropdown reaches bottom of page
                >
                    <Box
                        as="ul"
                        id={getDropdownId(name)}
                        position="relative"
                        top="0px"
                        left="0px"
                        width="100%"
                        height="100%"
                        maxHeight="250px"
                        overflowY="auto"
                        role="listbox"
                        tabIndex="-1"
                        aria-activedescendant={getItemId(name, value)}
                        onKeyUp={handleEscapeKeyPress}
                        {...dropdownProps}
                    >
                        {options.map((option, idx) => (
                            <Text
                                id={getItemId(name, option.value)}
                                as="li"
                                p="12px"
                                role="option"
                                key={option.value}
                                color={value === option.value ? 'primary' : undefined}
                                aria-selected={String(value === option.value)}
                                tabIndex={idx + 1}
                                outlineColor="info"
                                onKeyDown={handleListKeyboardNavigation(option)}
                                onClick={handleItemClick(option)}
                            >
                                {option.label}
                            </Text>
                        ))}
                    </Box>
                </Box>
            )}
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
    onBlur: func,
    defaultLabel: string,
    buttonProps: shape({}),
    iconProps: shape({}),
    dropdownProps: shape({}),
};

Select.defaultProps = {
    onBlur: undefined,
    defaultLabel: undefined,
    buttonProps: undefined,
    iconProps: undefined,
    dropdownProps: undefined,
};

export default Select;
