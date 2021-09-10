from flask_app import app
from flask import render_template, request, redirect
from flask_app.models.dojo import Dojo

@app.route('/dojos', methods=['GET', 'POST'])
def create_and_show():
    if request.method == 'POST':
        data = {
            'name': request.form['dojo_name']
        }
        Dojo.create_dojo(data)
        return redirect('/dojos')
    else:
        dojos = Dojo.all_dojos()
        return render_template('dojos.html', dojos = dojos)

@app.route('/dojos/<int:id>')
def show_dojo_and_ninjas(id):
    data = {
        'dojo_id' : id
    }

    dojo = Dojo.one_dojo(data)

    return render_template('show_dojo.html', dojo = dojo)