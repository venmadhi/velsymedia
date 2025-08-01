VERSION CONTROL:

a) Git Commands Used to Initialize and Connect Project:

git init  
git add .  
git commit -m "frontend setup"  
git remote add origin https://github.com/venmadhi/velsymedia.git 
git branch -M main  
git push -u origin main

b) purpose of the .gitignore file:

The .gitignore file is used to tell Git which files or folders to ignore so they don't get tracked or pushed to the repository.

files ignored in my setup:
node_modules/ 
build/ 
.env 
.vscode/ 

FRONTEND DEVELOPMENT:

a) New input fields added & their purpose:

Name – to identify who is sending the query
Email – to contact the user for a reply
Subject – a short title of the issue
Query – detailed message or problem from the user

b) HTML elements used:

<input> – used to get inputs like Name, Email, and Subject
<textarea> – used to get the detailed Query
<form> – wraps all fields for form submission
<button> – to submit the form

c) How CSS improves the form:

--> Adds spacing and alignment for clean layout
--> Styles inputs and button for better look and feel
--> Uses colors and fonts to make it readable and user-friendly
--> Adds hover and focus effects for interaction feedback

d) Possible improvements:

--> It won’t let you send if required fields are empty or email is not correct (validation).
--> Using labels and focus helps people who use keyboards.

