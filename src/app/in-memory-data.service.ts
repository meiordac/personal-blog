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
    published_at: new Date(2016, 9, 24)
  },
     {
    id: 2,
    title: "Angular CLI",
    content:  `
    Angular CLI is a command line interface for Angular based on the <a href='https://https://ember-cli.com/'> Ember CLI </a> project and is still a work in progress which means it's under active development, indeed it's still in beta and new versions bring many new functionalities and you may need to migrate between versions in order to take advantage of the benefits of the new versions (if you have a previous version installed). 
    
    <a href='https://github.com/angular/angular-cli'> Angular CLI </a> makes the whole process of creating a new Angular app a lot faster and easier. It helps you to create a new project just with a single command like ng new-project which creates an application that works out of the box following the best practices and then you just have to serve your new project with ng-serve, the scaffold commands which would help you generate new components with a simple ng generate you can create: routes, pipes, components, and services.
    
    Then to run your test cases is as simple as ng test, and to deploy in github pages you just have to use the following command ng github-pages:deploy --message "Optional commit message". It makes increadibly easy to develop and deploy new applications in this promising new framework supported by Google.

   If you want to see more more about the CLI Mike Brocchi did a <a href='https://www.youtube.com/watch?v=wHZe6gGI5RY'> great talk at ng-conf </a> about CLI capabilities, I highly recommend to watch it, to get a broad overview.

    `,
    author: "Matias Iordache",
    image: "assets/img/angular-2-cli.png",
    published_at: new Date(2016, 10, 9)
  },
     {
    id: 3,
    title: "Integrating Angular and Visual Studio",
    content:  `
    As many developers, I found Visual Studio 2015 to be one of the best Integrated Development Enviroments (IDE) if not the best. It integrates well with TypeScript and in the last versions it's also possible to integrate Angular 2 with Visual Studio 2015. First according to the Angular website itself we should "Verify that you are running node version 4.6.x or greater, and npm 3.x.x or greater by running node -v and npm -v in a terminal/console window. Older versions produce errors.".

    Also Visual Studio 2015 Update 3 is the minimum requirement for developing Angular 2 applications, according to the people from Angular earlier versions do not follow the best practices for developing with TypeScript. Also they recommend to install TypeScript 2, VS Update 3 includes it's own version of TypeScript. After all this we can find some template as a Nuget to generate all the boiler plate required to start developing a Angular app (which can be a lot). There's some template projects for example a Sample Angular 2 and Mvc 5 application. (with bootstrap, typescript and service) developed by Microsoft itself
    `,
    author: "Matias Iordache",
    image: "assets/img/vslogo.jpg",
    published_at: new Date(2016, 10, 10)
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
