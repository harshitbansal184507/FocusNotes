FocusNotes is a modern note-taking web application designed to help users stay organized and focused. Built using Django for a powerful backend, React for a seamless frontend experience, and Tailwind CSS for a clean, responsive design, FocusNotes allows users to easily create, edit, and delete notes in real time.

With JWT Authentication integrated, every user’s data remains secure and private — ensuring a safe environment to manage ideas, tasks, or personal reminders.

Whether you’re jotting down quick thoughts or managing daily plans, FocusNotes provides a simple yet efficient platform to keep your notes structured and accessible anytime.

File Structure 
```
FocusNotes
├─ Backend
│  ├─ api
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ __init__.py
│  │  │  └─ __pycache__
│  │  │     ├─ 0001_initial.cpython-311.pyc
│  │  │     └─ __init__.cpython-311.pyc
│  │  ├─ models.py
│  │  ├─ serializers.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views.py
│  │  ├─ __init__.py
│  │  └─ __pycache__
│  │     ├─ admin.cpython-311.pyc
│  │     ├─ apps.cpython-311.pyc
│  │     ├─ models.cpython-311.pyc
│  │     ├─ serializers.cpython-311.pyc
│  │     ├─ urls.cpython-311.pyc
│  │     ├─ views.cpython-311.pyc
│  │     └─ __init__.cpython-311.pyc
│  ├─ Backend
│  │  ├─ asgi.py
│  │  ├─ settings.py
│  │  ├─ urls.py
│  │  ├─ wsgi.py
│  │  ├─ __init__.py
│  │  └─ __pycache__
│  │     ├─ settings.cpython-311.pyc
│  │     ├─ urls.cpython-311.pyc
│  │     ├─ wsgi.cpython-311.pyc
│  │     └─ __init__.cpython-311.pyc
│  ├─ build.sh
│  ├─ datadump.json
│  ├─ db.sqlite3
│  ├─ manage.py
│  └─ requirements.txt
├─ frontend
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ api.js
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ Form.jsx
│  │  │  ├─ Header.jsx
│  │  │  ├─ Note.jsx
│  │  │  └─ ProtectedRoute.jsx
│  │  ├─ constants.js
│  │  ├─ main.jsx
│  │  ├─ pages
│  │  │  ├─ Home.jsx
│  │  │  ├─ Login.jsx
│  │  │  ├─ NotFound.jsx
│  │  │  └─ Register.jsx
│  │  ├─ static
│  │  │  └─ logo.png
│  │  └─ styles
│  │     ├─ Form.css
│  │     ├─ Header.css
│  │     └─ Home.css
│  └─ vite.config.js
└─ README.md

```
