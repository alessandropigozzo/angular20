import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {

  firstName : string = "Alessandro";
  productName = "Mate";
  courseName = signal<string>("Angular");
  courseDuration = signal("15 Videos");
  courseDetails = computed(()=> this.courseName() + " - "+ this.courseDuration())


  constructor() {
    //cambia la variabile normale
    this.firstName = "Alessandro";
    console.log(this.firstName);
    //cambia il signal value    
    this.courseName.set("React - Signal Course");
    console.log(this.courseName());

    setTimeout(() => {
          this.courseName.set("Angular - Signal Course");

    }, 5000);
  }
}
