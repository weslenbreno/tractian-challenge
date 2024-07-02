import { styled } from '@stitches/react';

export const AppContainer = styled('div', {
    display: 'flex',
    height: 'calc(100% - 56px)',
    backgroundColor: '#D8DFE6',
    maxHeight: 'calc(100vh - 56px)',
});

export const AppContent = styled('div', {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#FFF',
    gap: 12,
    borderRadius: 4,
});