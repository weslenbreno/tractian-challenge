import { keyframes, styled } from "@stitches/react";

const scaleUp = keyframes({
    '0%': { transform: 'translate(-50%, -50%) scale(0)' },
    '60%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
});

const pulse = keyframes({
    '0%, 60%, 100%': { transform: 'scale(1)' },
    '80%': { transform: 'scale(1.2)' },
});

export const Loader = styled('div', {
    width: 48,
    height: 48,
    border: '5px solid #023B78',
    borderRadius: '50%',
    display: 'inline-block',
    boxSizing: 'border-box',
    position: 'relative',
    animation: `${pulse} 1s linear infinite`,
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 48,
        height: 48,
        border: '5px solid #023B78',
        borderRadius: '50%',
        display: 'inline-block',
        boxSizing: 'border-box',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        animation: `${scaleUp} 1s linear infinite`,
    },
});

export const PageContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    gap: 8,
    padding: 16,
    backgroundColor: '#F9FAFB',
});