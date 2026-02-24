from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "Hello from Toph's Flask Backend!"})

@app.route('/api/stats')
def stats():
    return jsonify({
        "projects": 3,
        "organizations": 5,
        "status": "Ready for tech leadership!"
    })

if __name__ == '__main__':
    app.run(debug=True)