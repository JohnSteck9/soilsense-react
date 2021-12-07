while [ : ]
do
    python3 post.py --endpoint a26ctyxyqff3du-ats.iot.us-east-1.amazonaws.com --cert 81d0eea90f1ea2640051e6dcb022e5ab8e9ffac842b35ab688d88d5e2c84b877-certificate.pem.crt --key 81d0eea90f1ea2640051e6dcb022e5ab8e9ffac842b35ab688d88d5e2c84b877-private.pem.key --topic iot_sub
    sleep 10
done
