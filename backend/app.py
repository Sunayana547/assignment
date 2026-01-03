from flask import Flask, request, jsonify
from flask_cors import CORS
from db import get_db_connection

app = Flask(__name__)
CORS(app)

@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()

    name = data["name"]
    email = data["email"]
    message = data["message"]

    if name == "" or email == "" or message == "":
        return jsonify({"error": "All fields are required"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()

    sql = "INSERT INTO contact_messages (name, email, message) VALUES (%s, %s, %s)"
    cursor.execute(sql, (name, email, message))
    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "Message sent successfully"}), 201


if __name__ == "__main__":
    app.run(port=5000, debug=True)
