from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route("/api/hello")
def get_hello():
    return jsonify(mystring = "hello")


@app.route("/api/world")
def get_world():
    return jsonify(mystring = "world")

if __name__ == '__main__':
    app.run(host="localhost", port=5010)