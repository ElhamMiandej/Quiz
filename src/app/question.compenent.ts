import { Component } from '@angular/core'
import {ApiService}  from './api.service'
@Component ({
    selector : 'question',
    templateUrl :'./question.component.html'
})


export class QuestionComponent{
  constructor (private api :ApiService){}
    question= {"text":"", "correctAnswer":"", "answer1" :"","answer2" :"", "answer3" :""};
    
    post(question : any)
    {
      this.api.postQuestion( question)
     // console.log(question)
    }
}
