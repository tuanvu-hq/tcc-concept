import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgMenuComponent } from '../svg';

@Component({
	selector: 'shared-layout-navbar',
	standalone: true,
	imports: [SvgMenuComponent, RouterLink],
	template: `
		<nav class="flex h-16 items-center gap-6 border px-6">
			<button class="h-10 w-10 rounded p-2 duration-300 hover:bg-neutral-200">
				<shared-svg-menu />
			</button>

			<a class="flex items-center gap-1" href="/">
				<img class="h-10 w-10" src="/tcc_concept_logo_light.svg" alt="TCC" />
				<p class="text-xl font-semibold">TCC</p>
			</a>

			<div class="ml-auto flex gap-6">
				<a routerLink="/" class="overflow-hidden rounded-full">
					<img class="h-10 w-10" src="/profile.jpg" alt="Profile" />
				</a>
				<button class="rounded bg-blue-500 px-4 py-2 text-white duration-300 hover:bg-blue-400">
					Export
				</button>
			</div>
		</nav>
	`,
	styles: [
		`
			:host {
			}
		`
	]
})
export class NavbarComponent {}
