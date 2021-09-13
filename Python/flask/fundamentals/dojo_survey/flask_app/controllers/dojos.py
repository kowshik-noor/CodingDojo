from flask_app import app
from flask import render_template, request, redirect, session
from flask_app.models.dojo import Dojo

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit_form():
    if not Dojo.validate_dojo(request.form):
        return redirect('/')
    
    data = {
        'name' : request.form['name'],
        'location' : request.form['location'],
        'language' : request.form['language'],
        'comment' : request.form['comments'],
    }
    id = Dojo.create_dojo(data)
    return redirect(f"/show/{id}")

@app.route('/show/<int:id>')
def show_form(id):
    data = {
        'dojo_id' : id
    }
    dojo = Dojo.show_input(data)
    return render_template('/show.html', dojo=dojo)
