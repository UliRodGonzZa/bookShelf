# Task & Project Manager Web App

A web-based application for managing tasks and projects, created to experiment with the Material UI component library and developed using JSX and React.

---

## Installation

To set up the project, we recommend using **Docker** (preferably with Docker Desktop for ease of use) and **Python** (if backend scripts or API integrations are needed).

### Requirements

- Docker / Docker Desktop  
- Node.js (inside the container)  
- Python (optional, depending on use case)  
- VSCode (recommended) with the following extensions:  
  - `PulkitGangwar.nextjs-snippets`  
  - `vscodeshift.mui-snippets`  
  - `ms-azuretools.vscode-docker`  
  - `dbaeumer.vscode-eslint`  

---

## Dependencies

Make sure you have the following main dependencies listed in your `package.json`:

- `react`  
- `react-dom`  
- `@mui/material`  
- `@emotion/react`  
- `@emotion/styled`  
- `@mui/icons-material`  
- `eslint`  
- `next` (if using Next.js)  

Install dependencies by running:

```bash
npm install
```

## Compilation

The app is compiled and run inside a Docker container. Once your container is built, use the following command inside the container:

```bash
npm run dev
```
## Common Issues
- Missing dependencies: Make sure to run npm install if you see module errors.

- Incorrect file linking: Double-check component imports and relative paths.

- Port conflicts: Ensure port 3000 is available on your machine.

## Compilation Screenshot
 ![App Compilation Screenshot](/image.png)




