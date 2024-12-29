# Blog Website

A fully-featured blog website that allows users to create, read, update, and delete blog posts. The project is built using modern web development technologies, providing a responsive and user-friendly interface.

## Features

- **User Authentication**: Sign up, login, and manage sessions securely.
- **Create, Read, Update, Delete (CRUD)**: Full CRUD operations for blog posts.
- **Rich Text Editor**: Write and format blog posts with ease.
- **Comment System**: Allow users to comment on blog posts.
- **Search and Filter**: Find blog posts by keywords or categories.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Dark Mode**: Toggle between light and dark themes.
- **Customizable Profiles**: Users can edit their profiles and upload avatars.

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Material-UI/Tailwind CSS**: For styling.
- **React Router**: For navigation.

### Backend
- **Node.js & Express**: For server-side logic.
- **MongoDB**: For database management.
- **Mongoose**: For database modeling.
- **JWT**: For secure authentication.

### Deployment
- **Docker**: For containerization.
- **NGINX**: As a reverse proxy.
- **AWS/Heroku**: For hosting the application.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/blog-website.git
    cd blog-website
    ```

2. Install dependencies for the frontend and backend:
    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

3. Set up the environment variables. Create a `.env` file in the `backend` directory with the following:
    ```env
    PORT=5000
    MONGO_URI=your-mongodb-uri
    JWT_SECRET=your-secret-key
    ```

4. Start the development server:
    ```bash
    # Start backend
    cd backend
    npm start

    # Start frontend
    cd ../frontend
    npm start
    ```

5. Open the application in your browser:
    ```
    http://localhost:3000
    ```
![Screenshot 2024-12-29 143512](https://github.com/user-attachments/assets/5ab16e79-8331-451d-9074-997b8ac842e8)
![Screenshot 2024-12-29 143544](https://github.com/user-attachments/assets/26e7fccb-4ec0-45ed-8a6c-a8f92ec61f01)
![Screenshot 2024-12-29 161724](https://github.com/user-attachments/assets/49a12056-c7c3-48f7-8355-0c3e526722ef)
![Screenshot 2024-12-29 161744](https://github.com/user-attachments/assets/3794d167-ec40-42e7-b82a-182c26c9168f)
![Screenshot 2024-12-29 161758](https://github.com/user-attachments/assets/c11e589e-f6d6-4fff-90ce-a8b00b5d80ab)
![Screenshot 2024-12-29 161815](https://github.com/user-attachments/assets/056a0402-9552-4d8d-9b98-6cdb2549050e)
![Screenshot 2024-12-29 161830](https://github.com/user-attachments/assets/46d20894-db0c-45ef-9c49-e723b46960f3)
![Screenshot 2024-12-29 161852](https://github.com/user-attachments/assets/dba7b479-d062-4867-a643-02419eb24a2a)
![Screenshot 2024-12-29 161912](https://github.com/user-attachments/assets/4377e5fb-6802-4c73-8106-24b7fc304c58)
![Screenshot 2024-12-29 162030](https://github.com/user-attachments/assets/39bd6302-eca3-4668-9b60-c81256ca7efc)
![Screenshot 2024-12-29 162054](https://github.com/user-attachments/assets/4a18b102-2b75-40fa-9676-a0f0e0826af1)
![Screenshot 2024-12-29 162113](https://github.com/user-attachments/assets/613bc90f-44ec-4515-b582-22e15a09dbfd)
![Screenshot 2024-12-29 162128](https://github.com/user-attachments/assets/e518e0dc-6581-4ce3-ac1f-30381b4fb47a)
![Screenshot 2024-12-29 162142](https://github.com/user-attachments/assets/7e0123dc-31cd-4947-86b1-bbbcc6f02914)
![Screenshot 2024-12-29 162156](https://github.com/user-attachments/assets/8764c615-983e-40a7-acc3-4c13a283ca27)
![Screenshot 2024-12-29 162234](https://github.com/user-attachments/assets/7ee3f203-b330-4578-8d0d-2e8a445a5706)
![Screenshot 2024-12-29 162249](https://github.com/user-attachments/assets/a93c3d04-1e56-4197-b08c-36659dc63f7c)
![Screenshot 2024-12-29 162308](https://github.com/user-attachments/assets/d1024f71-9326-43e0-891b-67e01bbc08f1)
![Screenshot 2024-12-29 162327](https://github.com/user-attachments/assets/dd60617a-ebe2-4a7b-9c21-13e9ed782c07)

## Contribution

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.


Happy coding!
