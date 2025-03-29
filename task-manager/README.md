

## 🚀 Overview
This is a **Task Management Application** built with **React, Redux, and Material UI**. It allows users to **create, update, delete, and manage tasks** with features like filtering, sorting, drag-and-drop reordering, and local storage persistence.

## 🛠 Tech Stack
- **Frontend:** React, Redux, Material UI (MUI)
- **State Management:** Redux Toolkit
- **UI Components:** MUI, Skeleton UI for loading state
- **Drag & Drop:** `@hello-pangea/dnd`
- **Data Storage:** LocalStorage
- **Build Tool:** Vite

## ✨ Features
✅ **Task CRUD Operations** - Add, Edit, Delete, and Mark tasks as complete.  
✅ **Drag & Drop** - Rearrange tasks using `@hello-pangea/dnd`.  
✅ **Filtering & Sorting** - Filter tasks by status, priority, and date.  
✅ **Persistent Storage** - Saves tasks in localStorage.  
✅ **Responsive Design** - Mobile & desktop-friendly using Material UI.  
✅ **Skeleton UI** - Shows loading placeholders before content loads.  

## 📂 Project Structure
```
📦 task-manager-frontend
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 TaskForm.jsx   # Task input form
 ┃ ┃ ┣ 📜 TaskItem.jsx   # Individual task UI
 ┃ ┃ ┣ 📜 TaskList.jsx   # Task list with drag & drop
 ┃ ┣ 📂 redux
 ┃ ┃ ┣ 📜 store.js       # Redux store
 ┃ ┃ ┣ 📜 taskSlice.js   # Redux reducers and actions
 ┃ ┣ 📜 App.jsx         # Main App Component
 ┃ ┣ 📜 index.js        # Entry file
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 vite.config.js
```

## 📦 Installation & Setup
1️⃣ **Clone the Repository:**
```sh
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

2️⃣ **Install Dependencies:**
```sh
npm install
```

3️⃣ **Run the Development Server:**
```sh
npm run dev
```

4️⃣ **Visit in Browser:**
```
http://localhost:5173
```

## 🏗 Features Breakdown
### 1️⃣ Task Creation & Management
- Implemented in `TaskForm.jsx`
- Uses `useState` for input handling
- Updates Redux store on submit

### 2️⃣ Redux State Management
- **Actions:** `addTask`, `updateTask`, `deleteTask`, `toggleComplete`, `reorderTasks`
- **Reducers:** Defined in `taskSlice.js`
- **Store:** Configured in `store.js`

### 3️⃣ Drag & Drop Support
- Implemented in `TaskList.jsx` using `@hello-pangea/dnd`
- Allows users to reorder tasks dynamically

### 4️⃣ Skeleton UI for Better UX
- Implemented using MUI's `Skeleton` component in `TaskList.jsx`
- Displays placeholders while tasks are loading

## 🚀 Deployment
- Deploy using **Vercel** or **Netlify**
- Example:
```sh
npm run build
vercel deploy  # Or netlify deploy
```

## 🛠 Dependencies
| Package | Version |
|---------|---------|
| React | ^19.0.0 |
| Redux Toolkit | ^1.9.0 |
| Material UI | ^5.13.0 |
| React Beautiful DnD | ^13.1.1 |
| React Router DOM | ^6.12.1 |

## 🎯 Future Improvements
🔹 Add authentication (JWT-based login/logout)  
🔹 Implement a database-backed API (e.g., MongoDB + Express)  
🔹 Add user-specific task lists  

---


















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
