from flask import Flask, render_template
app = Flask(__name__)


@app.route('/play')
def level_one():
    return render_template("index.html", times=3, color='style=background-color:rgb(160,196,248);', level=1)


@app.route('/play/<int:x>')
def level_two(x):
    return render_template("index.html", times=x, color='style=background-color:rgb(160,196,248);', level=2)


@app.route('path')
def func_name(foo):
    return render_template('expression')


@app.route('/play/<int:x>/<string:color>')
def level_three(x, color):
    return render_template("index.html", times=x, color=f'style=background-color:{color};', level=3)


if __name__ == "__main__":
    app.run(debug=True)
