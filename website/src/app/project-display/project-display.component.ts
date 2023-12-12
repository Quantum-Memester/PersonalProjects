import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-display',
  standalone: true,
  imports: [],
  templateUrl: './project-display.component.html',
  styleUrl: './project-display.component.css'
})
export class ProjectDisplayComponent 
{
  @Input()
  //Gets the title
  get projectTitle(): string { return this.pTitle; }
  set projectTitle(projectTitle: string)
  {
    this.pTitle = (projectTitle && projectTitle.trim()) || '<no title set>'
  }
  private pTitle = '';
  @Input()
  //Gets the description
  get description(): string { return this.descrip; }
  set description(description: string)
  {
    this.descrip = (description && description.trim()) || '<no descrip set>'
  }
  private descrip = '';
}
