import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="page-head">
      <p class="kicker">Become a member</p>
      <h1>Student registration form</h1>
    </section>

    <section class="block narrow">
      @if (submitted) {
        <div class="success" role="status">
          <h2>Registration received</h2>
          <p>Thank you, {{ form.value.name }}. Your library card details will be sent to {{ form.value.email }}.</p>
          <button class="btn" type="button" (click)="reset()">Register another student</button>
        </div>
      } @else {
        <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
          <div class="field">
            <label for="name">Name</label>
            <input id="name" formControlName="name" autocomplete="name" />
            @if (invalid('name')) { <small class="err">Enter your full name.</small> }
          </div>

          <div class="field">
            <label for="email">Email</label>
            <input id="email" type="email" formControlName="email" autocomplete="email" />
            @if (invalid('email')) { <small class="err">Enter a valid email address.</small> }
          </div>

          <div class="field">
            <label for="mobile">Mobile number</label>
            <input id="mobile" inputmode="numeric" maxlength="10" formControlName="mobile" autocomplete="tel" />
            @if (invalid('mobile')) { <small class="err">Enter a 10-digit mobile number.</small> }
          </div>

          <div class="field">
            <label for="course">Course</label>
            <select id="course" formControlName="course">
              <option value="">Select course</option>
              @for (c of courses; track c) { <option [value]="c">{{ c }}</option> }
            </select>
            @if (invalid('course')) { <small class="err">Select your course.</small> }
          </div>

          <fieldset class="field">
            <legend>Gender</legend>
            <label class="inline"><input type="radio" value="Male" formControlName="gender" /> Male</label>
            <label class="inline"><input type="radio" value="Female" formControlName="gender" /> Female</label>
            @if (invalid('gender')) { <small class="err">Select a gender.</small> }
          </fieldset>

          <fieldset class="field" formGroupName="skills">
            <legend>Skills</legend>
            @for (s of skills; track s) {
              <label class="inline"><input type="checkbox" [formControlName]="s" /> {{ s }}</label>
            }
          </fieldset>

          <div class="field">
            <label for="address">Address</label>
            <textarea id="address" rows="3" formControlName="address"></textarea>
            @if (invalid('address')) { <small class="err">Enter your address.</small> }
          </div>

          <button class="btn primary" type="submit">Submit registration</button>
        </form>
      }
    </section>
  `,
})
export class RegistrationComponent {
  courses = ['BCA', 'MCA', 'B.Tech', 'MBA'];
  skills = ['HTML', 'CSS', 'JavaScript', 'Python'];
  submitted = false;
  private attempted = false;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    course: ['', Validators.required],
    gender: ['', Validators.required],
    skills: this.fb.group({ HTML: false, CSS: false, JavaScript: false, Python: false }),
    address: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  invalid(field: string) {
    const c = this.form.get(field);
    return !!c && c.invalid && (c.touched || this.attempted);
  }

  submit() {
    this.attempted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted = true;
  }

  reset() {
    this.form.reset({ skills: { HTML: false, CSS: false, JavaScript: false, Python: false } });
    this.attempted = false;
    this.submitted = false;
  }
}
