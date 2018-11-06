#!/usr/bin/python3
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Resource, Api
import json
import pysolr

app = Flask(__name__)
app.config['CORS_HEADERS'] = "Content-Type"
app.config['CORS_RESOURCES'] = {r"/*": {"origins": "*"}}
CORS(app)

solr = pysolr.Solr('http://172.18.18.4:8983/solr/companies/')

@app.route("/search/<business_name>")
def autocompleteName(business_name):
    obj = []
    for result in solr.search("id:*"+business_name+"*"):
        obj.append(result)
    return jsonify(obj)

# TODO Relevance Feedback here!

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
