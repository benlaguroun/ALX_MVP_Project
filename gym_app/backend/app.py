from flask import Flask, jsonify, request
from models import TrainingPlan

app = Flask(__name__)

@app.route('/training-plans', methods=['GET'])
def get_training_plans():
    plans = TrainingPlan.query.all()
    return jsonify([plan.serialize() for plan in plans])

if __name__ == '__main__':
    app.run(debug=True)

