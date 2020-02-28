import os
import requests
from bs4 import BeautifulSoup
from flask import Flask
app = Flask(__name__)

APP_AGENT_AVAILABILITY_URL = os.environ['APP_AGENT_AVAILABILITY_URL']
APPD_TOKEN = os.environ['APPD_TOKEN']
HEADERS = {
    "Authorization": "Bearer {}".format(APPD_TOKEN)
}

@app.route('/xml')
def raw_xml():
    r = requests.get(APP_AGENT_AVAILABILITY_URL, headers=HEADERS)
    return r.text

@app.route('/metrics')
def forward_proxy():
    r = requests.get(APP_AGENT_AVAILABILITY_URL, headers=HEADERS)
    soup = BeautifulSoup(r.text, 'lxml')
    value = soup.find('value').getText()

    return "app_agent_availability {}".format(value)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
