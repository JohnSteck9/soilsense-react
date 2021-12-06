import json
import awsgi
import boto3
import os
import ast
from flask_cors import CORS
from flask import Flask, jsonify, request
from uuid import uuid4

os.environ['AWS_DEFAULT_REGION'] = 'us-east-1'
client = boto3.client("dynamodb")
TABLE = os.environ.get("STORAGE_SOILSENSEDB_NAME")
BASE_ROUTE = "/items"
app = Flask(__name__)
CORS(app)


@app.route(BASE_ROUTE, methods=['GET'])
def get_all_items():
    return jsonify(data=client.scan(TableName=TABLE))


@app.route(BASE_ROUTE + '/<id>', methods=['GET'])
def get_item_by_id(id):
    item = client.get_item(TableName=TABLE, Key={'id': {'S': id}})
    return jsonify(data=item)


@app.route(BASE_ROUTE, methods=['POST'])
def create_item():
    request_json = request.get_json()
    print(request.get_json().get("id"))
    client.put_item(TableName=TABLE, Item={
        'id': {'S': str(uuid4())},
        'max_water': {'S': request_json.get("max_water")},
        'humidity_pct': {'S': request_json.get("humidity_pct")},
        'lighting_pct': {'S': request_json.get("lighting_pct")},
        'pumps': {'S': request_json.get("pumps")},
        'sensor_location': {'S': request_json.get("sensor_location")},
        'nozzles_location': {'S': request_json.get("nozzles_location")}
    })
    return jsonify(message="item created")


@app.route(BASE_ROUTE + '/<id>', methods=['PUT'])
def update_item(id):
    client.update_item(
        TableName=TABLE,
        Key={'id': {'S': id}},
        UpdateExpression='SET #max_water = :max_water, #humidity_pct = :humidity_pct, #lighting_pct = :lighting_pct, #pumps = :pumps, #sensor_location = :sensor_location, #nozzles_location = :nozzles_location',
        ExpressionAttributeNames={
            '#max_water': 'max_water',
            '#humidity_pct': 'humidity_pct',
            '#lighting_pct': 'lighting_pct',
            '#pumps': 'pumps',
            '#sensor_location': 'sensor_location',
            '#nozzles_location': 'nozzles_location'
        },
        ExpressionAttributeValues={
            ':max_water': {'S': request.json['max_water']},
            ':humidity_pct': {'S': request.json['humidity_pct']},
            ':lighting_pct': {'S': request.json['lighting_pct']},
            ':pumps': {'S': request.json['pumps']},
            ':sensor_location': {'S': request.json['sensor_location']},
            ':nozzles_location': {'S': request.json['nozzles_location']},
        }
    )
    return jsonify(message='item updated')



@app.route(BASE_ROUTE + '/<id>', methods=['DELETE'])
def delete_item_by_id(id):
    request_json = request.get_json()
    print(request.get_json().get("user_name"))
    client.delete_item(TableName=TABLE, Key={'id': {'S': id}})
    return jsonify(message=f"item deleted - {id}")



def handler(event, context):
    return awsgi.response(app, event, context)
