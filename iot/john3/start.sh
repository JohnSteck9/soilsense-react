while [ : ]
do
    python3 post.py --endpoint a26ctyxyqff3du-ats.iot.us-east-1.amazonaws.com --cert 81d0eea90f1ea2640051e6dcb022e5ab8e9ffac842b35ab688d88d5e2c84b877-certificate.pem.crt --key d4c3065d02c9de1542250d6006a0c60ae8266cf88179bcf550132b244c1c0e6b-private.pem.key --topic iot_sub
    sleep 10
done
