from app import app
from extention import *
import datetime


class slider(db.Model):

    id = db.Column(db.Integer(), primary_key=True)
    basliq = db.Column(db.String(30), nullable=False)
    button1 = db.Column(db.String(30))
    button2 = db.Column(db.String(30))
    description = db.Column(db.Text(), nullable=False)
    photo = db.Column(db.String(150), nullable=False)
    photo_b = db.Column(db.String(150), nullable=False)
    st = db.Column(db.Integer(), nullable=False)
    
                                                                          
    def __repr__(self):
        return self.basliq
    
    def __init__(self, basliq, button1, button2, description, photo, photo_b, st):
        self.basliq = basliq
        self.button1 = button1
        self.button2 = button2
        self.description = description
        self.photo = photo
        self.photo_b = photo_b
        self.st=st
      

    def save(self):
        db.session.add(self)
        db.session.commit()



    

class Card(db.Model):
    id = db.Column(db.Integer(),primary_key = True)
    card_img = db.Column(db.String(255),nullable = False)
    card_name = db.Column(db.String(30), nullable= False)
    card_desc = db.Column(db.Text(),nullable = False)
    category = db.Column(db.Integer, db.ForeignKey('category.id'), nullable = False)


    

    def __init__(self,card_img,card_name,card_desc,category):
        self.card_img = card_img
        self.card_name = card_name
        self.card_desc = card_desc
        self.category = category
       
    def save(self):
        db.session.add(self)
        db.session.commit()



class Category(db.Model):
    id = db.Column(db.Integer(),primary_key = True)
    title = db.Column(db.String(255),nullable = True)


    def __init__(self,title):
        self.title = title
        
       
    def save(self):
        db.session.add(self)
        db.session.commit()

        
class Valyuta(db.Model):
    id = db.Column(db.Integer(),primary_key = True)
    val = db.Column(db.String(25),nullable = False)
    nominal = db.Column(db.Integer,nullable = False)
    name = db.Column(db.String(255),nullable = False)
    value = db.Column(db.Numeric(5,4),nullable = False)
    created_at = db.Column(db.Date, default = datetime.datetime.now())


    def __init__(self,val,nominal,name,value):
        self.val = val
        self.nominal = nominal
        self.name = name
        self.value = value

    def save(self):
        db.session.add(self)
        db.session.commit()



class Loan(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    title = db.Column(db.String(255), nullable=True)
    description = db.Column(db.Text, nullable=True)
    img = db.Column(db.String(255), nullable=True)
   
    def __repr__(self):
        return self.title

    def __init__(self, title, description, img):
        self.title = title
        self.description = description
        self.img = img

    def save(self):
        db.session.add(self)
        db.session.commit()