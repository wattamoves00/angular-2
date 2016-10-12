import { Component } from '@angular/core';

  enum Color {Red = 1, Green, Blue};
let colorName: string = Color[1];

enum colors{
  a = 100,
  b =900,
  c,
  d
}
@Component({
  selector: 'my-app',
  template: `<h1>My SECOND Angular</h1>
  {{ title }}
   {{title1}}

  `
})
export class AppComponent {

title:number= colors.a;




title1:string = Color[1];
 }