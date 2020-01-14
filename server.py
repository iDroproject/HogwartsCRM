from flask import Flask, jsonify
import threading
import time
import json
import requests
from data import students
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



@app.route("/")
def my_index():
    return "Hogwarts DataBase"


@app.route("/students")
def student_list():
    return jsonify({'students': students})


@app.route("/students/<int:id>", methods=['GET'])
def get_student(id):
    student = [student for student in students if student['id'] == id]
    return jsonify({'student': student[0]})


if __name__ == "__main__":
    threading.Thread(target=app.run).start()
    time.sleep(0.5)
    response = requests.get('http://127.0.0.1:5000/')
    if response.status_code == 200:
        print('OK')
    else:
        print('Error')
