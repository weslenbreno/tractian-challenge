import { styled } from '@stitches/react';

export const Title = styled('div', {
    display: 'flex',
    color: '#17192D',
    fontWeight: 'bold',
    fontSize: 16,
    borderBottom: '1px solid #E3EAEF',
    padding: 16,
    paddingTop: 0,
    width: '100%',
    gap: 8,
    alignItems: 'center',
});

export const Container = styled('div', {
    display: 'flex',
    padding: 16,
    flexDirection: 'column',
});

export const Content = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24,
    paddingTop: 24,
    justifyContent: 'space-around',
});

export const AssetInfo = styled('div', {
    display: 'flex',
    color: '#24292F',
    flexDirection: 'column',
    borderBottom: '1px solid #E3EAEF',
    gap: 8,
    paddingBottom: 16,
    marginBottom: 16,
    width: '40%',
});

export const AssetInfoText = styled('span', {
    color: '#88929C',
});

export const AssetInfoTitle = styled('div', {
    display: 'flex',
    color: '#24292F',
    fontWeight: 'bold',
    fontSize: 16,
});


export const AddImageBox = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed #55A6FF',
    borderRadius: 8,
    padding: 16,
    cursor: 'pointer',
    color: '#2188FF',
    transition: '0.3s',
    width: '100%',
    height: '226px',
    backgroundColor: '#F2F8FF',
    '&:hover': {
        backgroundColor: '#E3EAEF',
    }
});

export const ImageBoxContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
});