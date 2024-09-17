# MERN Stack Form Submission with Image Upload

This project is a simple MERN (MongoDB, Express, React, Node.js) application that allows users to submit their name, social media handle, and upload multiple images. Admins can view all user submissions and their uploaded images via an admin dashboard.

## Features

- **User Form Submission**: Users can submit their name, social media handle, and upload multiple images.
- **Image Upload**: Uploaded images are saved to the server's file system and paths are stored in MongoDB.
- **Admin Dashboard**: Admins can view all user submissions and display uploaded images.
- **Backend API**: Provides endpoints for form submission and retrieving submissions.

## Technologies Used

- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js, Multer for file uploads, Mongoose for MongoDB interaction
- **Database**: MongoDB Atlas (or local MongoDB)
- **File Uploads**: Multer (for handling `multipart/form-data`)

## Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

- Node.js (v14+)
- MongoDB (Atlas or locally hosted)
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Shreyask24/Social-Media-App.git
   cd Social_Media-App
