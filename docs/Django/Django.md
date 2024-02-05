### What is Django?

Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

### Why Django?

Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

### install Django

- this command will install the latest version of Django, and automatically install any required dependencies, including Django itself and the Django REST framework.
- Django can be installed easily using pip within your virtual environment.

```bash
pip install Django
```

### Create a project

- A project is a collection of configuration and apps for a particular website. A project can contain multiple apps. An app can be in multiple projects.
- To create a project, run the following command, where mysite is the name of the project you want to create.

```bash
django-admin startproject mysite
```

### The development server

- Let’s verify your Django project works. Change into the outer mysite directory, if you haven’t already, and run the following commands:
- The development server automatically reloads Python code for each request as needed. You don’t need to restart the server for code changes to take effect. However, some actions like adding files don’t trigger a restart, so you’ll have to restart the server in these cases.

```bash
python manage.py runserver
```
