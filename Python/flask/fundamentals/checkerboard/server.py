from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', x=8, y=8)

@app.route('/<int:x>')
def  rows(x):
    return render_template('index.html', x=x, y=8)

@app.route('/<int:x>/<int:y>')
def  rows_and_columns(x,y):
    return render_template('index.html', x=x, y=y)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
