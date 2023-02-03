import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/Post';
import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
const httpOptions = {
  headers:new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable()
export class PostService {
PostUrl:string = "https://jsonplaceholder.typicode.com/posts"
  constructor( private http:HttpClient) { }

  getpost():Observable<Post[]> {
      return this.http.get<Post[]>(this.PostUrl)
  }
  savePost(post:Post):Observable<Post> {
  return this.http.post<Post>(this.PostUrl,post,httpOptions)
}
 editAndUpdatePost(post:Post):Observable<Post> {
  const url = `${this.PostUrl}/${post.id}`
  return this.http.put<Post>(url,post,httpOptions)
}
}
