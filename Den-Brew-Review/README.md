<h1>Denver Brew Review</h1>

<h2>Description</h2>
The Denver-Brew-Review is a project I am personally passionate about, bringing together my love of craft beer and learning new technologies in my advancement in web development. The basis of the project stems from the ability to keep track of, and review breweries in the Denver metro area so that in the future I can be reminded of what I liked or disliked about a particular place. 

With this passion in place, and my eyes firmly planted on my future in web development, I decided to build an application that can enter reviews and mark on a map, places I had visited. This is not only useful in remembering my impressions of local establishments, but also gives me the opportunity to learn new and exciting web technologies that I can leverage into future employment. 

When starting, I wanted to be able to gain inspiration from sources regarding what I could reasonably emulate in a short time frame of 5 days. There are four current sites that I have taken inspiration from to help guide my way in development. Denver-Brew-Review is not meant to emulate these sites. Only to gain inspiration and focus on a desired end of learning new technology in a functional setting.

<h2>Sites used as guides and inspiration:</h2>

Link to [NC Brewery](http://ncbeer.brewerymap.com/)<br>
Link to [Beer Menus App](https://www.beermenus.com/)<br>
Link to [Yelp Denver](https://www.yelp.com/denver)<br>
Link to [Untapped](https://untappd.com/)<br>

<h2>Goals set forth by the instructional staff</h2>

<h3>Technical Requirements</h3>
Your app must:

Be a full-stack application<br>
Consume and/or serve an API<br>
Have an interactive front-end, preferably using a modern front-end framework<br>
Be a complete product, which most likely means multiple relationships and CRUD<br> functionality for at least a couple models<br>
Use a database, whether that's one we've covered in class or one you want to learn<br>
Implement thoughtful user stories that are significant enough to help you know<br> 
which features to build and which to scrap<br>
Have a visually impressive design to kick your portfolio up a notch and have something<br> to wow future clients & employers<br>
Be deployed online so it's publicly accessible<br>

<h3>Necessary Deliverables</h3>

A working API, hosted somewhere on the internet [Google Maps Api](https://angular-maps.com/api-docs/)<br>
A working front-end, hosted somewhere on the internet [Firebase Hosting](https://denverbrewreview.firebaseapp.com/login)<br>
A link to your hosted working app in the URL section of your Github repo [Firebase Hosting](https://denverbrewreview.firebaseapp.com/login)<br>
A git repository hosted on Github, with a link to your hosted project, and frequent <br>
commits dating back to the very beginning of the project [Git Repo](https://github.com/trumpetcoder/Denver-Brew-Review)<br>
A readme.md file with:<br>
An embedded screenshot of the app<br>
Explanations of the technologies used<br>
A couple paragraphs about the general approach you took<br>
Installation instructions for any dependencies<br>
Link to your user stories – who are your users, what do they want, and why?<br>
Link to your wireframes – sketches of major views / interfaces in your application<br>
Descriptions of any unsolved problems or major hurdles you had to overcome<br>

<h3>Ideation and design</h3>

![screen shot 2018-02-27 at 11 39 12 am](https://user-images.githubusercontent.com/29238789/36747697-ee069356-1bb2-11e8-89a2-1c81f0d01be1.png)

Denver-Brew-Review, by design, is a desktop application that a user can use to log reviews of breweries they have visited. It is comprised of a landing page that requires Login/Registration authentication, leading to a reviews forum and links to Google maps. Inside the reviews forum the user can Create, Update, Delete, See, and grab reviews of breweries thay and others have visited. The Google maps allows the User to see the location of breweries in the area. 

The work flow of the project took shape by learning through tutorials that shaped the design and functionality. Initial ideas stem from the abundance of review sites that don't cater to particular niches of industries. The Denver Brew Review is centered on people who love craft beer, enjoy craft beer, and have informed opinions on the breweries, beers, and products. 

Initial conception started with deciding on a new technology I had not worked with before so that I can learn an in demand framework (Angular) combined with the requirements of a functional backend that can be manipulated (Firebase/Firestore). These technologies are not only valuable resources and industry standards, they are technologies in high demand in the market and something I will master going forward. 

I also have incorporated Google maps through the AGM installation so that I can learn the technology and integration of another in demand resource. 

<h3>Who are the users, what do they want, why?</h3>

My user base is centered around beer centric people who enjoy craft beer. It aims to give a platform for these people so that they may share their experiences in a forum that brings together like minded patrons. It provides these users with a trusted forum of reviewers who love craft beer and discuss it passionately. It will initially start with one user but grow as time and the technology of the App progresses. This is just the beginning.      

Below is a link to my Trello buildout of what a User can expect to see and do:
Link to [Trello](https://trello.com/b/F2xmyV18/denver-brew-review)

<h3>Technologies Used</h3>

Firebase Authentication Docs [Firebase](https://firebase.google.com/docs/)<br>
FireStore Databse Docs [Firestore](https://firebase.google.com/docs/firestore/)<br>
Angular 4+ Docs [Angular](https://angular.io/docs)<br>
Angular Google Maps Docs [Google Maps Api](https://angular-maps.com/api-docs/)<br>

<br>
CSS | HTML | Bootstrap | jQuery | Trello | Mockflow | Firebase Deployment
<br>
<br>
Hurdles faced in learning new technologies:
The biggest hurdles I faced when tackling this project centered around learning a new authentication system, database, integration of Google maps, and deployment to a platform I had never used before. 

Communicating with the back end in a different way definitely at times became a problem. I learned a lot about [snapshot](https://firebase.google.com/docs/firestore/query-data/get-data) and how to capture individual id's from the url. Setup and deployment in firebase is well documented and I suggest all those that want to learn the resource to read further from the links or take a turorial. Google maps integration was on the surface an easy integration but the functionality is a fun one to learn. The documentation is not very good and leaves some gaps to fill.

Also the virtues of component driven SPA's is an extremely valuable tool to have in the arsenal. I have gotten definetely more comfortable with the concept, creation, and implementation but realize there is much more to learn.

<h3>Screen Shots of Denver-Brew-Review</h3>

![screen shot 2018-02-27 at 11 43 04 am](https://user-images.githubusercontent.com/29238789/36747953-af0f6078-1bb3-11e8-84f9-884bf1250b71.png)

![screen shot 2018-02-27 at 11 44 07 am](https://user-images.githubusercontent.com/29238789/36748085-0aee6fb0-1bb4-11e8-84ce-439032ed3809.png)

![screen shot 2018-02-27 at 11 44 34 am](https://user-images.githubusercontent.com/29238789/36748101-17df39d4-1bb4-11e8-805a-460e5c3afb20.png)

<h3>Stretch Goals</h3>

Transfer this to Ionic, Angulars mobile platform<br>
Understand Firestore db construction better to try and create more relational data,structures. By Design Firestore is a flexible, scalable NoSQL cloud database to store and sync data for client- and server-side development.<br> 
Be able to drop pins on map as the user sees fit instead of hard coded.<br>
Have reviews accessible through the pins on the map.<br>
Improve design and aesthetic appeal.<br>

<h3>Acknowledgements</h3>
A heartfelt thanks to Zeb, Joe, Tyler, Micah, and Jaycee for all the wisdom, patience, and guidance through this journey. It has been a long road and many times uncomfortable. I have learned a lot about programming, web development, and technology but even more about myself as a learner.<br>

In addition thank you to Remy, Jin, Patrick, Mark, and the entire cohort for their patience,laughter, guidance, and calming demeanors throughout this course. I would not be nearly as far today without the help of everyone. 

Cheers!

Kevin D. James: General Assembly 2018 WDI6 Denver, CO 











<!-- Current End of File! -->