from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route("/api/hello")
def hello_world():
    return jsonify(mystring = "hello, world")

if __name__ == '__main__':
    app.run(host="localhost", port=5010)