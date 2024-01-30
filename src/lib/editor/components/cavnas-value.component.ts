import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EditorService } from '../services';

@Component({
	selector: 'editor-canvas-value',
	standalone: true,
	imports: [RouterLink],
	template: `
		<p
			class="absolute right-0 top-0 flex w-[250px] justify-center gap-2 rounded border bg-white px-5 py-2"
		>
			{{ editorService.getValue() || 'No padding selected.' }}
		</p>
	`,
	styles: [
		`
			:host {
			}
		`
	]
})
export class CanvasValueComponent {
	editorService = inject(EditorService);
}
