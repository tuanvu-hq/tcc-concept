import { Component, inject } from '@angular/core';
import { CollapsibleComponent, SelectionComponent } from '../../shared/components/re-usable';
import { EditorService } from '../services';
import { DirectionParent } from '../services/padding-main';

@Component({
	selector: 'editor-panel-direction-reusable',
	standalone: true,
	imports: [CollapsibleComponent, SelectionComponent],
	template: `
		<shared-reusable-collapsible label="Direction (re-usable component)">
			<shared-reusable-selection
				styling="grid h-full grid-cols-3 gap-2"
				[list]="list"
				[compared]="editorService.getDirectionParent()"
				[action]="editorService.setDirectionParent"
			/>
		</shared-reusable-collapsible>
	`,
	styles: [
		`
			:host {
			}
		`
	]
})
export class PanelDirectionReusableComponent {
	editorService = inject(EditorService);

	list: DirectionParent[] = ['All', 'Dual', 'Single'];
}
