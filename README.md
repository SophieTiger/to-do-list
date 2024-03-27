# Today's To-Do's - the positive feedback app
The Today's To-Do's list is an application for all busy people out there that needs to have an easy way to structure the Today's To-Do's.
Sometimes life brings us so much that we need to do and structure, and most of that is not seen by anyone but ourselves. We accomplish many things without getting credit for it or a pat at the back.

This app gives the user a clear view of the number of tasks, completed tasks, as well as it gives positive feedback every time the user completes a task!

Built to use on the go, on the mobile phone, on a tablet or a computer, the app saves data to local storage so that the user can always trust it's reliability.

![Image of to-do app on different screen sizes](/assets/images/responsive.png)

## Features
-   Header
    -   Featured at the top of the page, the header shows a background image of a desk with Pencils and Notebooks to give a feeling of organization and the purpose of the app.
    -   The header "Today's To-Do's" clearly states what this application is about.
    -   The Scoreboard with Number of tasks and Number of completed tasks shows a count of how many tasks there are on the list and how many tasks that have been completed.
    ![Image of the header with a heading and scorebord](/assets/images/header_to-dos.png)

-   To-Do Input and Delete all button
    -   The input field is pretty self explanatory with a placeholder text "Add task here" and a button with a plus-sign to add a task to the list. 
    -   There is also a Delete-button to clear all tasks on the list.
    ![Image of the input field with an add button for new tasks and a delete button](/assets/images/to-do-input.png)

-   Adding tasks
    -   Task is added by writing something in the input field and then clicking the add-button with the plus sign or pressing the Enter key.
    -   There is also a small x-sign created at the right of the task, that can be used to remove the task from the list.
    -   The input field is cleared as soon as a task is added.

    ![Image of tasks on the list](/assets/images/add_task.png)

    -   The Scoreboard at the top of the page keeps count of the number of tasks on the list.
    ![Image of Scoreboard showing the number of tasks on the list](/assets/images/number_tasks.png)

-   Checking off tasks
    -   A task can be checked off by clicking either the task text or the empty circle to the left of the task text.
    -   When a task is checked off the circle to the left becomes red with a check mark, and the text is striked through and greyed out.

    ![Image of checked off list item](/assets/images/checked_task.png)
    -   The number of completed tasks are incremented on the Scoreboard when tasks are checked.
    ![Image of Scoreboard showing the number of completed tasks on the list](/assets/images/nbr_completed_tasks.png)
    -   Once a task is checked off a toast notification appears with a positive feedback. There are four different messages that appear randomly:
    
        ![Message saying: Good Job!](/assets/images/good_job.png)

        ![Message saying: You're a star!](/assets/images/star.png)

        ![Message saying: Well done!](/assets/images/well_done.png)

        ![Message saying: You Rock!](/assets/images/you_rock.png)

-   Deleting tasks
    -   There are two ways of deleting tasks on the list:

        -   Clicking the x on the right hand side of the task removes that individual task from the list, and the Scoreboard of completed tasks is decremented by 1.

        ![Image of list item and the delete icon](/assets/images/delete_row.png)

        -   Clicking the Delete All button at the bottom to the left of the list deletes all items on the list and sets the Scoreboard to 0.

        ![Image of Delete All button and Scoreboard set to 0](/assets/images/delete_all.png)


-   Ensuring all actions are saved
    -    Functions to save data to local storage and display that data makes sure that the list is always up to date even if the browser is reloaded.

    


### Features left to implement

-   In the future it would be nice to have a library that saves to-do lists and marks them with a date for the user to be able to go back and look at specific dates and the tasks for that day.

## Testing
-   Accessibiliy
    -   I ran the page through Lighthouse and discovered that the SEO score was 91. Read the Content best practices and realized I can score higher by adding meta description.
    After adding the meta data the SEO score went up to 100.

    ![Image of Lighthouse testing score](/assets/images/lighthouse.png) 

-   I tested and confirmed that the page works in different browsers; Chrome, Safari and Firefox.

-   HTML
    -   I ran the code through the [W3C HTML validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fsophietiger.github.io%2Fto-do-list%2F). No errors or warnings.

    ![Image of W3C HTML validator check](/assets/images/html_validator.png)

-   CSS
    -   I ran the code through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsophietiger.github.io%2Fto-do-list%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en). I discovered 2 errors in the styling of the buttons. I fixed that and then no errors found.

    ![Image of W3C CSS validator check](/assets/images/css_validator.png)

-   JavaScript
    -   I ran the code through [JS Hint](https://jshint.com/) and discovered 18 warnings of which 2 were missing semicolons. Fixed that and 16 warnings remains of which I can't do anything about as far as I know. No errors.

    ![Image of JS Hint Metrics](/assets/images/jsHint_validator.png)

-   Feature Testing
    -   I tested that tasks can be added to the list and that Number of tasks at the top of the page are then incremented by 1.
    -   I tested that tasks can be checked off on the list and that Number of completed tasks at the top of the page are then decremented by 1.
    -   I tested that when a task is checked as completed, a random toast notification with positive feedback is shown for 1,5 seconds.
    -   I tested that individual tasks can be deleted by clicking the x-mark to the right of the list item, and that the number of either tasks or completed tasks, at the scoreboard at the top of the page, is then changed according to the list item that was deleted.
    -   I tested that the "Delete All" button is working and deletes all items on the list and sets the Scorecoard to zero on both tasks and completed tasks.
    -   I tested that the local storage of data is working by adding items to the list and then refreshing the page. Items were still there.

## Bugs
-   A bug that I was working with a lot was the problem that it was not possible to remove individual list items from the list after the page was refreshed. I tried a lot of different methods to fix it. After discussion with my mentor we came up with the idea that a new function to attach Event listeners to delete buttons (spans) was needed. 
After creating that, and calling it every time a new task was added to the list and also in the function to display saved data, solved the problem.

-   Local Storage was a challenge to get to save and display data. There was an issue with how to display the initial Scoreboard since then there was no data stored and the key value was then empty. I researched local storage and found the solution by adding if statements to the showTask function. This webpage was of great help [mdn web docs_](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

-   Discovered that blank spaces were accepted in the input box. Searched Stackoverflow and found that a trim method could solve that. Searched [W3Schools](https://www.w3schools.com/jsref/jsref_trim_string.asp) and added it to the addTask function and problem was solved.

### Unfixed bugs
-   There are no unfixed bugs

## Deployment

### Version Control

-   The site was created using Gitpod editor and pushed to Github to the remote repository 'to-do-list'.
-   Git commands were used throughout the development to push the code to the remote repository. The following git commands were used:
    -   git add . - to add the files to the staging area before being committed.
    -   git commit -m "commit message" - to commit changes to the local repository queue that are ready for the final step.
    -   git push - to push all committed code to the remote repository on Github.

### Deployment to Github pages

-   The site was deployed to Github pages as follows:
    -   In the Github repository, I navigated to Settings tab
    -   From the source section drop-down menu, I selected the Master branch and Save
    -   Once the Master branch was selected, the page provided the link to the website
-   The live link: [Today's To-Do's](https://sophietiger.github.io/to-do-list/)


### Cloning of the Repository Code locally

-   Go to the Github repository that you want to clone
-   Click on the Code button located above all the project files
-   Click on HTTPS and copy the repository link
-   Open the IDE of your choice and and paste the copied git url into the IDE terminal
-   The project is now created as a local clone

## Wireframe
-   The Wireframe that I drew as a template is pretty straight forward. It should look almost the same on all screen sizes and have the basic functions of telling the user what it is about, what can be done and that there is a toast message popping up when a task is marked as completed:
    
![Image of the wireframe to-do-list](/assets/images/wireframe.png)

## Credits
-   A special thanks to my Mentor, Spencer Barriball, for the support, help with troubleshooting, and answering all my Questions. He has been a great help on the way!

### Content

-   A big inspiration to start this project is credited @GreatStackDev on Youtube and especially this tutorial: [How To Create To-Do List App Using HTML CSS And JavaScript | Task App In JavaScript](https://www.youtube.com/watch?v=G0jO8kUrg-I)
    -   Most of the html code for the todo-app div, the CSS styling for that, as well as the JavaScript code for adding tasks to the list, and marking them as checked was taken from that tutorial.

-   I took inspiration from the Love Maths project to create the Scoreboard.


### Media

-   The background image in the header was taken from [Pexels](https://www.pexels.com/)
-   The emojis in the toast notifications were taken from [Unicode](https://www.unicode.org/emoji/format.html#col-vendor)
-   The Favicon in the Title of the page was taken from [Favicon](https://favicon.io/)
-   The check mark next to the Completed tasks count was taken from [Font Awesome](https://fontawesome.com/icons)
-   The images for checked and unchecked list items were downloaded from @GreatStackDev's Youtube page.




