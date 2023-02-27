# Project-2

## Make Your Angsty BlogPost Dreams Come True

### Example of BlogPost EndGoal

<img width="776" alt="Screen Shot 2022-10-09 at 9 53 55 PM" src="https://user-images.githubusercontent.com/68655342/194790063-98a7281a-c871-42ae-b975-b8e36af00130.png">

## Technologies Used:

- HTML
- CSS
- Express.js
- LiquidJS
- Mongoose
- Bootstrap

### installation:

##### run the following commands in your terminal:

```
npm install
npm install -g nodemon

touch .env (make sure your env file is on the same level as server.js)
touch .gitignore
code .
```

##### in VSCode

add variables for `PORT` `DATABASE_URL` `SECRET` in your `.env` - your `DATABASE_URL` will need to be your local mongo
test by running `npm start` and opening your `localhost:{$PORT}` in your browser

### seed:

```
	const startThemes = [
		{ title:"shades of purple" , backgroundColor:"#251B37" , foregroundColor:"#FFECEF" , textColor:"#372948", image:"https://i.imgur.com/J5MNnff.jpg"},
		{ title:"tropical sunshine" , backgroundColor:"#F48B29" , foregroundColor:"#374316", textColor: "#AC0D0D", image:"https://i.imgur.com/Cfk0Xpr.jpg" },
		{ title:"forrest" , backgroundColor:"#3F4E4F" , foregroundColor:"#809A6F" , textColor:"#00303F", image:"https://i.imgur.com/mfCkfvf.jpg"},
		{ title:"greyscale" , backgroundColor:"#171717" , foregroundColor:"#444444" , textColor:"#FAF3F3", image:"https://i.imgur.com/H0eIy5L.jpg"},
		{ title:"neon", backgroundColor:"#4700D8" , foregroundColor:"#D800A6 ", textColor:"#9900F0", image:"https://i.imgur.com/JvFVvQw.jpg"},
        { title:"angst", backgroundColor:"#151515" , foregroundColor:"#B4A5A5" , textColor:"#301B3F", image:"https://i.imgur.com/cGLSL4z.jpg" },
        { title:"ocean", backgroundColor:"#1A374D" , foregroundColor:"#406882" , textColor:"#D4ECDD", image:"https://i.imgur.com/cQKxgE0.jpg" },
        { title:"floral", backgroundColor:"#98DDCA" , foregroundColor:"#FFAAA7" , textColor:"#184D47", image:"https://i.imgur.com/OvKN0he.jpg"},
        { title:"stormy", backgroundColor:"#334257" , foregroundColor:"#548CA8" , textColor:"#EEEEEE", image:"https://i.imgur.com/mzOyRAk.jpg" },
        { title:"angsty night-time", backgroundColor:"#4C6793" , foregroundColor:"#000000" , textColor:"#c01813", image:"https://i.imgur.com/c5c41nr.jpg" }
	]
```

# as a user,

you will:

```
 -login/sign-up to use this blogPost generator
 -view a forum of already made posts
 -create, read, update, and delete your blog post

  when you create your blog post, you will:
    -be prompted to choose "mood" of your blog post
        -this is a theme, and each will contain font types, border colors, and a corresponding selection of images
    -add the text content of your blog post in a form
    -be able to change theme before posting
```

# WireFrames

Front Page

<img width="977" alt="Screen Shot 2022-10-09 at 5 23 02 PM" src="https://user-images.githubusercontent.com/68655342/194786482-a7efcf56-576e-4af1-8bd7-b307c8852ea2.png">

On click Of "Get Started" user will be prompted to sign-in or sign-up

<img width="295" alt="Screen Shot 2022-10-09 at 5 29 26 PM" src="https://user-images.githubusercontent.com/68655342/194786523-4c8aa1cd-a606-48d4-aa1e-981647c29478.png">

After user sign-in, they will will be presented with a navbar, that will remain on every page the user navigates to

<img width="979" alt="Screen Shot 2022-10-09 at 8 37 06 PM" src="https://user-images.githubusercontent.com/68655342/194786815-f7df6f9a-c61b-4b3d-852b-eed53edc3979.png">

### All Posts:

![Wireframe](https://user-images.githubusercontent.com/68655342/194786855-7f2011e9-9dcb-49d6-b173-0b20b46024e2.jpg)

---

### When user wants to make a new post:

#### moods and photos TBD, these are loose examples

1. Choose mood:
   <img width="456" alt="Screen Shot 2022-10-09 at 7 58 19 PM" src="https://user-images.githubusercontent.com/68655342/194786973-eb655cfd-4d8d-4437-b8ea-86ec90389d6e.png">
   2.Choose background photo:
   <img width="476" alt="Screen Shot 2022-10-09 at 6 48 16 PM" src="https://user-images.githubusercontent.com/68655342/194787093-17438fd8-c879-4a4a-a2c1-db5bd589960c.png">
2. Compose blog post:
   <img width="836" alt="Screen Shot 2022-10-09 at 6 58 04 PM" src="https://user-images.githubusercontent.com/68655342/194787128-db63e347-743f-4537-a0a0-52b4be028cf5.png">
3. View the following navbar under created post:
   <img width="882" alt="Screen Shot 2022-10-09 at 7 26 04 PM" src="https://user-images.githubusercontent.com/68655342/194787165-9f39ead0-b54f-456f-992f-d69b9e1383cd.png">

# E-R-D

 <img width="711" alt="Screen Shot 2022-10-09 at 11 08 50 PM" src="https://user-images.githubusercontent.com/68655342/194794313-81f49a6b-ac4d-49ea-a0cf-c73bf8e53b88.png">

## Project Week Plan

<img width="796" alt="Screen Shot 2022-10-10 at 9 54 41 AM" src="https://user-images.githubusercontent.com/68655342/194883361-8c093515-5b13-4341-a1d9-42c3051ebc45.png">

# REVISIT GOALS
   -find out why mongo error on signup
   -redirect after post create
   -add more photos 
   -retouch user experience- post navbar, comments display 
   -implement "mood" in database 
   
