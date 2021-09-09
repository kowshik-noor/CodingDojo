from flask import Flask, render_template, request, redirect
# import the class from friend.py
from friend import Friend
app = Flask(__name__)


@app.route('/')
def index():
    # call the get all classmethod to get all friends
    friends = Friend.get_all()
    print(friends)
    return render_template('index.html', friends = friends)

@app.route('/create_friend', methods=['POST'])
def create_friend():
    # create a dictionary full of data from our request.form
    data = {
        'fname' : request.form['fname'],
        'lname' : request.form['lname'],
        'occ': request.form['occ']
    }
    # pass data dictionary into save method from Friend class
    Friend.save(data)
    # redirect after saving to the database
    return redirect('/')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
