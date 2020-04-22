from flask import Flask, render_template, url_for, g
import sqlite3
app = Flask(__name__)


def get_cs_db():
  db = getattr(g, '_database', None)
  if db is None:
    db = g._database = sqlite3.connect(r"cs_data.db")

    # Try to create table. This will fail if the table already exists.
    column_desc = [
      'id INTEGER',
      'name TEXT',
      'difficulty STRING',
      'type STRING',
      'url TEXT'
    ]
    try:
      db.execute("CREATE TABLE cs_data ({})".format(','.join(column_desc)))
    except sqlite3.OperationalError:
      pass
  return db

@app.teardown_appcontext
def close_connection(exception):
  db = getattr(g, '_database', None)
  if db is not None:
    db.commit()
    db.close()
    
@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html', 
                            title="Home")

@app.route('/info')
def info():
    return render_template('info.html', 
                            title="Info")

@app.route('/projects')
def projects():
    return render_template('projects.html', 
                            title="Projects")

@app.route('/coding_solutions')
def coding_solutions():
    result = get_cs_db().execute('SELECT id,name,difficulty,type FROM cs_data ORDER BY id')
    return render_template('coding_solutions.html', 
                            title="Coding Solutions", 
                            db=result.fetchall())

@app.route('/coding_solutions/<string:question_id>')
def get_question(question_id):
    result = get_cs_db().execute('SELECT id,url FROM cs_data WHERE id=?', (question_id,))
    return render_template('coding_solutions/'+question_id+'.html', 
                            title="Leetcode Problem "+question_id,
                            url=result.fetchall()[0][1])

@app.route('/blog')
def blog():
    return render_template('blog.html', title="Blog")

if __name__ == '__main__':
    app.run(debug=True)
