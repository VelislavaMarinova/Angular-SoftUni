import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development'
import { Theme } from 'src/types/theme';
import { Post } from 'src/types/posts'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getOneTheme(id: string) {
    const { appUrl } = environment
    return this.http.get<Theme>(`${appUrl}/themes/${id}`)
  }

  getThemes() {
    const { appUrl } = environment
    return this.http.get<Theme[]>(`${appUrl}/themes`)
  }

  getPosts(limit?: number) {
    const limitFilter = limit ? `?limit=${limit}` : ''
    const { appUrl } = environment
    return this.http.get<Post[]>(`${appUrl}/posts${limitFilter}`)
  }
}

