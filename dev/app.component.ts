import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        {{onTest()
        }}
        <br>
        <input type="text" [value]="name" [ngClass]="{red: true}" (keyup)="onKeyup(inputElement.value)" #inputElement>
        <p>{{values}}</p>
        <br><br>
        <input type="text" [(ngModel)]="name">
        <p>Your Name: {{name}}</p>
    `,
})
export class AppComponent {
 name = 'Nicolas';
 values ='';

 onTest(){
 return 1 === 1;
 }

 onKeyup(value: string) {
 this.values += value + ' | ';
 }
}