import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProjectDisplayComponent } from "./project-display/project-display.component";
import { ProjectGridComponent } from './project-grid/project-grid.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ProjectDisplayComponent, ProjectGridComponent]
})
export class AppComponent 
{
  title = 'website';

}
