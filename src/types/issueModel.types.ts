export interface IUser {
	login: string;
}

export interface ILabel {
	id: string;
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
}
