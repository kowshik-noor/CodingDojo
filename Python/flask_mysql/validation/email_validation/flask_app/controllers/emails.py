from flask_app import app
from flask_app.models.email import Email
from flask import render_template, request, redirect

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/success', methods=['GET', 'POST'])
def success():
    if request.method == 'POST':
        if not Email.validate_email(request.form):
            return redirect('/')

        data = {
            'email': request.form['email']
        }

        Email.create_email(data)

        return redirect('/success')
    else:
        emails = Email.all_emails()
        return render_template('success.html', emails = emails)