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

If you simply want to access ToDoList please go through this link https://dhruvi2416.github.io/React_ToDoList_Practical-03/ which is hosted on gh-page.

## Steps of hosting on gh-pages:
1. Open your package.json and add a homepage field for your project:

     "homepage": "https://myusername.github.io/my-app",
2.  Install gh-pages and add deploy to scripts in package.json 

      npm install --save gh-pages

3.  Add the following scripts in your package.json:

    "scripts": {
+   **"predeploy": "npm run build",**
+   **"deploy": "gh-pages -d build",**

    "start": "react-scripts start",

    "build": "react-scripts build",

      **Note:** If you want to push it on **master** please wite **"deploy":
 "gh-pages -b master -d build",** 
instead of  **"deploy": "gh-pages -d build",**

4. **npm run deploy**

5. Finally, make sure GitHub Pages option in your GitHub project settings is set to use the **gh-pages** branch:

![image](https://user-images.githubusercontent.com/122339608/229298461-655e0a84-de6e-456e-8b10-0e607fbca00f.png)

6. You can get your link from repo's --> settings --> Pages 


## Screenshot:

![image](https://user-images.githubusercontent.com/122339608/225884909-50d52f30-5690-4e17-807d-5dbd5d6c4e2a.png)

## LocalStorage

![image](https://user-images.githubusercontent.com/122339608/225885243-eb230412-e2e8-42f9-8733-cd17ab8e61e8.png)
