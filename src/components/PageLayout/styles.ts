import { styled  } from "@stitches/react";

export const PageHeader = styled("div", {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
}); 

export const PageTitle = styled("h1", {
    margin: 0,
    fontSize: 20,
    fontWeight: 600,
    color: '#24292F',
    textTransform: 'capitalize',

    '& small': {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#77818C',
    }
});

export const PageContainer = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
}); 

export const PageSectionContainer = styled("div", {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '100%',

    '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
    }
}); 

export const PageSection = styled("section", {
    padding: 16,
});