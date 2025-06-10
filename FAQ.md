#  FAO - Frequently Asked Questions

This document contains answers to common questions regarding the **BookShelf** project. If your question is not listed here, feel free to open an issue or reach out via pull request or discussions.

---

##  What is BookShelf?

**BookShelf** is a web-based application for managing tasks and projects.  
It was built using React, JSX, and Material UI, and leverages Docker for a consistent development environment.

---

##  Do I need Docker to run this project?

Yes. While it is possible to run it locally without Docker, we recommend using **Docker Desktop** to simplify environment setup and avoid system-specific issues.

---

##  What do I need to install to get started?

You will need:

- Docker / Docker Desktop  
- VSCode (optional, but recommended)
- Recommended extensions:
  - `PulkitGangwar.nextjs-snippets`  
  - `vscodeshift.mui-snippets`  
  - `ms-azuretools.vscode-docker`  
  - `dbaeumer.vscode-eslint`  

---

##  What technologies should I know before contributing?

To contribute effectively, it’s helpful to be familiar with:

- JSX (React)  
- Docker  
- Python (used for API logic integration)  

---

##  How do I run the app locally?

Once you build and start the Docker container, run:

```bash
npm run dev
```

Then open your browser at `http://localhost:3000`.

---

##  What if my code doesn’t work?

Some common problems:

- 🧩 **Missing dependencies:** Did you run `npm install`?
- 🔗 **Wrong file paths:** Double-check imports and filenames.
- 🌐 **Port in use:** Ensure that port 3000 is free.

---

## 🔄 Can I add new features or fix bugs?

Absolutely! We welcome contributions. Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file for detailed instructions and commit message guidelines.

---

##  How should I write commit messages?

Use the following format:

```bash
#123 Issue: (Feat) add dashboard panel for user stats
```

More details are available in contributing.md

---

## 🧪 Are there any tests?

Not yet. This is a planned task in the Future Tasks section.

---

##  Who do I contact for support?

If you have any problems or questions, please:

- Open an [Issue](https://github.com/UliRodGonzZa/bookShelf/issues) in the repository
- Mention your issue with enough context and screenshots if applicable

---

Thank you for being part of the **BookShelf** community! 🙌
