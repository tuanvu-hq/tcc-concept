import type { DirectionParent, ValueType } from './padding-main';

export type PaddingValue = '';

export type ValueConfig = {
	parent: DirectionParent;
	label: string;
	description: string[];
};

export type ValueDictionary = {
	[K1 in ValueType]: {
		[K2 in DirectionParent]: ValueConfig[];
	};
};
