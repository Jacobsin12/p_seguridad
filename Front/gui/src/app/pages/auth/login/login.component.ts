import { Component } from '@angular/core';
import { Card, CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-login',
  imports: [Card, CardModule, ButtonModule, InputGroupAddonModule,InputGroupModule,FormsModule],

  templateUrl: './login.component.html',

  styleUrl: './login.component.css'
})
export class LoginComponent {
public text1 :String='';
public text2 :String='';
}
