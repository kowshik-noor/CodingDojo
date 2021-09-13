from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # class methods to query the database
    @classmethod
    def create_dojo(cls, data):
        query = "INSERT INTO dojos (name, location, language, comment) VALUES (%(name)s, %(location)s, %(language)s, %(comment)s);"
        return connectToMySQL('dojo_survey_schema').query_db(query, data)

    @classmethod
    def show_input(cls, data):
        query = "SELECT * FROM dojos WHERE id = %(dojo_id)s;"
        results = connectToMySQL('dojo_survey_schema').query_db(query, data)

        return cls(results[0])

    @staticmethod
    def validate_dojo(dojo):
        is_valid = True
        if not dojo['name']:
            flash("Name is required.")
            is_valid = False
        if not dojo['location']:
            flash("Dojo Location is required.")
            is_valid = False
        if not dojo['language']:
            flash("Favorite Language is required.")
            is_valid = False
        if not dojo['comments']:
            flash("Please insert a comment.")
            is_valid = False

        return is_valid
