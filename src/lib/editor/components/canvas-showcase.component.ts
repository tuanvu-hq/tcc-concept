import { NgClass } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { EditorService } from '../services';

@Component({
	selector: 'editor-canvas-showcase-text',
	standalone: true,
	imports: [NgClass],
	template: `
		<div class="space-y-2 duration-300" [dir]="direction">
			<h2 class="font-semibold">{{ label }}</h2>
			<div
				class="overflow-hidden rounded bg-gradient-to-r from-cyan-500 to-blue-500"
				[ngClass]="editorService.getValue()"
			>
				<p class="w-full bg-white px-4 py-2" [ngClass]="styling">{{ text }}</p>
			</div>
		</div>
	`,
	styles: [
		`
			.az-arabic {
				direction: rtl;
			}

			.az-japanese {
				writing-mode: vertical-rl;
				text-orientation: use-glyph-orientation;
			}
		`
	]
})
export class TextComponent {
	@Input() styling!: string;
	@Input() label!: string;
	@Input() text!: string;
	@Input() direction!: string;

	editorService = inject(EditorService);
}

@Component({
	selector: 'editor-canvas-showcase',
	standalone: true,
	imports: [TextComponent],
	template: `
		<div class="grid h-full w-full place-items-center">
			<div class="grid max-w-[800px] grid-cols-2 gap-4">
				<div class="grid">
					<editor-canvas-showcase-text
						direction="ltr"
						label="English"
						text="The sun sets behind the mountains, casting a warm glow across the valley."
					/>
					<editor-canvas-showcase-text
						direction="rtl"
						styling="az-arabic"
						label="Arabic"
						text="الشمس تغيب خلف الجبال، مسطعة بتوهج دافئ عبر الوادي."
					/>
					<editor-canvas-showcase-text
						direction="ltr"
						label="Japanese"
						text="太陽は山の後ろに沈み、渓谷に温かな輝きを投げかけます。"
					/>
				</div>
				<div>
					<editor-canvas-showcase-text
						direction="rtl"
						styling="az-japanese"
						label="Japanese"
						text="太陽は山の後ろに沈み、渓谷に温かな輝きを投げかけます。"
					/>
				</div>
			</div>
		</div>
	`,
	styles: [
		`
			:host {
			}
		`
	]
})
export class CanvasShowcaseComponent {}
