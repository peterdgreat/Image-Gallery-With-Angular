import { Component, OnInit } from '@angular/core';
import { ImageserviceService } from '../imageservice.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  constructor(private imageService:ImageserviceService) { }

  ngOnInit(): void {
    this.imageService.getImages()
  }

}
