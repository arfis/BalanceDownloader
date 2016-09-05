import {Component} from '@angular/core'
import {CourseService} from '../service/course.service/'
import {MyTypedItem } from '../models/MyTypedItem';
import {AutoGrowDirective} from '../auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
	{{ title }}
	<input type="text" autoGrow [(ngModel)]="modelTest" />
	{{modelTest}}
	<ul>
		<li *ngFor="let course of courses">{{course}}</li>
	</ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent{ 
	title: string = "Title for course page!";
	courses :String[];

	constructor(courseService : CourseService){
		this.courses = courseService.getCourses();
	}
}