from flask_app import app
from flask import render_template, request, redirect
from flask_app.models.user import User


@app.route('/users', methods=['GET','POST'])
def users():
    if request.method == 'POST':
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
        }
        User.create_user(data)
        return redirect('/users')
    else:
        users = User.all_users()
        return render_template('show.html', users=users)


@app.route('/users/new')
def new_user():
    return render_template('create.html')
