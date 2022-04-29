import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
//   angularForm = new FormGroup ({
//     name: new FormControl()
//   });
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  angularForm = new FormGroup ({
    name: new FormControl()
  });
  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }
  createForm() {
    this.angularForm = this.fb.group({
      name: ['', Validators.required ],
    });
}
}