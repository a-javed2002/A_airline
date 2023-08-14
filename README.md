# Airline

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## First install bootstrap --> npm install bootstrap --> Add Files From Node_modules/bootstrap/dist/ too Angular.json file

//Let’s create project Module:
## ng g module articles --routing
## ng g module admin
## ng g module middleware
## ng g module staticpages

//Let’s create Articles Modules:
## ng g c articles/article-list
## ng g c articles/article-details
## ng g c articles/latest-articles
## ng g c articles/featured-articles
## ng g c articles/categories

//Let’s create service for article module:
## ng g service articles/articles

//Let’s create Components :
## ng g component header
## ng g component footer
## ng g component banner
## ng g component pagenotfound

//Let’s create components of staticpages module:
## ng g component staticpages/about-us
## ng g component staticpages/contact-us

//Let’s create service for staticpages module
## ng g service staticpages/staticpages

//Step-1: Open app.module.ts
//open your app.module.ts to import articles and static pages module and paste the below code
 
...
import { ArticlesModule } from './articles/articles.module';
  import { StaticpagesModule } from './staticpages/staticpages.module';
 
  imports: [
    ....
    ArticlesModule,
    StaticpagesModule 
  ],

  //Step-2: Open articles/articles.module.ts
open your articles/articles.module.ts to export the LatestArticleComponent component for showing this component on the root component app.component.html

...
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
 
  imports: [
    CommonModule
  ], 
exports:[LatestArticlesComponent]

//Step-3: app.component.html
Create Home page layout structure

<app-header></app-header>
<app-banner></app-banner>
<app-latest-article></app-latest-article>
<app-footer></app-footer>


 
//view on mobile --> ipconfig(get IPv4 Address) --> on mobile browser --> http://<IPv4 Address>:<port number>
//http://192.168.2.109:4200


//important notes
# Authenticate with GitHub using your GitHub account
gh auth login

# Create a new repository
gh repo create <repository-name> --public --confirm


git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<username>/<repository-name>.git
git branch -M main  # Use 'main' or 'master' depending on your project's default branch
git push -u origin main









//
we can run this project on github,i mean live preview,as it's a static project

ChatGPT
Yes, you can definitely host your static Angular project on GitHub Pages and have a live preview of it. Here's how you can set it up:

GitHub Repository Setup:

Make sure you have a GitHub repository for your Angular project.
Build Your Angular Project:

Open your terminal or command prompt.
Navigate to your project directory where the angular.json file is located.
Build your project using the Angular CLI:
bash
Copy code
ng build --prod
This command will create a dist folder containing the production-ready build of your project.
Create a New Branch (Optional):

It's a good practice to create a separate branch, often named gh-pages, to host your GitHub Pages site. If you don't want to create a new branch, you can use the main (or master) branch itself.
Push the Build to GitHub:

If you're using a separate branch, switch to that branch:
bash
Copy code
git checkout -b gh-pages
Add the built files to the staging area and commit them:
bash
Copy code
git add dist/
git commit -m "Add built files for GitHub Pages"
Push the changes to GitHub:
bash
Copy code
git push origin gh-pages
Enable GitHub Pages:

Go to your GitHub repository.
Click on the "Settings" tab.
Scroll down to the "GitHub Pages" section.
In the "Source" dropdown, select the gh-pages branch (or the branch you chose).
Click the "Save" button.
Access Your Live Site:

Once GitHub Pages is set up, your static Angular project will be accessible at a URL like:
php
Copy code
https://<username>.github.io/<repository-name>/
Replace <username> with your GitHub username and <repository-name> with the name of your repository.
Updating Your Site:

Whenever you make changes to your Angular project and want to update the live site, repeat the steps to build your project, commit the changes, and push to the gh-pages branch.
Remember, GitHub Pages is designed for hosting static websites. If your project requires server-side processing, databases, or other backend functionality, you'll need to explore other hosting options.
