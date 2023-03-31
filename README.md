# ToDoList

When a user clicks on the + button, a text input at the end of the list can be editable, and hide the + button.
Once text input is visible, If the user types and presses enter key, a new item is added to the end of the list.
Once text input is visible, If the user types nothing and presses enter key,it gives an error to enter something.
Once text input is visible, If the user presses the Esc key, it hides the text input and shows back the + button again.
The list is scrollable but the date and time should be sticky at the top of the list.
The list items created on a day is available all the time, for the same day, and do not get remove on reloading. But if the user opens the list the next day, it gets reset with no items. For this, data is set in local storage with condition comparing year,month and date respectively.

## Steps of installation:

1. Copy the link of repo from GitHub desktop.
2. In terminal git clone **repo_link** in your destined route
3. Open the folder wherever you have stored the project in VScode
4. In terminal write command **npm i**. This will include all node_modules in your project which were not allowed to add due to .gitignore file.
5. Now to run the project please write **npm start** or **npm run start**.
6. Now you are good to go.

## Hosting:

If you simply want to access ToDoList please go through this link https://try1-f0dab.web.app/ which is hosted on firebase.

## Steps of hosting on Firebase:

1. Install the Firebase CLI if you haven’t already by running **npm install -g firebase-tools**.
2. Sign up for a Firebase account and create a new project.
3. Run firebase login and login with your previous created Firebase account.

4. Then run the firebase init command from your project’s root.
5. You need to choose the Hosting: Configure and deploy Firebase Hosting sites and choose the Firebase project you created in the previous step.
6. You will need to agree with database.rules.json being created, choose build as the public directory, and also agree to Configure as a single-page app by replying with **y**.

Now, in firebase.json add
"hosting":
...
"headers": [
{"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
]
... 7. Now, after you create a production build with npm run build, you can deploy it by running firebase deploy.

## Screenshot:

![image](https://user-images.githubusercontent.com/122339608/225884909-50d52f30-5690-4e17-807d-5dbd5d6c4e2a.png)

## LocalStorage

![image](https://user-images.githubusercontent.com/122339608/225885243-eb230412-e2e8-42f9-8733-cd17ab8e61e8.png)
