import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from "./components/admin/admin";
import { User } from './components/user/user';
import { SignalEx } from "./components/signal-ex/signal-ex";

@Component({
  selector: 'app-root',
  imports: [Admin, User, SignalEx],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20Tutorial');
}
