while [ : ]
do
    python3 post.py --endpoint a26ctyxyqff3du-ats.iot.us-east-1.amazonaws.com --cert d4c3065d02c9de1542250d6006a0c60ae8266cf88179bcf550132b244c1c0e6b-certificate.pem.crt --key d4c3065d02c9de1542250d6006a0c60ae8266cf88179bcf550132b244c1c0e6b-private.pem.key --topic iot_sub
    sleep 10
done
