import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const comments = [
      {
        id: 1,
        id_post: 1,
        content: "hello this is my first comment",
        author: "Matias Iordache",
        published_at: new Date(2016, 11, 7),
        avatar: "assets/img/matias.jpg"
      },

      {
        id: 2,
        id_post: 1,
        content: "now this is my second comment",
        author: "Matias Iordache",
        published_at: new Date(2016, 10, 7),
        avatar: "assets/img/matias.jpg"
      }
    ];

    const posts = [
      {
        id: 1,
        title: "Angular CLI",
        content: `
             Angular CLI is a command line interface for Angular based on the <a href='https://https://ember-cli.com/'> Ember CLI </a> project and is still a work in progress which means it's under active development, indeed it's still in beta and new versions bring many new functionalities and you may need to migrate between versions in order to take advantage of the benefits of the new versions (if you have a previous version installed).
             <a href='https://github.com/angular/angular-cli'> Angular CLI </a> makes the whole process of creating a new Angular app a lot faster and easier. It helps you to create a new project just with a single command like ng new-project which creates an application that works out of the box following the best practices and then you just have to serve your new project with ng-serve, the scaffold commands which would help you generate new components with a simple ng generate you can create: routes, pipes, components, and services.
             Then to run your test cases is as simple as ng test, and to deploy in github pages you just have to use the following command ng github-pages:deploy --message 'Optional commit message'. It makes increadibly easy to develop and deploy new applications in this promising new framework supported by Google.
            If you want to see more more about the CLI Mike Brocchi did a <a href='https://www.youtube.com/watch?v=wHZe6gGI5RY'> great talk at ng-conf </a> about CLI capabilities, I highly recommend to watch it, to get a broad overview.`,
        author: "Matias Iordache",
        image: "assets/img/angular-2-cli.png",
        published_at: new Date(2016, 10, 9)
      },
      {
        id: 2,
        title: "Integrating Angular and Visual Studio",
        content: `
             As many developers, I found Visual Studio 2015 to be one of the best Integrated Development Enviroments (IDE) if not the best. It integrates well with TypeScript and in the last versions it's also possible to integrate Angular 2 with Visual Studio 2015. First according to the Angular website itself we should 'Verify that you are running node version 4.6.x or greater, and npm 3.x.x or greater by running node -v and npm -v in a terminal/console window. Older versions produce errors.'.
             Also Visual Studio 2015 Update 3 is the minimum requirement for developing Angular 2 applications, according to the people from Angular earlier versions do not follow the best practices for developing with TypeScript. Also they recommend to install TypeScript 2, VS Update 3 includes it's own version of TypeScript. After all this we can find some template as a Nuget to generate all the boiler plate required to start developing a Angular app (which can be a lot). There's some template projects for example a Sample Angular 2 and Mvc 5 application. (with bootstrap, typescript and service) developed by Microsoft itself`,
        author: "Matias Iordache",
        image: "assets/img/vslogo.jpg",
        published_at: new Date(16, 10, 10)
      },

      {
        id: 3,
        title: "The interesting tech scene in Chile",
        content: `
         As I am currently an expat living in Europe I could not avoid to make comparisons of the current state of the tech industry in different places, and although Chile is not as developed as some other countries in the OECD there is a lot going on right now especially in the tech industry, and that is why AWS recently chose Santiago to open a new office during 2017, among many other tech giants that already have offices there.
         One of the reasons behind this growing market is Start-Up Chile which is a program created by the Chilean Government that seeks to attract early-stage, high-potential entrepreneurs to bootstrap their startups using Chile as a platform to go global. The end goal of this program is to position Chile as the innovation and entrepreneurship hub of Latin America, among others Start-up Chile offers a one year working visa and a soft landing when the person arrives to Chile, Equity free money & Perks, Training, mentors and investors and Community and Networks.
         Chile is held oftentimes as an economic model for the rest of Latin America, is one of the safest countries in the Americas, politically stable and Santiago its capital is a big multicultural city with almost a third of the population and it is where most start-ups are concentrated, although there are some initiatives in the South of the country.
         If you are interested in the chilean tech ecosystem you can find out more about it on this very interesting article published last year by TechCrunch.
         `,
        author: "Matias Iordache",
        image: "assets/img/startup.png",
        published_at: new Date(2017, 1, 26)
      }
    ];

    return { posts, comments };
  }
}
