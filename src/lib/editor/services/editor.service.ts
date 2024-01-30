import { Injectable, computed, signal } from '@angular/core';
import type { Direction, DirectionChild, DirectionParent, ValueType } from './padding-main';

@Injectable({ providedIn: 'root' })
export class EditorService {
	// # VALUE TYPE
	#valueType = signal<ValueType>('Physical');
	getValueType = computed(() => this.#valueType());
	setValueType = (value: ValueType) => this.#valueType.set(value);

	// # DICRECTION
	#direction = signal<Direction>({ parent: 'All', child: '[All]: None' });
	getDirection = computed(() => this.#direction());
	getDirectionParent = computed(() => this.#direction().parent);
	getDirectionChild = computed(() => this.#direction().child);
	setDirection = (value: Direction) => this.#direction.set(value);
	setDirectionParent = (parent: DirectionParent) => {
		this.#direction.update((store) => ({ ...store, parent }));
	};
	setDirectionChild = (child: DirectionChild) => {
		this.#direction.update((store) => ({ ...store, child }));
	};

	// # VALUE
	#value = signal('');
	getValue = computed(() => this.#value());
	setValue = (value: string) => this.#value.set(value);
}
