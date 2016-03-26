import logging
import os

from flask import Flask, render_template, request, redirect, url_for
#from flask.ext.script import Manager
#from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
#manager = Manager(app)


#Splash/Home page
@app.route('/')
@app.route('/home')
def home_page():
    return 'This is the home page' 

#city detail page
@app.route('/cities')
def cities():
    return 'This is a test for cities' 

#city detail page
@app.route('/cities/<int:city_id>')
def city_detail(city_id):
    city_pages = ['LA', 'barcelona', 'prague']
    return render_template(city_pages[city_id] + '.html')

if __name__ == '__main__':
    #manager.run()
    app.run(host='0.0.0.0', port=8080)
