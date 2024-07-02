import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
    utils: {
        pL: (value: number) => ({
            paddingLeft: value,
        }),
    },
});