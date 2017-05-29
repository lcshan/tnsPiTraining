/// <reference path="enums.ts" />

declare var tinymce;
declare module Training {
	interface Answer {
		AnswerID: number;
		AnswerString: string;
		Correct: boolean;
		Criterion: string;
		IsHtml: boolean;
		IsSortStringHtml: boolean;
		Points: number;
		QuestionID: number;
		SortString: string;
		Order: number;

		UserMatrixSortingAnswers: string[];
	}
	interface Module {
		AnswerRandom: boolean;
		Description: string;
		ModuleID: number;
		TenantId: number;
		ModuleType: Training.ModuleType;
		QuestionRandom: boolean;
		Questions: Training.Question[];
		TimeLimit: number;
		Title: string;
		Content: string;
		Points: number;
		PrerequisiteModuleID: number;
		PrerequisiteModule: Module;
		AttemptsLimit: number;
		PassPercentage: number;
		Categories: ModuleCategory[];
		CategoriesString: string;//for module list


		BrandLogo: string;
		Thumbnail: string;
		Published:boolean;

	}
	interface Question {
		Answers: Training.Answer[];
		CorrectMessage: string;
		EnableTips: boolean;
		InCorrectMessage: string;
		IsSameCorrectText: boolean;
		MatrixSortingAnswers: string[];
		ModuleID: number;
		ModuleTitle: string;
		Point: number;
		QuestionID: number;
		QuestionString: string;
		QuestionType: Training.QuestionType;
		ShowPointsInBox: boolean;
		TipMessage: string;
		Title: string;
		IsMarkingMode: boolean;
		PointsObtained: number;

	}
	interface TrainingModuleResult {
		CorrectQuestionNumber: number;
		Module: Training.Module;
		Points: number;
		TotalPoints: number;
		TotalQuestionNumber: number;
	}
	interface BlankFillingModule {
		AnswerString: string;
		Blanks: Training.Blank[];
	}
	interface BlankFillingView {
		Type: BlankViewType,
		BlankString: string;
		BlankData: Blank;
	}
	interface Blank {
		BlankFillingAnswers: BlankFillingAnswer[];
		SelectedAnswer: string;
		Points: number;
	}
	interface BlankFillingAnswer {
		Answer: string;
		Points: number;
		Correct: boolean;
	}

	interface HashTable<T> {
		[key: string]: T;
	}

	interface ModuleOverView {
		Title: string;
	}

	interface User {
		UserID: number;
		UserName: string;
		Roles: string[];
		CompanyName: string;
		Token: string;
		TenantId: number;
		AuthUserId: number;
		Tenant:Tenant;
	}
	interface UserModule {
		UserID: number;
		ModuleID: number;
		DueDate: Date;
		UserName: string;
		ModuleTitle: string;
		Module: Training.Module;
		Status: number;
		AttemptTimes: number;
		UserAnswerJson: string;
		UserCanDo: boolean;
		PreRequisiteModuleTitle: string;
		UnRead: boolean;



	}
	interface ModuleCategory {
		ModuleCategoryID: number;
		Name: string;
		Description: string;
		ParentCategoryID: number;
		ParentCategory: ModuleCategory;
		isSelected: boolean;

	}

	interface AssignModuleToUsers {
		AllUsers: User[],
		SelectedUserIds: number[],
		Module: Module,
		DueDate: Date
	}

	interface LoginModel {
		tenancyName?: string;
		usernameOrEmailAddress: string;
		password: string;
	}

	interface Tenant {
		TenantID: number;
		AuthServerId: number;
		ThemeSettingJson: string;
	}

	interface ThemeSetting {
		banner: {
			style: {
				'background-color': string;
			}
		}
		headerImage:string;
	}
}


