import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.sass']
})
export class CardContainerComponent implements OnInit {

  notifications = [{
    title: 'Notifications',
    body: ['OOP bonus points added', 'New AI study materials']
  }, {
    title: 'Tasks',
    body: ['MAT2 exam in 3 days', 'New AI study materials']
  }];

  newsItems = [{
    courseName: 'Object oriented programming',
    postTitle: 'S.O.L.I.D.',
    postBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar molestie lacus quis auctor. Curabitur tellus ex, dapibus ut purus id, condimentum malesuada enim. Mauris a euismod velit, sit amet dictum felis. Duis et arcu at enim viverra eleifend id eu purus. Duis iaculis pharetra dictum. Duis ornare sapien vel ornare faucibus. Donec eros felis, bibendum eu venenatis hendrerit, rutrum sit amet velit. Suspendisse erat velit, dignissim et neque at, vulputate consectetur libero. Proin tellus enim, viverra in ultricie'
  },
  {
    courseName: 'Artificial inteligence',
    postTitle: 'Neural networks',
    postBody: 'Vestibulum egestas metus id libero imperdiet, ut tincidunt justo tincidunt. Proin feugiat bibendum tortor eget rutrum. Nam vehicula cursus ante ut dictum. Aliquam aliquet molestie urna id mattis. Mauris viverra sapien sit amet risus egestas, eget sagittis sapien molestie. Integer consectetur consequat ultrices. Sed mollis, risus ut posuere aliquam, nulla tellus rutrum tortor, sed feugiat risus nibh nec libero. Donec pharetra magna eget pharetra pretium. Pellentesque pulvinar dignissim risus, a eleifend diam. Vestibulum mollis erat mauris, eu eleifend magna scelerisque vitae. Ut in nibh nec odio porttitor tincidunt vel ut orci. In rutrum, dolor id molestie imperdiet, quam ipsum ultrices ante, vitae hendrerit quam mauris ac orci.'
  }, {
    courseName: 'Artificial inteligence',
    postTitle: 'Neural networks',
    postBody: 'Vestibulum egestas metus id libero imperdiet, ut tincidunt justo tincidunt. Proin feugiat bibendum tortor eget rutrum. Nam vehicula cursus ante ut dictum. Aliquam aliquet molestie urna id mattis. Mauris viverra sapien sit amet risus egestas, eget sagittis sapien molestie. Integer consectetur consequat ultrices. Sed mollis, risus ut posuere aliquam, nulla tellus rutrum tortor, sed feugiat risus nibh nec libero. Donec pharetra magna eget pharetra pretium. Pellentesque pulvinar dignissim risus, a eleifend diam. Vestibulum mollis erat mauris, eu eleifend magna scelerisque vitae. Ut in nibh nec odio porttitor tincidunt vel ut orci. In rutrum, dolor id molestie imperdiet, quam ipsum ultrices ante, vitae hendrerit quam mauris ac orci.'
  }, {
    courseName: 'Artificial inteligence',
    postTitle: 'Neural networks',
    postBody: 'Vestibulum egestas metus id libero imperdiet, ut tincidunt justo tincidunt. Proin feugiat bibendum tortor eget rutrum. Nam vehicula cursus ante ut dictum. Aliquam aliquet molestie urna id mattis. Mauris viverra sapien sit amet risus egestas, eget sagittis sapien molestie. Integer consectetur consequat ultrices. Sed mollis, risus ut posuere aliquam, nulla tellus rutrum tortor, sed feugiat risus nibh nec libero. Donec pharetra magna eget pharetra pretium. Pellentesque pulvinar dignissim risus, a eleifend diam. Vestibulum mollis erat mauris, eu eleifend magna scelerisque vitae. Ut in nibh nec odio porttitor tincidunt vel ut orci. In rutrum, dolor id molestie imperdiet, quam ipsum ultrices ante, vitae hendrerit quam mauris ac orci.'
  }]


  listCard = {
    listName: 'Courses',
    coursesEnrolled: ['Artificial Inteligence', 'Object Oriented Programming', 'Mathematics 2']
  };

  userFullName: String = 'Pavol Dudak';
  constructor() { }

  ngOnInit() {
  }

}
