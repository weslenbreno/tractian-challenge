import { styled } from '@stitches/react';

export const PageContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    gap: 8,
});

export const AssetsTreeContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    height: '100%',
});

export const AssetsInfoContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    width: '100%',
    height: '100%',
    borderRadius: 8,
});

export const Section = styled('div', {
    position: 'relative',
    border: '1px solid #D8DFE6',
    borderRadius: 8,
    width: '100%',
    height: '100%',
    maxHeight: 'calc(100vh - 170px)',
});

export const FiltersContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 16,
    borderBottom: '1px solid #D8DFE6',
});

export const Filters = styled('div', {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
});

export const Filter = styled('div', {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
});

export const FilterName = styled('span', {
    color: '#333',
    fontSize: 14,
    fontWeight: 600,
});

export const RadioButtons = styled('div', {
    display: 'flex',
    gap: 8,
    color: '#333',
});