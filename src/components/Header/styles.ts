import { styled } from '@stitches/react';

export const HeaderContainer = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px',
    borderBottom: '1px solid #ccc',
    backgroundColor: '#17192D',
    height: 48,
});

export const CompanyButonsContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
});

export const CompanyButon = styled('div', {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#023B78',
    width: 104,
    height: 24,
    padding: '4px 0px',
    gap: 8,
    borderRadius: 2,
    margin: '0px 5px',
    color: 'white',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 600,
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    variants: {
        active: {
            true: {
                backgroundColor: '#2188FF',
            },
        },
    },
});

export const Logo = styled('img', {
    height: 14,
    marginRight: 16,
    cursor: 'pointer',
});



