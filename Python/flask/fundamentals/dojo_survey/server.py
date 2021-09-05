from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'dude'


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['GET', 'POST'])
def submit_and_show_form():
    if request.method == 'POST':
        session['name'] = request.form['name']
        session['location'] = request.form['location']
        session['language'] = request.form['language']
        session['comments'] = request.form['comments']
        
        return redirect('/result')
    else:
        return render_template('show.html', name=session['name'], location=session['location'], language=session['language'],comments=session['comments'])

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
