from flask_app import app
from flask import render_template, request, redirect
from flask_app.models.user import User


@app.route('/users', methods=['GET'])
def users():
    users = User.all_users()
    for user in users:
        print(user)
    return render_template('index.html', users=users)


@app.route('/users/<int:id>', methods=['GET'])
def create_show_user(id):
    data = {
        "user_id": id
    }
    user = User.get_user(data)
    return render_template('show.html', user=user)


@app.route('/users/<int:id>/edit', methods = ['GET', 'POST'])
def edit_user(id):
    if request.method == 'POST':
        data = {
            'user_id' : id,
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email']
        }
        User.update_user(data)
        return redirect(f"/users/{id}")
    else:
        data = {
        "user_id": id
        }
        user = User.get_user(data)
        return render_template('edit.html', user=user)

@app.route('/users/<int:id>/delete')
def delete_user(id):
    data = {
        'user_id' : id
    }
    User.delete_user(data)
    return redirect('/users')



@app.route('/users/new', methods = ['GET', 'POST'])
def new_user():
    if request.method == 'POST':
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email']
        }
        id = User.create_user(data)
        return redirect(f"/users/{id}")
    else:
        return render_template('create.html')
