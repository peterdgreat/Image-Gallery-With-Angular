import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Images } from '../images';
import { ImageserviceService } from '../imageservice.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
title:string="Recent photos"
@Input() filterBy?:string='all'
images:Images[]
  constructor(private imageservice:ImageserviceService) {
    this.imageservice.getImages().subscribe(response=>this.images=response)

   }

  ngOnChanges(){
    this.imageservice.getImages().subscribe(response=>this.images=response)
    }

}
