from src.singletons import app
from flask import jsonify
from src.handlers.actor import actor_blueprint

if __name__ == '__main__':
    app.register_blueprint(actor_blueprint, url_prefix="/actor")

    app.run(host="localhost", port=5010)