"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os, json, string, secrets
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Post
from api.utils import generate_sitemap, APIException

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)




#Routes

#Login
@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Query your database for username and password
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.email)
    return jsonify({ "token": access_token, "user_id": user.id })



@api.route('/register', methods=['POST'])
def handle_register():
    request_body_user=request.data
    
    decoded_object = json.loads(request_body_user)
    return jsonify(User.add_user(decoded_object)), 200

@api.route('/servicios', methods=['GET'])
def get_service():
   
  return jsonify(Post.getAllservices()), 200

@api.route('/users', methods=['GET'])
def handle_allUsers():
    print("estos son los usuarios")
    return jsonify(User.getAllusers()), 200

@api.route('/publicar', methods=['POST'])
@jwt_required()
def publish_service():

    current_user_email=get_jwt_identity()
    user=User.query.filter_by(email=current_user_email).first()

    request_body_data=request.data
    decoded_publication = json.loads(request_body_data)

    print(user.id, decoded_publication)

    return jsonify(Post.newService(decoded_publication, user.id)), 200

# Passoword recovery route is implemented using sendgrid API with sendgrid dependencies installed
@api.route('/recovery', methods=['PUT'])
def password_reset():
    email = request.json.get("email", None)
    password = ''.join((secrets.choice(string.ascii_letters + string.digits) for i in range(9)))
    message = Mail(
    from_email='mailer@ismeta.net',
    to_emails=email,
    subject='Cambio de contraseña solicitado',
    html_content=f'Hola, ya puedes loguearte con tu nueva contraseña: <strong>{password}</strong>')

    user = User.query.filter_by(email=email).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Password reset link was sent to registered email ; )"}), 200
    
    # actual password reset
    user.password = password
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e.message)
    return jsonify(User.change_password(user)), 200

@api.route("/perfil", methods=["GET"])
@jwt_required()
def getUserInfo():
    current_user_email = get_jwt_identity()
    user=User.query.filter_by(email=current_user_email).first()
    return jsonify(
        name = user.name, lastname = user.lastname, cedula = user.cedula, phone = user.phone, description= user.description, email = user.email, uid = user.id), 200

@api.route("/perfiledicion", methods=["GET"])
@jwt_required()
def getUserEditInfo():
    current_user_email = get_jwt_identity()
    user=User.query.filter_by(email=current_user_email).first()
    return jsonify(
        name = user.name, lastname = user.lastname, cedula = user.cedula, phone = user.phone, description= user.description, email = user.email), 200

@api.route("/perfiledicion", methods=["DELETE"])
@jwt_required()
def delete_user():
    current_user_email = get_jwt_identity()
    user=User.query.filter_by(email=current_user_email).first()
    db.session.delete(user)
    db.session.commit()
    
    return jsonify({ "msg": "User deleted successfully!!" })

@api.route("/perfiledicion", methods=["PUT"])
@jwt_required()
def update_user():
    current_user_email = get_jwt_identity()
    old_user=User.query.filter_by(email=current_user_email).first()
    new_user=request.data
    new_user = json.loads(new_user)
    db.session.delete(old_user)
    db.session.commit()
    return jsonify(User.add_user(new_user)), 200
