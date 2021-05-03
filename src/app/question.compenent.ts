import { Component } from '@angular/core'
@Component ({
    selector : 'question',
    templateUrl :'./question.component.html'
})


export class QuestionComponent{
    question: string = '';
    post(question:string)
    {
      console.log(question)
    }
}
