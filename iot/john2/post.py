import requests
import json
import time
from random import randint


url = 'https://k796h3oyyh.execute-api.us-east-1.amazonaws.com/dev/items'

headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

while True:
    myobj = {
        "max_water": str(randint(0,100)),
        "humidity_pct": str(randint(0,100)),
        "lighting_pct": str(randint(0,100)),
        "pumps": "My Pumps",
        "sensor_location": f'{str(randint(0,100))}, {str(randint(0,100))}',
        "nozzles_location": f'{str(randint(0,100))}, {str(randint(0,100))}',
        "timestamp": str(time.time()),
        "sensor_id": "2",
        "sensor_type": "CLOUD-2",
        "api_key": "1000"
    }
    x = requests.post(url, data=json.dumps(myobj), headers=headers)
    print("SENT_OBJ:", myobj)
    print(x.text)
    time.sleep(10)
