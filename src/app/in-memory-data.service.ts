import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let posts = [
      {
    id: 1,
    title: "Angular and Material Design - My experience",
    content:  `
    My first experience with Angular was when I took the free course from <a href='https://www.codeschool.com/'>Code School</a>. This course was sponsored by none other than: Google. I really liked the idea of single page-applications. During these days I created a couple of web applications including a couple of MEAN stack courses which were very inspiring and useful. 
    
    After that I was ready for the next step: Angular 2. We still didn't have a stable version at that time, the first RC were pretty unstable, they changed the libraries basically every week which could potentially break your code, and then you had to fix your code, update it, etc. Like many my first project was the <a href='https://angular.io/docs/ts/latest/tutorial/'>Tour of Heroes</a> which is a popular introductory app and according to the description: "The Tour of Heroes tutorial takes us through the steps of creating an Angular application in Typescript." 
    
    After that I decided to give it another change (there was already a stable version) so I decided to start with a simple <a href='https://github.com/meiordac/personal-blog'>Personal Blog App </a> where I would post my personal thoughts about tech, comments about my travels, etc. And also it would give me a taste of what was happening with Angular (former Angular 2, now Angular 1 is AngularJS).
    
    At the beginning I started with the typical Quickstart guide by the Angular team itself, but then I discovered the <a href='https://github.com/angular/angular-cli'> Angular CLI </a> project which is very much still a work in progress. But it was making the whole process a lot faster and easier. I also decided to try the Material Design for Angular 2 which is an alpha version and it's still under active development (it has almost half of the features available), this projects makes really easy to integrate MD to your projects with Angular. 
    
    Overall my experience with Angular and MD has been great, TypeScript greatly improves the experience of writing code (work especially well with Visual Studio Code) . Angular 2 is also way faster than the first version but still has a long way to go in order to become the default framework for web development but it's really promising and I think it's going in the right path. `,
    author: "Matias Iordache",
    image: "assets/img/angular2.png",
    published_at: new Date(2016, 10, 24)
  }
];


    let comments = [
      {
  id: 1,
  id_post: 1,
  content: 'hello this is my first comment',
  author: "Matias Iordache",
  published_at: new Date(2016, 11, 7),
  avatar: "assets/img/matias.jpg"

},

  {
  id: 2,
  id_post: 1,
  content: 'now this is my second comment',
  author: "Matias Iordache",
  published_at: new Date(2016, 10, 7),
  avatar: "assets/img/matias.jpg"
    
  }
];

    return {posts, comments};
  }
}
