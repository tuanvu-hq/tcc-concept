import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CollapsibleComponent, PingSignalComponent } from '../../shared/components/re-usable';
import { EditorService } from '../services';
import { ValueType } from '../services/padding-main';

@Component({
	selector: 'editor-panel-value-type',
	standalone: true,
	imports: [CollapsibleComponent, PingSignalComponent, NgClass],
	template: `
		<shared-reusable-collapsible label="Value Type (with hint)">
			<div class="grid h-full grid-cols-2 gap-2">
				@for (item of list; track $index) {
					<button
						class="relative rounded border py-2 duration-300"
						[ngClass]="{
							'bg-neutral-800 text-white hover:bg-neutral-700':
								editorService.getValueType() === item,
							'bg-neutral-100 hover:bg-neutral-200': editorService.getValueType() !== item
						}"
						(click)="editorService.setValueType(item)"
					>
						{{ item }}
						@if (item !== 'Physical') {
							<shared-reusable-ping-signal
								styling="right-1 top-1"
								innerColor="bg-blue-500"
								outerColor="bg-blue-400"
							/>
						}
						@if (item !== 'Logical') {
							<shared-reusable-ping-signal
								styling="right-1 top-1"
								innerColor="bg-violet-500"
								outerColor="bg-violet-400"
							/>
						}
					</button>
				}
			</div>
		</shared-reusable-collapsible>
	`,
	styles: [
		`
			:host {
			}
		`
	]
})
export class PanelValueTypeComponent {
	editorService = inject(EditorService);

	list: ValueType[] = ['Physical', 'Logical'];
}
