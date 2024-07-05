import { styled } from "src/config/ stitches.config";

export const TreeViewNodeName = styled('div', {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    padding: '0px 8px',
    width: '100%',
    variants: {
        active: {
            true: {
                backgroundColor: '#2188FF',
                color: '#FFF',
            },
            false: {
                backgroundColor: 'transparent',
            },
        }
    }
});

export const TreeViewNodeItem = styled('div', {
    display: 'flex',
    padding: 8,
    gap: 8,
    cursor: 'pointer',
    color: '#17192D',
    size: 14,
    alignItems: 'center',
});

export const Collapsible = styled('div', {
    overflow: 'hidden',
    variants: {
        collapse: {
            true: {
                height: 0,
                opacity: 0,
            },
            false: {
                height: 'auto',
                transition: 'opacity 0.5s ease-out',
            },
        }
    }
});