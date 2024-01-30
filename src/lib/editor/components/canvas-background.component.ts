import { Component } from '@angular/core';

@Component({
	selector: 'editor-canvas-background',
	standalone: true,
	imports: [],
	template: ` <div class="az-background"><ng-content /></div> `,
	styles: [
		`
			:host {
				display: grid;
				height: 100%;
			}

			.az-background {
				--dot-bg: theme('colors.neutral.100');
				--dot-color: theme('colors.neutral.500');
				--dot-size: 1px;
				--dot-space: 20px;

				background:
					linear-gradient(
							90deg,
							var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
							transparent 1%
						)
						center / var(--dot-space) var(--dot-space),
					linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%)
						center / var(--dot-space) var(--dot-space),
					var(--dot-color);
			}
		`
	]
})
export class CanvasBackgroundComponent {}
