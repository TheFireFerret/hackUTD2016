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
    # return 'ET phone home. This is the home page, you dingus' 
    return render_template('index.html')

#profile/owner detail page
@app.route('/owner/<user_id>')
def profile_detail(user_id):
    return render_template('owner.html',fbid = user_id)




if __name__ == '__main__':
    #manager.run()
    port= int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)