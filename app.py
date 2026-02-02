from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', title='Home')

@app.route('/work')
def work():
    return render_template('work.html', title='Work')

@app.route('/cricket')
def cricket():
    return render_template('cricket.html', title='Cricket')

@app.route('/quantum')
def quantum():
    return render_template('quantum.html', title='Quantum Computing')

@app.route('/contact')
def contact():
    return render_template('contact.html', title='Contact')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5050, debug=True)
