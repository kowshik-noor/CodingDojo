# inmport function that will return and instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models import ninja

# model a clas after the dojos table
class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []

    # class methods to query database
    @classmethod
    def all_dojos(cls):
        query = "SELECT * FROM dojos"
        
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)

        dojos = []

        for dojo in results:
            dojos.append(cls(dojo))

        return dojos

    @classmethod
    def create_dojo(cls, data):
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

    @classmethod
    def one_dojo(cls, data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojos_id WHERE dojos.id = %(dojo_id)s;"

        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        
        dojo = cls(results[0])

        for db_row in results:
            ninja_data = {
                'id' : db_row['ninjas.id'],
                'first_name': db_row['first_name'],
                'last_name': db_row['last_name'],
                'age' : db_row['age'],
                'created_at': db_row['ninjas.created_at'],
                'updated_at': db_row['ninjas.updated_at'],
                'dojos_id': db_row['dojos_id']
            }
            dojo.ninjas.append(ninja.Ninja(ninja_data))

        return dojo

