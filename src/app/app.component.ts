import { Component, Inject } from '@angular/core';
// import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
        <app-simple-form></app-simple-form>

        {{ mail.message }}
        <hr>
        {{api}}  
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Server running :)';

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api,
  ){}
}
