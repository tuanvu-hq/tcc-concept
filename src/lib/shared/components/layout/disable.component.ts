import { Component } from '@angular/core';

@Component({
	selector: 'shared-layout-disable',
	standalone: true,
	imports: [],
	template: `
		<div class="fixed left-0 top-0 grid h-[100dvh] w-full place-items-center bg-white lg:hidden">
			<p class="max-w-[60%] text-justify">
				For an enhanced user experience, kindly use this application on a desktop. If you're using
				StackBlitz, please open the application in a new tab.
			</p>
		</div>
	`,
	styles: [
		`
			:host {
			}
		`
	]
})
export class DisableComponent {}
