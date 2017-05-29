module Training {
	export const enum ModuleType {
		Evaluative = 1,
		Informative = 2
	}
	export const enum QuestionType {
		SingleChoice = 1,
		MultipleChoice = 2,
		Sorting = 3,
		MatrixSorting = 4,
		BlankFilling=5,
		ShortAnswer=6
	}
	export const enum FormMode {
    Insert = 1,
    Edit=2
	}

	export const enum BlankViewType{
		String=1,
		Blank=2
	}
}

