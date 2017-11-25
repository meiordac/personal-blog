import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const comments =
            [
                {
                    id_post: 1,
                    content: 'hello this is my first comment',
                    author: 'Matias Iordache',
                    published_at: new Date(2016, 11, 7),
                    avatar: 'assets/img/matias.jpg'

                },

                {
                    id_post: 1,
                    content: 'now this is my second comment',
                    author: 'Matias Iordache',
                    published_at: new Date(2016, 10, 7),
                    avatar: 'assets/img/matias.jpg'

                }];

        const posts = [
            {
                title: 'New Visa Tech Chile',
                content: `
         The chilean Government announced the launch of a temporary visa for foreign skilled professionals in the tech industry this is an express visa which takes approximately 15 days of processing and is called "Visa Tech".
         "It is aimed at owners, partners and investors of technological service companies located in Chile, professionals or technicians, sciences and technology who come to Chile to work in technological companies and that have been awarded the subsidy of the Start-Up Chile program for Technological services"
         Said the President at the meeting organized by the government agency InvestChile. She also reported the opening of three investment promotion offices during this year in the United States, Germany and Japan.
         "In this way we want to continue making progress so that more companies continue to consider Chile as their starting point in the region, in an alliance in which we all win"
         She said. So it's good news for those people involved in the tech industry who were considering a Spanish speaking country to find a new job and even a new life especially for those who already speak some Spanish which would make the whole process of relocating easier, also for people who are just looking for new adventures and opportunities.
         `,
                author: 'Matias Iordache',
                image: 'assets/img/chile.jpg',
                published_at: new Date(2017, 3, 27)
            },



            {
                title: 'The interesting tech scene in Chile',
                content: `
         As I am currently an expat living in Europe I could not avoid to make comparisons of the current state of the tech industry in different places, and although Chile is not as developed as some other countries in the OECD there is a lot going on right now especially in the tech industry, and that is why AWS recently chose Santiago to open a new office during 2017, among many other tech giants that already have offices there.
         One of the reasons behind this growing market is Start-Up Chile which is a program created by the Chilean Government that seeks to attract early-stage, high-potential entrepreneurs to bootstrap their startups using Chile as a platform to go global. The end goal of this program is to position Chile as the innovation and entrepreneurship hub of Latin America, among others Start-up Chile offers a one year working visa and a soft landing when the person arrives to Chile, Equity free money & Perks, Training, mentors and investors and Community and Networks.
         Chile is held oftentimes as an economic model for the rest of Latin America, is one of the safest countries in the Americas, politically stable and Santiago its capital is a big multicultural city with almost a third of the population and it is where most start-ups are concentrated, although there are some initiatives in the South of the country.
         If you are interested in the chilean tech ecosystem you can find out more about it on this very interesting article published last year by TechCrunch.
         `,
                author: 'Matias Iordache',
                image: 'assets/img/startup.png',
                published_at: new Date(2017, 1, 26)
            }

        ];

        return { posts, comments };
    }
}