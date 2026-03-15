import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-with-image',
  imports: [],
  templateUrl: './btn-with-image.html',
  styleUrl: './btn-with-image.css',
})
export class BtnWithImage {
  @Input() Title: string = "";
  @Input() Image: string = "";
  @Input() link: string = "";
}
