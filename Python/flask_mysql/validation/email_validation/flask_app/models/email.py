from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask import flash
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Email:
    def __init__(self, data):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @staticmethod
    def validate_email(email_form):
        is_valid = True
        if not EMAIL_REGEX.match(email_form['email']):
            flash("Invalid email address!", 'alert')
            is_valid = False
        
        if is_valid:
            flash(f"The email address you entered ({email_form['email']}) is a VALID email address! Thank you!", 'success')
        return is_valid

    @classmethod
    def create_email(cls, data):
        query = "INSERT INTO emails (email) VALUES (%(email)s);"
        result = connectToMySQL('email_schema').query_db(query, data)
        return result

    @classmethod
    def all_emails(cls):
        query = "SELECT * FROM emails;"
        results = connectToMySQL('email_schema').query_db(query);
        emails = []
        for email in results:
            emails.append(cls(email))

        return emails
