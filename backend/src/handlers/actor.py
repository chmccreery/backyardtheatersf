from flask import Blueprint
from flask import Flask
from src.models.actor import ActorModel
from flask import jsonify
from src.singletons import db

actor_blueprint = Blueprint("actor", __name__)

@actor_blueprint.route("create/<name>", methods=["POST"])
def get_hello(name: str):
    actor = ActorModel(name=name)
    existing = ActorModel.query.filter(
      ActorModel.name == name
    ).first()
    if existing:
        return jsonify(id = existing.id, name = existing.name)
    db.session.add(actor)
    db.session.commit()
    return jsonify(id = actor.id, name = actor.name)
