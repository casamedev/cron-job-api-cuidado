import requests
import dotenv
import os
dotenv.load_dotenv()

url = 'http://localhost:5000/api/seed/clientes'
response = requests.get(url, auth=(os.getenv("USER"), os.getenv("PASSWORD")))
print(response)