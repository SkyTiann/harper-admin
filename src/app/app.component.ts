import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuModule],
  templateUrl: './app.component.html'
})
export class AppComponent { }
