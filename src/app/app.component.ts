import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postItems = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et maximus nibh. Etiam posuere volutpat dui, eget dapibus erat tristique tincidunt. Maecenas aliquet scelerisque lacus, a commodo velit laoreet id',
      loveIts: 0,
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et maximus nibh. Etiam posuere volutpat dui, eget dapibus erat tristique tincidunt. Maecenas aliquet scelerisque lacus, a commodo velit laoreet id',
      loveIts: 0,
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et maximus nibh. Etiam posuere volutpat dui, eget dapibus erat tristique tincidunt. Maecenas aliquet scelerisque lacus, a commodo velit laoreet id',
      loveIts: 0,
    }
  ]
}
