from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from pymongo import MongoClient
from flask_bcrypt import generate_password_hash, check_password_hash
from bson.objectid import ObjectId
from user import User  # Corrected import

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'

login_manager = LoginManager(app)

# Connect to MongoDB
uri = "mongodb+srv://ankurjvm13:3uCK51zzr8cmyZH6@harvestedge.bzohjrl.mongodb.net/?retryWrites=true&w=majority&appName=HarvestEdge"
client = MongoClient(uri)
db = client['HaE']
users_collection = db['users']

@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)

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
            flash('Login successful!', 'success')
            return redirect(url_for('index'))
        else:
            flash('Invalid username or password', 'error')
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
        if users_collection.find_one({'username': username}):
            flash('Username already taken', 'error')
            return render_template('signup.html')
        hashed_password = generate_password_hash(password).decode('utf-8')
        user_id = ObjectId()
        new_user = User(id=str(user_id), username=username, password=hashed_password)
        users_collection.insert_one(new_user.to_dict())
        flash('Sign up successful! You can now login', 'success')
        return redirect(url_for('login'))
    return render_template('signup.html')

@app.route('/update_location', methods=['POST'])
@login_required
def update_location():
    latitude = request.json.get('latitude')
    longitude = request.json.get('longitude')
    
    if latitude is None or longitude is None:
        return jsonify({'error': 'Latitude or longitude missing'}), 400

    user_id = current_user.id
    users_collection.update_one({'_id': ObjectId(user_id)}, {'$set': {'location': {'latitude': latitude, 'longitude': longitude}}})
    return jsonify({'message': 'Location updated successfully.'}), 200

if __name__ == '__main__':
    app.run(debug=True)
