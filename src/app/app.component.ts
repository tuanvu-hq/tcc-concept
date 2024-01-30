import '@fontsource/poppins';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisableComponent, NavbarComponent } from '../lib/shared/components/layout/';

@Component({
	host: { 'collision-id': 'application-root' },
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NavbarComponent, DisableComponent],
	template: `
		<div class="grid min-h-[100dvh] grid-rows-[auto,1fr] print:overflow-hidden">
			<shared-layout-navbar />
			<div>
				<router-outlet></router-outlet>
			</div>
		</div>
		<shared-layout-disable />
	`,
	styles: [
		`
			:host {
				font-family: 'Poppins', sans-serif;
			}
		`
	]
})
export class AppComponent {}
