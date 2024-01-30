import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'shared-reusable-ping-signal',
	standalone: true,
	imports: [NgClass],
	template: `
		<div class="absolute grid h-2 w-2 grid-cols-1 grid-rows-1" [ngClass]="styling">
			<span
				class="col-start-1 row-start-1 animate-ping rounded-full opacity-75"
				[ngClass]="outerColor"
			></span>
			<span class="col-start-1 row-start-1 rounded-full" [ngClass]="innerColor"></span>
		</div>
	`,
	styles: [
		`
			:host {
			}
		`
	]
})
export class PingSignalComponent {
	@Input() styling!: string;
	@Input() innerColor!: string;
	@Input() outerColor!: string;
}
