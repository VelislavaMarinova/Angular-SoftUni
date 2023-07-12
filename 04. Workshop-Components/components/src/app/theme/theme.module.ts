import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentTeamComponent } from './current-team/current-team.component';



@NgModule({
  declarations: [
    NewThemeComponent,
    CurrentTeamComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
