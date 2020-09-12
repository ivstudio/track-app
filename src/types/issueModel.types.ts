export interface IUser {
	login: string;
}

export interface ILabel {
	id: number;
	color: string;
	name: string;
}

export interface IIssue {
	title: string;
	number: number;
	url: string;
	labels?: ILabel[];
	created_at: string;
	user: IUser;
	testId?: string;
}
