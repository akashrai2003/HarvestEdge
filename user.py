class User:
    def __init__(self, id, username, password, is_active=True):
        self.id = id
        self.username = username
        self.password = password
        self.is_active = is_active

    @staticmethod
    def get(user_id):
        # Retrieve user from the database by user_id
        # For demonstration purposes, returning a hardcoded user
        return User(user_id, 'username', 'password')

    @staticmethod
    def authenticate(username, password):
        # Check if the username and password are valid
        # Authenticate user from the database
        # For demonstration purposes, using hardcoded credentials
        if username == 'demo' and password == 'demo':
            return User(1, username, password)
        return None

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password,
            'is_active': self.is_active  # Include is_active in the dictionary representation
        }
    

    def get_id(self):
        return str(self.id)
