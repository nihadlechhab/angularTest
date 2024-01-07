import { Component } from '@angular/core';

@Component({
  selector: 'app-home-default',
  template: '<h1> this is html in template</h1>',
  styles: ['h1 { background-color: yellow ;}']
})
export class HomeDefaultComponent {
 title=' this is variable in file component.ts'

 updatevalue(){
  
 }
}
