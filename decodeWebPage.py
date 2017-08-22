# http://www.practicepython.org/exercise/2014/06/06/17-decode-a-web-page.html
# Use BeautifulSoup and requests Python packages to print out a list of all the article titles on the New York Times homepage.
import requests
from bs4 import BeautifulSoup

def decodeWebPage(url):
    my_url = url
    req = requests.get(my_url)
    req_html = req.text
