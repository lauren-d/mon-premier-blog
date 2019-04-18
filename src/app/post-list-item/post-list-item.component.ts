import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  created_at;

  constructor() {
    this.created_at = new Date();
  }
  ngOnInit() {}

  onLoveIts(){
    this.loveIts += 1;
  }
  onDontLoveIts(){
    this.loveIts -= 1;
  }
}
