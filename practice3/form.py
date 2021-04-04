from flask_wtf import FlaskForm
from wtforms import StringField, TextField, TextAreaField,SelectField, validators
from flask_wtf.file import FileField, FileRequired
# from werkzeug.utils import secure_filename

from wtforms.validators import DataRequired, InputRequired, Length



class slider_form(FlaskForm):
    basliq = StringField(label='Header', validators=[DataRequired(), Length(min=3, max=100)])
    button1 = StringField(label='Button #1 name', validators=[Length(min=3, max=30)])
    button2 = StringField(label='Button #2 name', validators=[Length(min=3, max=30)])
    description = TextField(label='Description', validators=[DataRequired()])
    photo = FileField(label='bg-image', validators=[FileRequired()])
    photo_b = FileField(label='bg-image', validators=[FileRequired()])
    sel = SelectField(u'Sticky', choices=[('0', 'Normal'),('1', 'Sticky')])
    



class CardForm(FlaskForm):
    card_img = FileField(label='Kartın şəkili: ', validators=[FileRequired()])
    card_name = StringField(label='Kartin adı: ', validators=[DataRequired(), Length(min=3, max=80)])
    card_desc = TextField(label='Kartın tam məzmunu: ', validators=[DataRequired()])
    category = SelectField(label = 'Kateqoriya Secin',coerce=int)


class CategoryForm(FlaskForm):
    title = StringField(label='Kateqoriya adı: ', validators=[DataRequired(), Length(min=3, max=80)])
    


class LoanForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = TextField('description', validators=[DataRequired()])
    img = FileField('image', validators=[FileRequired()])
