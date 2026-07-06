Step 1: Repository Setup
Who does this: One designated team member (The Driver).
Goal: Create the central hub for the project and give everyone access.
Create the Repo: The Owner logs into GitHub and creates a new Private or Public repository (e.g., express-mongo-team-project).
Add Collaborators: Go to the repository Settings tab.
Click Collaborators on the left menu.
Click Add people and invite the other team members using their GitHub usernames or emails.
Accept Invites: The other members must check their email or notifications on GitHub and accept the invitation to join the repository.
Step 2: Initialize the Project & Push to Main
Who does this: The Driver (the one who created the repo).
Goal: Set up a clean, working baseline for the whole team.
Create a project folder on your computer and open it in VS Code.
Initialize the project and install basic dependencies:
npm init -y
npm install express mongoose dotenv
Create a .gitignore file and add node_modules/ and .env to it.
Create a basic index.js file that starts a server (leave the database connection for later).
Connect your local folder to GitHub and push to main:
git init
git add .
git commit -m "Initial commit: basic server setup"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
Step 3: Clone the Project
Who does this: The other team members.
Goal: Get a local copy of the base server.
Open your terminal and navigate to the folder where you want to keep your projects.
Run the clone command using the shared repo URL:
git clone <YOUR_GITHUB_REPO_URL>
Open the newly created folder in VSCode.
Run npm install to download all the project dependencies locally.
Setup your own .env file with a connection string.
Step 4: Create Individual Member Branches
Who does this: Everyone (including the Driver).
Goal: Create a separate branch named after yourself where you can code without breaking main.
Open your terminal inside your project folder.
Ensure you are starting from the fresh main branch:
git checkout main
Create and switch to your personal branch (replace the name with yours):
git checkout -b bob
Push your new branch to GitHub so the cloud knows it exists:
git push -u origin bob
Step 5: File-Based Assignment & CRUD Collaboration
Who does this: Everyone simultaneously, with the Driver managing the integrations.
Goal: Build out the rest of the application by assigning specific files and splitting the controller logic into individual CRUD operations.
To prevent merge conflicts, team members will work exclusively in their assigned files. Because the controller requires the most work, it will be divided by specific CRUD functions.

In this example, a collection called “products” is used. Your team can decide on the actual database and collection to use. It could be a sample database or your own.

The File Assignment
Team Member	Assigned File	Responsibility
Driver	index.js	Main server entry point, middleware registration, and final PR merges.
Member 2	db.js	MongoDB connection logic using Mongoose.
Member 3	models/product.js	Defining the Mongoose Schema for the product data.
Member 4	routes/products.js	Defining the Express routes/endpoints linking to the controller.
Member 5	controllers/products.js	Create the skeleton for now - exported functions with no logic.
The Controller Split (Collaborative File)
The fifth file, controllers/products.js, contains the most logic. To collaborate safely here, make sure the member working on this file finishes creating the skeleton (placeholder functions) and completing the workflow steps below before continuing to work together on this file.

Once the skeleton is pulled by the team, the CRUD operations are split among everyone:

Driver: Create function (createProduct)
Member 2: Read All function (getProducts)
Member 3: Read One function (getProductById)
Member 4: Update function (updateProduct)
Member 5: Delete function (deleteProduct)
The Workflow & Pull Request Process
To ensure the Driver can smoothly manage the incoming code, the team must follow this exact routine when completing their work:

Commit and Push: Once you finish your assigned file or your specific controller function, commit and push it to your personal branch.
git add .
git commit -m "Completed updateProduct controller logic"
git push origin bob
Open a Pull Request (PR): Go to GitHub, navigate to your branch, and click “New pull request”. Set the target branch to main. (Video Resource: Pull Requests)

Review & Merge: The Driver reviews the code changes on GitHub. If everything looks good, the Driver clicks “Merge pull request”.
Syncing the Team: Once a PR is merged into main, every other team member must pull those updates into their own branch so they don’t fall behind:
git checkout main
git pull origin main
git checkout bob
git merge main
If you encounter a “Merge Conflict”, here’s step-by-step process that might help (Video Resource: Merge Conflict)

Step 6: Test & Repeat
Once you’re done, test every endpoint and make sure the application runs properly. It should work on every group member’s computer.

Then… repeat the process. This time with a new collection. For example, if you made a schema, routes, and controller for “products”, do the same for “users” (this would mean three more files).

You’re working with the same database, so it could be another collection that already exists in the database or a brand new collection you make up.

Split the work up as you did before, but this time assign different roles to each member. Use the same workflow.

OPTIONAL: Have a member work on a “views” folder, with a template for showing all products and/or showing a specific product.