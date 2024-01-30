import { Component } from '@angular/core';
import {
	CanvasBackgroundComponent,
	CanvasBreadcrumbComponent,
	CanvasShowcaseComponent,
	CanvasValueComponent,
	PanelDirectionComponent,
	PanelDirectionReusableComponent,
	PanelValueComponent,
	PanelValueTypeComponent
} from '../../lib/editor/components';

@Component({
	selector: 'page-editor',
	standalone: true,
	imports: [
		CanvasBackgroundComponent,
		CanvasBreadcrumbComponent,
		CanvasShowcaseComponent,
		CanvasValueComponent,
		PanelValueTypeComponent,
		PanelDirectionComponent,
		PanelValueComponent,
		PanelDirectionReusableComponent
	],
	template: `
		<editor-canvas-background>
			<div class="grid h-[calc(100dvh-4rem)] grid-cols-[1fr,450px] gap-2 p-2">
				<div class="relative">
					<editor-canvas-breadcrumb />
					<editor-canvas-showcase />
					<editor-canvas-value />
				</div>
				<div class="grid grid-rows-1 gap-2 overflow-hidden rounded border bg-white p-2">
					<div class="flex flex-col gap-1 overflow-y-scroll pr-2">
						<editor-panel-value-type />
						<editor-panel-direction />
						<editor-panel-direction-reusable />
						<editor-panel-value />
					</div>
				</div>
			</div>
		</editor-canvas-background>
	`,
	styles: [
		`
			:host {
			}
		`
	]
})
export default class PageEditor {}
