import { styled } from "@stitches/react";


export const FilterSelectorContainer = styled('div', {
    position: 'relative',
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    width: 'fit-content',
    minWidth: 120,
});

export const FilterName = styled('div', {
    position: 'relative',
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    width: 'fit-content',
    minWidth: 120,
    fontSize: 12,
});

export const OptionSelected = styled('div', {
    color: '#17192D',
    fontSize: 12,
    fontWeight: 600,
});

export const FilterSelect = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    padding: '8px 16px',
    borderRadius: 4,
    border: '1px solid #D8DFE6',
    cursor: 'pointer',
    transition: 'all 0.2s',
    alignItems: 'center',
    '&:hover': {
        backgroundColor: '#F9FAFB',
    },
    color: '#17192D',
});

export const FilterSelectDropDown = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
    
    variants: {
        open: {
            true: {
                display: 'block',
            },
            false: {
                display: 'none',
            },
        },
    },
});

export const FilterOption = styled('div', {
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    '&:hover': {
        backgroundColor: '#F9FAFB',
    },
});