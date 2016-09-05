import {Author} from '../models/author.model';

export class AuthorService{
	getAuthors() : Author[]{
		return [{name:"author1",age:12,address:"adress"},{name:"author2",age:14,address:"adress2"}]
	}
}
