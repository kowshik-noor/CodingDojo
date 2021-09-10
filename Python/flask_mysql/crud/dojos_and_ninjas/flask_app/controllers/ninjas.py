from flask_app import app
from flask import render_template, request, redirect
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja

@app.route('/ninjas', methods = ['GET', 'POST'])
def new_ninja():
    if request.method == 'POST':
        data = {
            'first_name' : request.form['first_name'],
            'last_name' : request.form['last_name'],
            'age' : request.form['age'],
            'dojos_id' : request.form['dojos_id']
        }
        Ninja.create_ninja(data)
        return redirect(f"/dojos/{data['dojos_id']}")
    else:
        dojos = Dojo.all_dojos()
        return render_template('new_ninja.html', dojos=dojos)

