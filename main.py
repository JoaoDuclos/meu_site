from flask import Flask, request, jsonify
from chatbot import initialize_chatbot

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    message = request.json['message']
    response = initialize_chatbot(message)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)