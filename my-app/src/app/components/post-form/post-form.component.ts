import { Component,OnInit,EventEmitter,Output,Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/model/Post';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  // post:Post[]=[]
  @Input() isEdit:boolean = true;
  @Input() currentPost:Post={id:0, title:'', body:''};
  @Output() newPost:EventEmitter<Post> = new EventEmitter();
  @Output() updatingPost:EventEmitter<Post> = new EventEmitter();

  constructor( private postService: PostService){}
  ngOnInit(): void {

  }
  addPost(title:string, body:string){
    console.log('Hello',title,body);
    if(!title || !body){
      alert('Please enter a title | body.');
      }  else{
        this.postService.savePost({title,body} as Post).subscribe(post => {
          // console.log('data',data);
          // console.log('Newpost',this.newPost.emit(post))
          this.newPost.emit(post)
        //  console.log('event',this.newPost.emit(post));
        // console.log('post',post);
        // console.log('event',this.newPost)
        })
      }
    }
    updatedPost(updatingPost:Post){
      console.log('updatedpost',updatingPost);

        this.postService.editAndUpdatePost(updatingPost).subscribe(data=>{
          // console.log("putdata",data);
          this.isEdit=false;
          this.updatingPost.emit(data);

        })
    }

  }

