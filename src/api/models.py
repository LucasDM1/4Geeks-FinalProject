from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, jsonify, url_for

db = SQLAlchemy()
class Provincia(enum.Enum):
    San_Jose=1
    Alajuela=2
    Cartago=3
    Heredia=4
    Guanacaste=5
    Puntarenas=6
    Limon=7




class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    lastname = db.Column(db.String(120), nullable=False)
    cedula = db.Column(db.Integer, nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    description= db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    #is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            "last":self.lastname,
            "phone":self.phone, 
            "cedula":self.cedula,
            "description":self.de
            # do not serialize the password, its a security breach
        }

class Publication(db.Model):
    id_publi = db.Column(db.Integer, primary_key=True)
    url = Column(String(250), nullable=False)
    PublicationName = Column(String(250), nullable=False)
    schedule = Column(String(250), nullable=False)
    Pricerange = Column(String(250), nullable=False)
    descrition_service= Column(String(250), nullable=False)
    provincia = Column(Enum(Provincia)) 
    



    
    def __repr__(self):
        return '<Publication %r>' % self.name