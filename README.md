# User Management Backend

This is the backend service for the User Management application. It is built with Node.js, Express and Mongodb  handles CRUD operations for user management.

## Features

- **Add User:** Add new users to the system.
- **Edit User:** Update existing user information.
- **Delete User:** Remove users from the system.
- **Retrieve User:** View user details.

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose

## Installation

Follow these steps to set up the backend locally.

### Clone the Repository

```bash
git clone <repository-url>
cd project-folder
npm install
```

### Setup Mongodb locally or  Atlas uri
 - Atlas uri:mongodb+srv://<username>:<password>@<cluster-address>/<dbname>?retryWrites=true&w=majority
 - ***Check:*** .env.example file

### Start
```bash
npm run dev 
```
- You'll see the  port number in console  where server is started 
   - http://localhost:port-number/health-check to see if server started correctly

### API Endpoints
- **GET:** /v1/api/user: Retrieve all users.
- **POST:** /v1/api/user: Add a new user.
- **GET:** /v1/api/user/:id: Retrieve a specific user.
- **PUT:** /v1/api/user/:id: Update a user.
- **DELETE:** /v1/api/user/:id: Delete a user.



### Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.

### License
This project is licensed under the MIT License.
