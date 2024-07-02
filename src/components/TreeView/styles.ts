import { styled } from "src/config/ stitches.config";

export const TreeViewContainer = styled('div', {
    overflowY: 'scroll',
    height: '100%',
    overflowX: 'hidden',
});

export const TreeViewNode = styled('div', {
    display: 'block',
    paddingLeft: 16,
});

export const NotFoundText = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#88929C',
    opacity: '0.7',
    fontSize: '20px',
    textAlign: 'center',
    marginTop: '20px',
    height: '100%',
});