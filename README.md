# Express + MongoDB Team Project

A collaborative team workflow for building a RESTful Express + MongoDB API using Git branches, file-based task assignment, and pull requests. This guide walks a team through setting up a shared repo, splitting CRUD work without merge conflicts, and integrating everyone's code cleanly into `main`.

---

## Table of Contents

- [Roles](#roles)
- [Step 1: Repository Setup](#step-1-repository-setup)
- [Step 2: Initialize the Project & Push to Main](#step-2-initialize-the-project--push-to-main)
- [Step 3: Clone the Project](#step-3-clone-the-project)
- [Step 4: Create Individual Member Branches](#step-4-create-individual-member-branches)
- [Step 5: File-Based Assignment & CRUD Collaboration](#step-5-file-based-assignment--crud-collaboration)
- [Step 6: Test & Repeat](#step-6-test--repeat)

---

## Roles

| Role | Who | Responsibility |
|------|-----|----------------|
| **Driver** | One designated member | Creates the repo, manages integrations, reviews and merges all pull requests |
| **Members** | Everyone else | Clone the repo, work in assigned files/functions, open PRs for review |

---

## Step 1: Repository Setup

> **Who:** The Driver only
> **Goal:** Create the central hub for the project and give everyone access.

1. **Create the repo** — the Driver logs into GitHub and creates a new **Private** or **Public** repository (e.g. `express-mongo-team-project`)
2. **Add collaborators:**
   - Go to the repository's **Settings** tab
   - Click **Collaborators** in the left menu
   - Click **Add people** and invite teammates by GitHub username or email
3. **Accept invites** — each member checks their email or GitHub notifications and accepts the invitation

---

## Step 2: Initialize the Project & Push to Main

> **Who:** The Driver
> **Goal:** Set up a clean, working baseline for the whole team.

Create a project folder, open it in VS Code, and initialize:

```bash
npm init -y
npm install express mongoose dotenv
```

Create a `.gitignore` file and add the following so secrets and dependencies aren't committed:

```
node_modules/
.env
```

Create a basic `index.js` that starts a server (leave the database connection for later), then connect the local folder to GitHub and push:

```bash
git init
git add .
git commit -m "Initial commit: basic server setup"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

---

## Step 3: Clone the Project

> **Who:** The other team members
> **Goal:** Get a local copy of the base server.

```bash
# Navigate to where you keep your projects, then:
git clone <YOUR_GITHUB_REPO_URL>
```

Then:
1. Open the newly created folder in VS Code
2. Run `npm install` to download dependencies locally
3. Set up your own `.env` file with a connection string

---

## Step 4: Create Individual Member Branches

> **Who:** Everyone (including the Driver)
> **Goal:** Create a personal branch where you can code without breaking `main`.

```bash
# Start from a fresh main branch
git checkout main

# Create and switch to your personal branch (use your own name)
git checkout -b bob

# Push it so GitHub knows the branch exists
git push -u origin bob
```

---

## Step 5: File-Based Assignment & CRUD Collaboration

> **Who:** Everyone simultaneously, with the Driver managing integrations
> **Goal:** Build the app by assigning specific files and splitting controller logic into individual CRUD operations.

To prevent merge conflicts, **each member works exclusively in their assigned file.** Because the controller holds the most logic, it is divided by CRUD function.

> This example uses a `products` collection. Your team can use any database and collection — a sample dataset or your own.

### File Assignment

| Team Member | Assigned File | Responsibility |
|-------------|---------------|----------------|
| **Driver** | `index.js` | Main server entry point, middleware registration, final PR merges |
| **Member 2** | `db.js` | MongoDB connection logic using Mongoose |
| **Member 3** | `models/product.js` | Defining the Mongoose Schema for product data |
| **Member 4** | `routes/products.js` | Defining Express routes/endpoints linking to the controller |
| **Member 5** | `controllers/products.js` | Create the skeleton — exported functions with no logic (for now) |

### The Controller Split

`controllers/products.js` contains the most logic. To collaborate safely, **Member 5 must finish the skeleton (placeholder functions) and complete the workflow steps below before the team continues working in this file together.**

Once the skeleton is pulled by the team, the CRUD operations are split:

| Member | Function |
|--------|----------|
| **Driver** | Create — `createProduct` |
| **Member 2** | Read All — `getProducts` |
| **Member 3** | Read One — `getProductById` |
| **Member 4** | Update — `updateProduct` |
| **Member 5** | Delete — `deleteProduct` |

### The Workflow & Pull Request Process

Follow this exact routine so the Driver can smoothly manage incoming code:

**1. Commit and push** to your personal branch once your file or function is done:

```bash
git add .
git commit -m "Completed updateProduct controller logic"
git push origin bob
```

**2. Open a Pull Request** — on GitHub, navigate to your branch, click **New pull request**, and set the target branch to `main`.

**3. Review & Merge** — the Driver reviews the changes on GitHub and clicks **Merge pull request** if everything looks good.

**4. Sync the team** — after each merge into `main`, every other member pulls the updates into their own branch so no one falls behind:

```bash
git checkout main
git pull origin main
git checkout bob
git merge main
```

> **Merge conflict?** Don't panic — resolve the conflicting sections, then commit the merge. (A merge conflict just means Git needs you to decide which changes to keep.)

---

## Step 6: Test & Repeat

Once everyone's work is merged:

1. **Test every endpoint** and make sure the application runs properly on **every** team member's computer
2. **Repeat the process with a new collection** — if you built a schema, routes, and controller for `products`, do the same for `users` (three more files)
   - Use the same database — either a collection that already exists or a brand new one
   - Split the work as before, but **assign different roles** to each member this time
   - Follow the same branch → PR → sync workflow

> **Optional:** Have a member build a `views/` folder with a template for showing all products and/or a specific product.
