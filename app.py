from flask import Flask, render_template, request, redirect, url_for, flash
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from pymongo import MongoClient
from flask_bcrypt import generate_password_hash, check_password_hash
from bson.objectid import ObjectId  # Import ObjectId for generating unique IDs
from user import User  # Assuming you have a User model

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'  # Set a secret key for your app

login_manager = LoginManager(app)

# Connect to MongoDB
uri = "mongodb+srv://ankurjvm13:3uCK51zzr8cmyZH6@harvestedge.bzohjrl.mongodb.net/?retryWrites=true&w=majority&appName=HarvestEdge"
client = MongoClient(uri)
db = client['HaE']  # Replace 'your_database_name' with the name of your MongoDB database
users_collection = db['users']  # Collection to store user documents

@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)  # Load user from the database

@app.route('/')
def index():
    return render_template('index.html', current_user=current_user)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user_data = users_collection.find_one({'username': username})
        if user_data and check_password_hash(user_data['password'], password):
            user_id = user_data['_id']
            user = User(id=str(user_id), username=username, password=password)
            login_user(user)
            flash('Login successful!', 'success')  # Flash success message
            return redirect(url_for('index'))
        else:
            flash('Invalid username or password', 'error')  # Flash error message
            return render_template('login.html')
    return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        # Check if the username is already taken
        if users_collection.find_one({'username': username}):
            flash('Username already taken', 'error')  # Flash error message
            return render_template('signup.html')
        # Hash the password before storing it in the database (recommended)
        hashed_password = generate_password_hash(password).decode('utf-8')
        # Generate unique ID using ObjectId
        user_id = ObjectId()
        # Create a new user
        new_user = User(id=str(user_id), username=username, password=hashed_password)
        # Add the new user to the database
        users_collection.insert_one(new_user.to_dict())  # Convert User object to dictionary and insert into MongoDB
        flash('Sign up successful! You can now login', 'success')  # Flash success message
        return redirect(url_for('login'))  # Redirect to login page after successful signup
    return render_template('signup.html')

if __name__ == '__main__':
    app.run(debug=True)
