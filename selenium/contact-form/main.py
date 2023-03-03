import os
import unittest

from dotenv import load_dotenv

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

load_dotenv()

chrome_options = Options()
chrome_options.add_experimental_option("detach", False)

TEST_URL = os.getenv('TEST_URL')

browser = webdriver.Chrome(os.getenv('CHROME_DRIVER'),
                           chrome_options=chrome_options)
browser.get(TEST_URL)

# click on Contacts link
browser.find_elements(By.CLASS_NAME, 'menu-text')[1].click()

# contact form elements
in_firstName = browser.find_element(By.NAME, 'fcb44c85')
in_lastName = browser.find_element(By.NAME, '0112ce16')
in_email = browser.find_element(By.NAME, '012af4e3')
in_message = browser.find_element(By.NAME, 'fd8a921a')
btn_submit = browser.find_element(
    By.CLASS_NAME, 'uagb-forms-main-submit-button-text')

# fill contact form
in_firstName.send_keys('Arthur')
in_lastName.send_keys('Morgan')
in_email.send_keys('arthurmorgan@cornwall.com')
in_message.send_keys('Lorem ipsum dolor sit amet, consectetur.')
btn_submit.click()

# wait for success status <span> to appear
el_successStatus = None
try:
    el_successStatus = WebDriverWait(browser, 10).until(
        EC.presence_of_element_located(
            (By.CSS_SELECTOR, ".uagb-forms-success-message span"))
    )
except:
    print('Error: cannot find success message div.')

# check if <span> says that form submission was successful
if el_successStatus.text == 'The form has been submitted successfully!':
    print('<===== contact form submitted SUCCESSFULLY =====>')
else:
    print('<===== contact form submission UNSUCCESSFUL =====>')

browser.close()
