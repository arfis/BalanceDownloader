import { Component } from '@angular/core';
import { CoursesComponent } from './component/courses.component';
import { AuthorsComponent } from './component/authors.component';
import { HttpTestComponent } from './component/httpTest.component';

@Component({
    selector: 'my-app',
    template: `
	<h1>My First Angular Aplication is here</h1>
	<courses></courses>
	<author></author>
	<httpTest></httpTest>`,
    directives: [CoursesComponent, AuthorsComponent, HttpTestComponent]
})
export class AppComponent {

 }
