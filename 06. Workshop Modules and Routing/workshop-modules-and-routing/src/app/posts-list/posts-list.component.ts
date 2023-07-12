import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from 'src/types/posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postsList: Post[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe({
      next: posts => {
        console.log(posts[0]);
        this.postsList = posts;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(`Error ${err}`);
      }
    })
  }
}

