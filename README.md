# Bible App

A simple application for reading and exploring the Bible.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 22.14.0
- [pnpm](https://pnpm.io/) >= 10.6.0
- Git LFS (for large files)

## Getting Started

This repository uses Git Large File Storage (LFS) to manage large files. If you're using Ubuntu, follow these steps:

### Installing Git LFS

```bash
# Update package lists
sudo apt update

# Install Git LFS
sudo apt install git-lfs

# Set up Git LFS for your user account
git lfs install
```

### Cloning the Repository

```bash
# Clone the repository
git clone https://github.com/titanic-team/bible-app.git

# Navigate to the repository
cd bible-app

# Pull LFS files
git lfs pull
```

### Verifying LFS Files

```bash
# List all files tracked by Git LFS
git lfs ls-files
```

### Installing Dependencies

```bash
# Install dependencies
pnpm i
```

### Running the Application

```bash
# Start the development server
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).
