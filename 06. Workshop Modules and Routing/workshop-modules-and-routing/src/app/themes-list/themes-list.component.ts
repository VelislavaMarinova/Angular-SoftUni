import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from 'src/types/theme';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit{
themesList: Theme[]=[];
isLoading: boolean=true;
  constructor(private apiService: ApiService, private userService: UserService) { };

  get isLogged(): boolean{
    return this.userService.isLogged
  }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: themes => {
        console.log(themes[0]);
        this.themesList = themes;
        this.isLoading=false;
      },
      error:(err)=>{
        this.isLoading=false;
        console.log(`Error ${err}`);
      }
    })
  }
}