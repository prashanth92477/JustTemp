import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[]=[];
  currentPost:Post = {id:0, title:'', body:''}
  isEdit:boolean=false;
  constructor( private postService: PostService){}
  ngOnInit(): void {
      this.postService.getpost().subscribe(data =>{
        // console.log("data",data);
        this.posts = data;
      })
  }
  onNewPost(post:Post){
      this.posts.unshift(post)
  }
  editPost(post:Post){
    this.currentPost=post;
    this.isEdit=true;
  }
  onUpdatePost(post:Post){
    // console.log('onupdatePost', post);
    // this.posts.push(post);
    this.posts.forEach((curr,index) =>{
      if(post.id === curr.id){
        this.posts.splice(index,1)
        console.log(this.posts.splice(index,1))
        this.posts.unshift(post);
        this.isEdit=false
      }

    })
    this.currentPost={
      id:0,
      title:'',
      body:''


    }
}

}
