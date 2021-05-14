import { Component } from '@angular/core';
import {QuestionComponent} from "./question.compenent"

@Component({
  selector: 'app-root',
  template:'<question></question><questions></questions>'

})
export class AppComponent {
  title = 'my app';
}
