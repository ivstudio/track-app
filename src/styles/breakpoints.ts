export const breakpoint = {
	small: '576px',
	medium: '768px',
	large: '992px',
	xLarge: '1200px',
};

export const smallUp = `@media (min-width: ${breakpoint.small})`;
export const mediumUp = `@media (min-width: ${breakpoint.medium})`;
export const largeUp = `@media (min-width: ${breakpoint.large})`;
export const xLargeUp = `@media (min-width: ${breakpoint.xLarge})`;
