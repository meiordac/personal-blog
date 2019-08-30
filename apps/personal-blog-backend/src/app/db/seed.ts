import * as mongoose from 'mongoose';

import models from '../models';
import User from '../models/user';
import { ObjectID } from 'mongodb';

const posts = [
  {
    title: 'Angular and Material Design - My experience',
    content: `
    My first experience with Angular was when I took the free course from <a href='https://www.codeschool.com/'>Code School</a>. This course was sponsored by none other than: Google. I really liked the idea of single page-applications. During these days I created a couple of web applications including a couple of MEAN stack courses which were very inspiring and useful.
    After that I was ready for the next step: Angular 2. We still didn't have a stable version at that time, the first RC were pretty unstable, they changed the libraries basically every week which could potentially break your code, and then you had to fix your code, update it, etc. Like many my first project was the <a href='https://angular.io/docs/ts/latest/tutorial/'>Tour of Heroes</a> which is a popular introductory app and according to the description: 'The Tour of Heroes tutorial takes us through the steps of creating an Angular application in Typescript.'
    After that I decided to give it another change (there was already a stable version) so I decided to start with a simple <a href='https://github.com/meiordac/personal-blog'>Personal Blog App </a> where I would post my personal thoughts about tech, comments about my travels, etc. And also it would give me a taste of what was happening with Angular (former Angular 2, now Angular 1 is AngularJS).
    At the beginning I started with the typical Quickstart guide by the Angular team itself, but then I discovered the <a href='https://github.com/angular/angular-cli'> Angular CLI </a> project which is very much still a work in progress. But it was making the whole process a lot faster and easier. I also decided to try the Material Design for Angular 2 which is an alpha version and it's still under active development (it has almost half of the features available), this projects makes really easy to integrate MD to your projects with Angular.
    Overall my experience with Angular and MD has been great, TypeScript greatly improves the experience of writing code (work especially well with Visual Studio Code) . Angular 2 is also way faster than the first version but still has a long way to go in order to become the default framework for web development but it's really promising and I think it's going in the right path. },
    `,
    image: 'assets/img/angular2.png',
    published_at: new Date(2016, 9, 24)
  },
  {
    title: 'Angular CLI',
    content: `
 Angular CLI is a command line interface for Angular based on the <a href='https://https://ember-cli.com/'> Ember CLI </a> project and is still a work in progress which means it's under active development, indeed it's still in beta and new versions bring many new functionalities and you may need to migrate between versions in order to take advantage of the benefits of the new versions (if you have a previous version installed).
 <a href='https://github.com/angular/angular-cli'> Angular CLI </a> makes the whole process of creating a new Angular app a lot faster and easier. It helps you to create a new project just with a single command like ng new-project which creates an application that works out of the box following the best practices and then you just have to serve your new project with ng-serve, the scaffold commands which would help you generate new components with a simple ng generate you can create: routes, pipes, components, and services.
 Then to run your test cases is as simple as ng test, and to deploy in github pages you just have to use the following command ng github-pages:deploy --message 'Optional commit message'. It makes increadibly easy to develop and deploy new applications in this promising new framework supported by Google.
If you want to see more more about the CLI Mike Brocchi did a <a href='https://www.youtube.com/watch?v=wHZe6gGI5RY'> great talk at ng-conf </a> about CLI capabilities, I highly recommend to watch it, to get a broad overview.
`,
    image: 'assets/img/angular-2-cli.png',
    published_at: new Date(2016, 10, 9)
  },
  {
    title: 'Integrating Angular and Visual Studio',
    content: `
 As many developers, I found Visual Studio 2015 to be one of the best Integrated Development Enviroments (IDE) if not the best. It integrates well with TypeScript and in the last versions it's also possible to integrate Angular 2 with Visual Studio 2015. First according to the Angular website itself we should 'Verify that you are running node version 4.6.x or greater, and npm 3.x.x or greater by running node -v and npm -v in a terminal/console window. Older versions produce errors.'.
 Also Visual Studio 2015 Update 3 is the minimum requirement for developing Angular 2 applications, according to the people from Angular earlier versions do not follow the best practices for developing with TypeScript. Also they recommend to install TypeScript 2, VS Update 3 includes it's own version of TypeScript. After all this we can find some template as a Nuget to generate all the boiler plate required to start developing a Angular app (which can be a lot). There's some template projects for example a Sample Angular 2 and Mvc 5 application. (with bootstrap, typescript and service) developed by Microsoft itself
`,
    image: 'assets/img/vslogo.jpg',
    published_at: new Date(16, 10, 10)
  },
  {
    title: 'My experience developing a Rails 5 API',
    content: `
 I'm very passionate about Angular and I'm currently experimenting with it, indeed I wrote my personal blog in this relatively new JS framework with many new features over its predecessor. While I was developing I used the "in memory Web API" provided by Angular but at some point of the development I realized I needed a backend to support all of the data associated with blogs for example: posts, comments, users, etc.
 To create a new application using the following command rails new my_api --api
 I decided to use Rails which I haven't used in a long time mainly because of its simplicity and how quickly you can have an entire application. After doing some research I discovered that the new version integrates development of APIs natively a simple --api flag which allows you to create a new application using the following command rails new my_api --api you can generate a new API application without all the unnecesary views and javascript code that regular Rails applications include.
 CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated. An application generated with --api will generate CORS initializer, but rack-cors gem is still disabled in generated Gemfile. Enable it there and then run bundle to install it.
 After that you're pretty much ready to start developing as you would expect in a normal Rails application using the typical generators like scaffold which would create the controllers, models, but it won't create the views or js scripts because we won't need them.
 In conclusion, after a couple of minute I had a working backend
 In conclusion, after a couple of minute I had a working backend which exposed the data I needed and with some help from Heroku it was online with a nice PostgreSQL database which requires installing a couple of libraries.
 `,
    image: 'assets/img/rails.png',
    published_at: new Date(1016, 12, 21)
  },
  {
    title: 'The interesting tech scene in Chile',
    content: `
 As I am currently an expat living in Europe I could not avoid to make comparisons of the current state of the tech industry in different places, and although Chile is not as developed as some other countries in the OECD there is a lot going on right now especially in the tech industry, and that is why AWS recently chose Santiago to open a new office during 2017, among many other tech giants that already have offices there.
 One of the reasons behind this growing market is Start-Up Chile which is a program created by the Chilean Government that seeks to attract early-stage, high-potential entrepreneurs to bootstrap their startups using Chile as a platform to go global. The end goal of this program is to position Chile as the innovation and entrepreneurship hub of Latin America, among others Start-up Chile offers a one year working visa and a soft landing when the person arrives to Chile, Equity free money & Perks, Training, mentors and investors and Community and Networks.
 Chile is held oftentimes as an economic model for the rest of Latin America, is one of the safest countries in the Americas, politically stable and Santiago its capital is a big multicultural city with almost a third of the population and it is where most start-ups are concentrated, although there are some initiatives in the South of the country.
 If you are interested in the chilean tech ecosystem you can find out more about it on this very interesting article published last year by TechCrunch.
 `,
    image: 'assets/img/startup.png',
    published_at: new Date(2017, 1, 26)
  },
  {
    title: 'Angular 4 and Angular Cli 1 finally released',
    content: `
 The new version of Angular is already out (since Thursday, March 23, 2017) and as announced it's not Angular 3 but Angular 4 instead and although it might sound scary after the big change that Angular 2 meant, in this case this is version numbering change and not a complete framework rewrite like Angular 1 to Angular 2. So we might expect Angular 5 in September, 2017 as according to the Angular team we will have new major releases every 6 months. So as promised, Angular 4 is backwards compatible with 2.x.x for most applications.
 Angular introduces a lot of changes being the most important one that now Angular applications are smaller and faster. However, the Angular team promised that further improvements will be made in the coming months.
 Some of the new features that Angular 4 introduces are the following:
 Improved *ngIf and *ngFor, users can now use an if/else style syntaxAngular
 Universal was adopted by the Angular team, now majority of the Universal code is located in @angular/platform-server.
 Typescript 2.1 and 2.2 are now compatible, improving the speed of the ngc and allowing for better type checking
 Source Maps for templates, giving meaningful context in terms of the original template.
 Related to this topic, the next day (Friday, March 24, 2017) Angular Cli v1.0 was released and among other changes it will by default create an Angular 4.0 project with the ng new new_project command. Besides this change, they also fixed a problem with the AOT and templates, and fixed a lot of minor bugs reported during their RC.
 `,
    image: 'assets/img/angular4.jpg',
    published_at: new Date(2017, 3, 27)
  },
  {
    title: 'New Visa Tech Chile',
    content: `
 The chilean Government announced the launch of a temporary visa for foreign skilled professionals in the tech industry this is an express visa which takes approximately 15 days of processing and is called "Visa Tech".
 "It is aimed at owners, partners and investors of technological service companies located in Chile, professionals or technicians, sciences and technology who come to Chile to work in technological companies and that have been awarded the subsidy of the Start-Up Chile program for Technological services"
 Said the President at the meeting organized by the government agency InvestChile. She also reported the opening of three investment promotion offices during this year in the United States, Germany and Japan.
 "In this way we want to continue making progress so that more companies continue to consider Chile as their starting point in the region, in an alliance in which we all win"
 She said. So it's good news for those people involved in the tech industry who were considering a Spanish speaking country to find a new job and even a new life especially for those who already speak some Spanish which would make the whole process of relocating easier, also for people who are just looking for new adventures and opportunities.
 `,
    image: 'assets/img/chile.jpg',
    published_at: new Date(2017, 3, 27)
  }
];

const comments = [
  {
    content: 'hello this is my first comment',
    published_at: new Date(2016, 11, 7),
    avatar: 'assets/img/matias.jpg'
  },
  {
    content: 'now this is my second comment',
    author: 'Matias Iordache',
    published_at: new Date(2016, 10, 7),
    avatar: 'assets/img/matias.jpg'
  },
  {
    content: 'hey',
    author: 'Matias Iordache',
    published_at: new Date(2016, 10, 7),
    avatar: 'assets/img/matias.jpg'
  },
  {
    content: 'you',
    author: 'Matias Iordache',
    published_at: new Date(2016, 10, 7),
    avatar: 'assets/img/matias.jpg'
  },
  {
    content: 'hey hey',
    author: 'Matias Iordache',
    published_at: new Date(2016, 10, 7),
    avatar: 'assets/img/matias.jpg'
  },
  {
    content: 'what what',
    author: 'Matias Iordache',
    published_at: new Date(2016, 10, 7),
    avatar: 'assets/img/matias.jpg'
  },
  {
    content: 'asdasdasd',
    author: 'Matias Iordache',
    published_at: new Date(2016, 10, 7),
    avatar: 'assets/img/matias.jpg'
  }
];

export const createSeeds = async () => {
  const seedPosts = [];

  const user = await new User({
    name: 'Matias Iordache',
    avatar: 'assets/img/matias.jpg'
  });

  user.save();

  posts.forEach(async post => {
    const seedPost = await new models.Post(Object.assign(post));
    seedPost['author'] = new ObjectID(user.id);
    seedPost.save();
    seedPosts.push(seedPost);
  });

  comments.forEach(async (comment, i) => {
    const seedComment = await new models.Comment(Object.assign(comment));
    seedComment['post'] = new ObjectID(seedPosts[i].id);
    seedComment.save();
  });
};
