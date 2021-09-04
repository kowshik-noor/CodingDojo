from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'bruh'

@app.route('/')
def index(): 
    if not 'views' in session:
        session['views'] = 0
    
    session['views'] += 1
    return render_template('index.html', views=session['views'])

@app.route('/destroy_session')
def destroy_session():
    session.clear()
    return redirect('/')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
