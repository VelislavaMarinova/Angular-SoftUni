import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';
import { Theme } from 'src/types/theme';

@Component({
  selector: 'app-current-team',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-team.component.css']
})
export class CurrentThemeComponent implements OnInit{
  theme: Theme | undefined;
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  get isLogged(){
    return this.userService.isLogged
  }

  ngOnInit(): void {
    this.fetchTheme()
  }

  fetchTheme(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.apiService.getOneTheme(id).subscribe(theme => {
      this.theme = theme;
      console.log(theme);
      
    })
  }
}
