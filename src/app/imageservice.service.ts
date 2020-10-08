
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule}  from '@angular/common/http'


import {Images} from './images'
import { Observable, ObservedValueOf } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ImageserviceService {
  imageUrl:string="../assets/images.json"
  constructor(private http:HttpClient) {}
getImages():Observable<Images[]>{

return this.http.get<Images[]>(this.imageUrl)
}
}
