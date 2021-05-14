import { Component } from '@angular/core'
import {ApiService}  from './api.service'
import {QuestionComponent} from "./question.compenent"
@Component ({
    selector : 'questions',
    templateUrl :'./questions.component.html'
})


export class QuestionsComponent{
  
  
  
  constructor (private api :ApiService){}
    question= {"text":"", "correctAnswer":"", "answer1" :"","answer2" :"", "answer3" :""};
    questions= [] as any
   
    ngOnInit(){
        this.api.getQuestions().subscribe(res => this.questions= res)
    }
    post(question : any)
    {
      this.api.postQuestion( question)
     // console.log(question)
    }
}
