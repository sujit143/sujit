// import { Component, OnInit } from '@angular/core';
// import { Task } from '../task';

// @Component({
//   selector: 'app-editaskreactive',
//   templateUrl: './editaskreactive.component.html',
//   styleUrls: ['./editaskreactive.component.css']
// })
// export class EditaskreactiveComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }
//   onTaskEdit() {
//     this._taskdata
//       .editTask(
//         new Task(
//           this.signup.value.id,
//           this.signup.value.title,
//           this.signup.value.status
//         )
//       )
//       .subscribe(
//         (data:any)=>{
//           this._router.navigate(['/task']);
//         }
//       );
//   }
// }



import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  // AbstractControl,
  FormBuilder
} from "@angular/forms";
import { TaskdataService } from "../taskdata.service";
import { Task } from "../task";


@Component({
  selector: 'app-editaskreactive',
  templateUrl: './editaskreactive.component.html',
  styleUrls: ['./editaskreactive.component.css']
})
export class EditaskreactiveComponent implements OnInit {
  signup2: FormGroup;
  id: string;
  displayTask: Task;
  constructor(
    private _actroute: ActivatedRoute,
    private data: TaskdataService,
    // private _taskdata: TaskdataService,
    private fb: FormBuilder,
    private _router:Router
  ) {}

  ngOnInit() {
    this.id = this._actroute.snapshot.params["Id"];
    this.data.getTaskById(this.id).subscribe((data:Task[]) => {
    // this._taskdata.getTaskById(this.id).subscribe((data: Task[]) => {
      this.displayTask = data[0];
      this.signup2.patchValue({
        id: this.displayTask.Id,
        title: this.displayTask.Title,
        status: this.displayTask.Status

      });
    });
    this.signup2 = this.fb.group({
      id: new FormControl(null, [
        Validators.required
      ]),
    title: new FormControl(null, Validators.required),

          status: new FormControl(null, Validators.required)

    });
  }
  onTaskEdit() {
    this.data
    // this._taskdata
      .editTask(
        new Task(
          this.signup2.value.id,
          this.signup2.value.title,

          this.signup2.value.status

        )
      )
      .subscribe(
        (data:any)=>{

          this._router.navigate(['/task']);
          alert('updated');
        }
      );
  }
}


// import { Component, OnInit } from "@angular/core";
// import { ActivatedRoute, Router } from "@angular/router";


// import {
//   FormGroup,
//   FormControl,
//   Validators,
//   AbstractControl,
//   FormBuilder
// } from "@angular/forms";
// import { Task } from '../task';
// import { TaskdataService } from '../taskdata.service';

// @Component({
//   selector: 'app-edittaskreactive',
//   templateUrl: './edittaskreactive.component.html',
//   styleUrls: ['./edittaskreactive.component.css']
// })
// export class EdittaskreactiveComponent implements OnInit {
//   signup2: FormGroup;
//   id: string;
//   displayTask: Task;
//   constructor(
//     private _actroute: ActivatedRoute,
//     private data: TaskdataService,
//     private fb: FormBuilder,
//     private _router:Router
//   ) {}
//   ngOnInit() {
//     this.id = this._actroute.snapshot.params["id"];
//     this.data.getTaskById(this.id).subscribe((data:Task[]) => {
//       this.displayTask = data[0];
//       this.signup2.patchValue({
//         id: this.displayTask.Id,
//         title: this.displayTask.Title,
//         status: this.displayTask.Status,

//       });
//     });

//     this.signup2 = this.fb.group({
//       id: new FormControl(null, [
//         Validators.required
//       ]),
//       title: new FormControl(null, Validators.required),

//       status: new FormControl(null, Validators.required)
//     });

//     }
//       onTaskEdit() {
//         this.data
//           .editTask(
//             new Task(
//               this.signup2.value.id,
//               this.signup2.value.title,

//               this.signup2.value.status
//             )
//           )
//           .subscribe(
//             (data:any)=>{
//               this._router.navigate(['/tasks']);
//             }
//           );
//       }

//     }
