import { NgClass } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { CollapsibleComponent } from '../../shared/components/re-usable';
import { logicalPaddingDual } from '../config/padding/logical/padding-dual';
import { logicalPaddingSingle } from '../config/padding/logical/padding-single';
import { physicalPaddingAll } from '../config/padding/physical/padding-all';
import { physicalPaddingDual } from '../config/padding/physical/padding-dual';
import { physicalPaddingSingle } from '../config/padding/physical/padding-single';
import { EditorService } from '../services';
import { ValueDictionary } from '../services/padding-values';

@Component({
	selector: 'shared-panel-value-description',
	standalone: true,
	imports: [],
	template: `
		<span class="flex h-full flex-col justify-center gap-1 text-sm text-neutral-400">
			@for (item of list; track $index) {
				<span>{{ item }}</span>
			}
		</span>
	`,
	styles: [
		`
			:host {
			}
		`
	]
})
export class DescriptionComponent {
	@Input() list!: string[];
}

@Component({
	selector: 'editor-panel-value',
	standalone: true,
	imports: [CollapsibleComponent, DescriptionComponent, NgClass],
	template: `
		<shared-reusable-collapsible label="Values">
			<div class="grid gap-1">
				@for (
					item of dictionary[editorService.getValueType()][editorService.getDirectionParent()];
					track $index
				) {
					<button
						class="grid h-16 grid-cols-[80px,1fr] gap-0 rounded border p-2 text-left duration-300"
						[ngClass]="{
							'bg-neutral-800 text-white hover:bg-neutral-700':
								editorService.getValue() === item.label,
							'bg-neutral-100 hover:bg-neutral-200': editorService.getValue() !== item.label
						}"
						(click)="editorService.setValue(item.label)"
					>
						<span class="flex h-full items-center pl-4 text-sm">
							{{ item.label }}
						</span>
						<span class="grid h-full">
							<shared-panel-value-description [list]="item.description" />
						</span>
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
export class PanelValueComponent {
	editorService = inject(EditorService);

	dictionary: ValueDictionary = {
		Physical: {
			All: physicalPaddingAll,
			Dual: physicalPaddingDual,
			Single: physicalPaddingSingle
		},
		Logical: {
			All: physicalPaddingAll,
			Dual: logicalPaddingDual,
			Single: logicalPaddingSingle
		}
	};
}
