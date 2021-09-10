# import function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
# model a class after the users table in our database
class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # class methods to query our database
    # show all users. the date will be shown in a specific format with no time
    @classmethod
    def all_users(cls):
        query = "SELECT id, first_name, last_name, email, DATE_FORMAT(created_at, '%M %e, %Y') AS created_at, updated_at FROM users;"
        # get the results from our query
        results = connectToMySQL('users_schema').query_db(query)
        # create an empty list where we can append all instances of user
        users = []

        for user in results:
            users.append(cls(user))
        
        return users
    
    @classmethod
    def create_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email) VALUES (%(first_name)s, %(last_name)s, %(email)s);"
        return connectToMySQL('users_schema').query_db(query, data)

    #get the user by id
    @classmethod
    def get_user(cls, data):
        query = "SELECT id, first_name, last_name, email, DATE_FORMAT(created_at, '%M %e, %Y') AS created_at, DATE_FORMAT(updated_at, '%M %e, %Y at %I:%i %p') AS updated_at FROM users WHERE id = " + str(data["user_id"]) + " ;"
        results = connectToMySQL('users_schema').query_db(query)

        return cls(results[0])

    #update the user by its id
    @classmethod
    def update_user(cls, data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, updated_at = NOW() WHERE id = %(user_id)s"
        connectToMySQL('users_schema').query_db(query, data)

    @classmethod
    def delete_user(cls, data):
        query = "DELETE FROM users WHERE id=%(user_id)s"
        connectToMySQL('users_schema').query_db(query,data)
