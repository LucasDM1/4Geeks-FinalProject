from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, jsonify, url_for


db = SQLAlchemy()

class User(db.Model):
    __tablename__='user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    lastname = db.Column(db.String(120), nullable=False)
    cedula = db.Column(db.Integer, nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    description= db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    #is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    post = db.relationship("Post", lazy=True)
    comments = db.relationship("Comments", lazy=True)

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            "lastname":self.lastname,
            "phone":self.phone, 
            "cedula":self.cedula,
            "description":self.description,
            "posts": list(map(lambda x: x.serialize(), self.post)),
            "comments": list(map(lambda x: x.serialize(), self.comments))
            # do not serialize the password, its a security breach 
        }
        
    def getAllusers():
        users_query = User.query.all()
        all_users = list(map(lambda x: x.serialize(), users_query))
        return(all_users)

    def add_user(request_body_user):
        user = User(name=request_body_user["name"], lastname=request_body_user["lastname"], cedula=request_body_user["cedula"], phone=request_body_user["phone"], email=request_body_user["email"], password=request_body_user["password"])
        db.session.add(user)
        db.session.commit()
        return("The user has been created")


class Post(db.Model):
    __tablename__='post'
    id= db.Column(db.Integer, primary_key=True)
    image_url =  db.Column( db.String(250), nullable=False)#hay que ver como se resive en el back
    post_name =  db.Column(db.String(250), nullable=False)
    schedule =  db.Column( db.String(250), nullable=False)#hay que ver como se resive en el back(unir diferentes variables y mandarlas como un string)
    price_range =  db.Column( db.String(250), nullable=False)#(unir diferentes variables y mandarlas como un string)
    descrition_service=  db.Column( db.String(250), nullable=False)
    provincia =  db.Column( db.String(250), nullable=False)#valores posibles definidos en el front
    category = db.Column( db.String(250), nullable=False)#valores posibles definidos en el front
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    comments = db.relationship("Comments", lazy=True)

    def __repr__(self):
        return '<Post %r>' % self.post_name
    
    def serialize(self):
        return {
            "id": self.id_publi,
            "image":self.image_url,
            "name":self.post_name,
            "schedule":self.schedule,
            "price_range":self.price_range,
            "description":self.descrition_service,
            "user_id" : self.user_id,
            "comments": list(map(lambda x: x.serialize(), self.comments))
            # do not serialize the password, its a security breach
        }
    
    def getAllservices():
        users_query = Post.query.all()
        all_users = list(map(lambda x: x.serialize(), users_query))
        return(all_users)


class Comments (db.Model):
    id_coment=db.Column(db.Integer, primary_key=True)
    comment_content=  db.Column( db.String(250), nullable=False)
    rate = db.Column(db.Integer, nullable=False)#valores posibles definidos en el front
    post_id = db.Column(db.Integer, db.ForeignKey("post.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

    def __repr__(self):
        return '<Comment %r>' % self.id_coment

    def serialize(self): 
        return{
            "id":self.id,
            "comment":self.comment_content,
            "rate":self.rate
        }
