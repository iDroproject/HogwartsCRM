from flask import Flask, jsonify, request
import threading
import time
import json
import requests
from data import students
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route("/")
def my_index() :
    return "Hogwarts DataBase"


@app.route("/students")
def student_list() :
    return jsonify({'students' : students})


@app.route("/student/<int:id>", methods=['GET'])
def get_student(id) :
    student = [student for student in students if student['id'] == id]
    return jsonify({'student': student[0]})

@app.route("/remove_student/<int:id>", methods=['DELETE'])
def dele_student(id):
    student = [student for student in students if student['id'] == id]
    if len(student) > 0:
        students.remove(student[0])
        print(students)
    return "Removed Student"


@app.route("/edit_student/<int:id>", methods=['PUT'])
@cross_origin()
def update_student(id):
    print('entering update_student')
    request_data = request.get_json()
    print(id)
    print(request_data)
    student = [student for student in students if student['id'] == id][0]
    student['first_name'] = request_data['first_name']
    student['last_name'] = request_data['last_name']
    print(student)
    return "student been updated"

@app.route("/create_student", methods=['POST'])
@cross_origin()
def new_student():
    request_data = request.get_json()

    try :
        student_id = students[-1]['id'] + 1
    except IndexError:
        student_id = 1

    student = {
        'id': student_id,
        'first_name': request_data['first_name'],
        'last_name': request_data['last_name']
    }
    print(student)
    students.append(student)
    print(students)
    return "created new student"



if __name__ == "__main__" :
    threading.Thread(target=app.run).start()
    time.sleep(0.5)
    response = requests.get('http://127.0.0.1:5000/')
    if response.status_code == 200:
        print('OK')
    else:
        print('Error')