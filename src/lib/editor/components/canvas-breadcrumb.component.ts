import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type BreadcrumpItem = {
	id: string;
	label: string;
	link: string;
};

@Component({
	selector: 'editor-canvas-breadcrumb',
	standalone: true,
	imports: [RouterLink],
	template: `
		<div class="absolute left-0 top-0 flex gap-2 rounded border bg-white px-5 py-2">
			@for (item of list; track item.id; let last = $last) {
				<a
					[routerLink]="item.link"
					class="duration-300 hover:text-blue-500"
					[class.pointer-events-none]="last"
					>{{ item.label }}</a
				>
				@if (!last) {
					<p class="font-semibold">/</p>
				}
			}
		</div>
	`,
	styles: [
		`
			:host {
			}
		`
	]
})
export class CanvasBreadcrumbComponent {
	list: BreadcrumpItem[] = [
		{
			id: this.randomId(),
			label: 'Home',
			link: '/'
			// link: '/',
		},
		{
			id: this.randomId(),
			label: 'Components',
			link: '/'
			// link: '/components',
		},
		{
			id: this.randomId(),
			label: 'Padding',
			link: '/'
			// link: '/components/padding',
		}
	];

	randomId() {
		return Math.random().toString().slice(0, 5);
	}
}
