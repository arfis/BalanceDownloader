import {Component} from '@angular/core';
import {AuthorService} from '../service/author.service';
import {Author} from '../models/author.model';

@Component({
    selector: 'author',
    template: `
    <h2>Authors</h2>
	{{ title }}
	<ul>
		<li *ngFor="let author of authors">{{author.name}}</li>
	</ul>
    `,
    providers: [AuthorService]
})

export class AuthorsComponent{ 
	title: string = "authors";
	authors :Author[];

	constructor(authorService : AuthorService){
		this.authors = authorService.getAuthors();
	}
}