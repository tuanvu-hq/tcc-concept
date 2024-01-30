import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'shared-reusable-selection',
	standalone: true,
	imports: [NgClass],
	template: `
		<div [ngClass]="[styling]">
			@for (item of list; track $index) {
				<button
					class="relative rounded border py-2 duration-300"
					[ngClass]="{
						'bg-neutral-800 text-white hover:bg-neutral-700': compared === item,
						'bg-neutral-100 hover:bg-neutral-200': compared !== item
					}"
					(click)="action(item)"
				>
					{{ item.replace(formatLabel, '') }}
					<ng-content />
				</button>
			}
		</div>
	`,
	styles: [
		`
			:host {
				display: grid;
			}
		`
	]
})
export class SelectionComponent<T extends string> {
	@Input() styling: string = '';
	@Input() list!: T[];
	@Input() compared!: T;
	@Input() action!: (value: T) => void;
	@Input() formatLabel: string = '';
}
