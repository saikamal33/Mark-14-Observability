from flask import Flask
import datetime

app = Flask(__name__)

@app.route('/')
def home():
    print(f"[PythonApp] Request received at {datetime.datetime.now()}")
    return "Hello from Python app!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3002)

