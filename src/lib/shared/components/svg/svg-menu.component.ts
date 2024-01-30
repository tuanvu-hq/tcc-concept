import { Component } from '@angular/core';

@Component({
	selector: 'shared-svg-menu',
	standalone: true,
	imports: [],
	template: `
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 6l16 0" />
			<path d="M4 12l16 0" />
			<path d="M4 18l16 0" />
		</svg>
	`,
	styles: []
})
export class SvgMenuComponent {}