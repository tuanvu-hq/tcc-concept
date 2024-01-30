import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgArrowUpComponent } from '../svg';

@Component({
	selector: 'shared-reusable-collapsible',
	standalone: true,
	imports: [NgClass, SvgArrowUpComponent],
	template: `
		<div class="rounded border-2 border-neutral-300 p-2">
			<div class="flex items-center justify-between">
				<h2 class="truncate font-bold">{{ label }}</h2>
				<button
					class="h-10 w-10 rounded-full p-2 duration-300 hover:bg-neutral-100"
					[ngClass]="{ 'rotate-0': isOpen, 'rotate-180': !isOpen }"
					(click)="toggleState()"
				>
					<shared-svg-arrow-up />
				</button>
			</div>
			<div
				class="grid transition-[grid] duration-300"
				[ngClass]="{ 'grid-rows-[1fr]': isOpen, 'grid-rows-[0fr]': !isOpen }"
			>
				<div class="overflow-hidden">
					<div class="space-y-2 pt-2">
						<hr />
						<ng-content />
					</div>
				</div>
			</div>
		</div>
	`,
	styles: [
		`
			:host {
			}
		`
	]
})
export class CollapsibleComponent {
	@Input() label: string = 'DEFAULT_LABEL';
	isOpen = true;

	toggleState() {
		this.isOpen = !this.isOpen;
	}
}
