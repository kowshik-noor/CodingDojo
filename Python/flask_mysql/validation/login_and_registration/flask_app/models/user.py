from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validate_registration(register):
        # register is referring to the registration form
        is_valid = True
        if len(register['first_name']) < 2:
            flash("First name must be at least 2 characters.", 'register')
            is_valid = False
        if len(register['last_name']) < 2:
            flash("Last name must be at least 2 characters.", 'register')
            is_valid = False
        if not register['first_name'].isalpha():
            flash("First name must only contain letters.", 'register')
            is_valid = False
        if not register['last_name'].isalpha():
            flash("Last name must only contain letters.", 'register')
            is_valid = False
        if not EMAIL_REGEX.match(register['email']):
            flash("Invalid email address.", 'register')
            is_valid = False

        # query the database to find a similar email address
        data = {
            'email': register['email']
        }
        query = "SELECT email FROM users WHERE email=%(email)s;"
        results = connectToMySQL('users_schema').query_db(query, data)

        if len(results) > 0:
            flash("Email is already in use.", 'register')
            is_valid = False
        
        if len(register['password']) < 8:
            flash("Password must be at least 8 characters.", 'register')
            is_valid = False
        if register['confirm_password'] != register['password']:
            flash("Passwords must match.", 'register')
            is_valid = False

        return is_valid

    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL('users_schema').query_db(query, data)
        if(len(result) < 1):
            return False

        return cls(result[0])


    @classmethod
    def create_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        return connectToMySQL('users_schema').query_db(query, data)

    @classmethod
    def show_user(cls, data):
        query = "SELECT * FROM users WHERE id = %(user_id)s;"
        results = connectToMySQL('users_schema').query_db(query,data)
        return cls(results[0])


