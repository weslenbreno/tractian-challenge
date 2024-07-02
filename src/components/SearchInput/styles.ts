import { styled } from '@stitches/react';

export const SearchInputContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
});

export const Input = styled('input', {
    padding: 8,
    border: '1px solid #D8DFE6',
    borderRadius: 4,
    fontSize: 16,
    color: '#24292F',
    outline: 'none',
    transition: 'border-color 0.2s ease-in-out',
    '&:focus': {
        borderColor: '#0366D6',
    },

    '&::placeholder': {
        color: '#C1C9D2',
        fontSize: 14,
    }
});

export const SearchButton = styled('button', {
    padding: '8px 16px',
    border: '1px solid #D8DFE6',
    borderRadius: 4,
    fontSize: 16,
    color: '#24292F',
    backgroundColor: '#FFF',
    cursor: 'pointer',
    outline: 'none',
    transition: 'border-color 0.2s ease-in-out',
    '&:hover': {
        borderColor: '#0366D6',
    }
});