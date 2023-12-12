import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectDisplayComponent } from '../project-display/project-display.component';

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [ProjectDisplayComponent, FlexLayoutModule],
  templateUrl: './project-grid.component.html',
  styleUrl: './project-grid.component.css'
})
export class ProjectGridComponent 
{
    pTitles = ['Guitar Classifier', 'Brast Cancer Classifier', "Pac's Revenge"];
    pDescrips = ['I created a Convolutional Neural Network designed to classify images of Fender guitars, determining the model type', 
    'I developed both a Logistic Regression, and a Feed Foward Neural Network model to classify the breast cancer database from SKLearn',
    'Worked with a team of 4 to develop, program, and design a DOOM-like version of Pacman using the Unity engine and C#']
}
