from flask import render_template, request, jsonify, redirect, url_for
# import requests
from models import *
from app import app
from form import *
from werkzeug.utils import secure_filename
# import os
from upload import save_file
from extention import db
import requests
from xml.etree import ElementTree
import xml.etree.ElementTree as ET
import datetime



# from werkzeug.datastructures import CombinedMultiDict

# UPLOAD_FOLDER = '/home/nusrat/Desktop/pro_unibank/unibank-project-etna-tanius-groups/project/back/upload_folder'

# ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}





@app.route("/home")
def home1():

    response = requests.get(f'https://www.cbar.az/currencies/{datetime.datetime.now().strftime("%d.%m.%Y")}.xml', stream=True)
    tree = ElementTree.fromstring(response.content)
    tr = tree[1]
    for i in tr.findall('Valute'):
        if i.get("Code") == "EUR":
            eur=i.find('Value').text
        elif i.get("Code") == "USD":
            usd=i.find('Value').text
        elif i.get("Code") == "RUB":
            rub=i.find('Value').text
        elif i.get("Code") == "GBP":
            gbp=i.find('Value').text
    content=slider.query.all()
    return render_template("home.html", content=content,rub=rub, eur=eur, usd=usd, gbp=gbp, reng=1 )


@app.route("/admin", methods=["GET", "POST"])
def admin():
    form = slider_form()
    rqst = request.form
    # print(rqst['photo'])
    if request.method == 'POST':
        form = slider_form(data=rqst)
        if form.validate_on_submit():
            photo = save_file(form.photo.data)
            photo_b=save_file(form.photo_b.data)
            sl1 = slider(form.basliq.data, form.button1.data, form.button2.data, form.description.data, photo, photo_b, form.sel.data)
            sl1.save()
        # form = PhotoForm(CombinedMultiDict((request.files, request.form)))

        # if form.validate_on_submit():
        #     f=form.photo.data
        #     filename = secure_filename(f.filename)
        #     f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        #     return redirect(url_for('uploaded_file',
        #                             filename=filename))
        # return redirect('/home')

    return render_template("admin.html", form=form)







@app.route('/cards')
def home():
    card = Card.query.all() 
    valyuta = Valyuta.query.all()
    return render_template('kart.html',card=card , valyuta = valyuta, reng=0)

@app.route('/category', methods=['GET', 'POST'])
def category_form():
    form = CategoryForm()
    # print(form)
    if request.method == 'POST' and form.validate:
        print(form)
        title = form.title.data
        category = Category(title)

        category.save()
        # print("hello")
        return redirect('/add')
    return render_template('category.html', form=form)


@app.route('/add', methods=['GET', 'POST'])
def card_form():
    form = CardForm()
    # print(form)
    category = [(c.id, c.title) for c in Category.query.all()]
    form.category.choices = category
    if request.method == 'POST' and form.validate:
        print(form)
        card_name = form.card_name.data
        card_desc=form.card_desc.data
        card_img = save_file(form.card_img.data)
        category = form.category.data
        card = Card(card_img, card_name, card_desc,category)

        card.save()
        # print("hello")
        return redirect('/cards')
    return render_template('card.html', form=form)


@app.route('/calculator')
def calculator_form():
    url = f'https://www.cbar.az/currencies/{datetime.datetime.now().strftime("%d.%m.%Y")}.xml'
    response = requests.get(url, stream = True)
    tree = ET.fromstring(response.content)
    val = tree.findall('ValType')

    db.session.query(Valyuta).delete()
    db.session.commit()

    for i in val:
        name = i.get('Type')
        if name == 'Xarici valyutalar':
            valyuta = i.findall('Valute')
            for j in valyuta:
                name1 = j.get('Code')
                if name1 == "USD" or name1 == "EUR" or name1 == "AZN" or name1 == "RUB" or name1 == "GBP":
                    nominal = j.find("Nominal").text
                    name = j.find("Name").text
                    value = j.find("Value").text
                    currency = Valyuta(name1,nominal,name,value)
                    currency.save()
    return redirect('/cards')





@app.route('/loans')
def loans():
    loans = Loan.query.all()
    return render_template("index.html", loans=loans ,reng=0)

@app.route('/addloan', methods=['GET', 'POST'])
def addloan():
    form = LoanForm()
    if request.method == 'POST' and form.validate:
        title = form.title.data
        description = form.description.data
        img = save_file(form.img.data)

        loans = Loan(title, description, img)
        loans.save()

        return redirect('/loans')
    return render_template('addloan.html', form=form)
