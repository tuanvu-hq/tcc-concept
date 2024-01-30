import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CollapsibleComponent, PingSignalComponent } from '../../shared/components/re-usable';
import { EditorService } from '../services';
import { DirectionParent } from '../services/padding-main';

@Component({
	selector: 'editor-panel-direction',
	standalone: true,
	imports: [CollapsibleComponent, PingSignalComponent, NgClass],
	template: `
		<shared-reusable-collapsible label="Direction (with hint)">
			<div class="space-y-2">
				<div class="grid h-full grid-cols-3 gap-2">
					@for (item of list; track $index; let last = $last) {
						<button
							class="relative rounded border py-2 duration-300"
							[ngClass]="{
								'bg-neutral-800 text-white hover:bg-neutral-700':
									editorService.getDirectionParent() === item,
								'bg-neutral-100 hover:bg-neutral-200': editorService.getDirectionParent() !== item
							}"
							(click)="editorService.setDirectionParent(item)"
						>
							{{ item }}
							@if (last) {
								<shared-reusable-ping-signal
									styling="right-1 top-1"
									innerColor="bg-blue-500"
									outerColor="bg-blue-400"
								/>
								<shared-reusable-ping-signal
									styling="right-4 top-1"
									innerColor="bg-violet-500"
									outerColor="bg-violet-400"
								/>
							}
						</button>
					}
				</div>
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
export class PanelDirectionComponent {
	editorService = inject(EditorService);

	list: DirectionParent[] = ['All', 'Dual', 'Single'];
}
