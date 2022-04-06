import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
import "firebase/auth";

const config = {
    "type": "service_account",
    "projectId": "isitabiscuit-efcd6",
    "private_key_id": "258c9221db173a0ef2c62f76adc0e6799ac7c9b6",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIhNVgCX6IV9ZQ\nVkDf7kKTl31AUGrtn8Oy/1Nb9s2Tp6D6MrLRnpNnLvLuiIyJu37s49Ze5hLDGrQX\nboP+rP5ei2kaRn9j/iaANMAHiqyDbttYu+J2i99JvJmvx63m1aR3rBNsLGCwv9gR\n+weVeANOWAAHmtd5EgQCSjLpQJ/JqQy1nO2uJV4SJu0sxmN/JTX8MpnwBAQWlwqT\nTRtVHBW56zP/0ZW2DuSsQZ6EenZXnIZguL3K3hK6z3l1mZ3hChhCG6AR9MKX8wMb\ntxRPp9uJPZhcs0HaUbzrWMrBc/sA5Pacb/IJZfIljrAHtlM492i3wpDpEx6WLZZp\nqVVISM9LAgMBAAECggEAO5uROp1X6fwCj5s0ad0QGYPdDfNZ9g2aRWm1RA9YCV65\ncecEVWAIfZHtUY9yB7efAZixL0DBrxIPGzAVOO4AJ+bVdaQjVnxEwbPsqdFFe0TH\nG9eueIMX+3l/TkvTnF1CKPkURQHkNGazOpUfKgWlJfLu/1O+XhVG789S1xgI6A88\nAKzb+h5EoZIRuPe2Ecq43TH9JH7F1jpPj6FXP3A84zArdajEZKGjtd142b5o/ptS\nn9hY5ANirXbICZdH2C1FYIUldL7Cs8g8am7dGPV2ZozLwGZqyvPP4dNetaNO+/3w\nRxQ+GvpIKq07I1QvWWAfOEoUXt9ZNZRT1fZDp47UoQKBgQDucZZEZ7Q3KbKUBBdd\nZTJAcAr/ZsFG7+3WhJ2heZEHub8AaE3XiKUh65qe4pNc2UELIpvM4yvCtcJut948\naB9r216N/PABpLiFPnF+OcpObzNN0tM0Hnwjn3lYibNaJBkOqr5S6ezt2ACSDXG8\nTXOh8UeEHGjcXk9v2y2WQRQ6swKBgQDXSGdQHkgrqrz/UWZe1NjGZqrRj8DNiXlt\niLHbI211WAPaKTYwHKwChBYNH+2iPqzUh2xguX3SLT2/IHN7+Gp0tx/Osyw8CqiU\nKveJ8jH5HXedYsRxeiap6Rf4BpTB/D4KGHouGZtnNfaIWroU3NtqKCYaKfBZH27O\nnh57LH3FCQKBgQDj+e42UQDZjSCUrKS6QzscqQOa1eANtvCrnfgon1avEEUyWoey\nf4+DMwSOzQsgRwgNYXWdG8aHT8kqmtn834DLWt642xGOQLO7kcxpZ0+qVl+zFNOi\njVMbrCoVIPM+SC08/LskA0zoyxEgk4IfC953A33hLliD+hfxVpnrgyWYSQKBgBay\nBlo25wrbdBNChJVIwRWhay6uhfflH00B1SYyBO8S+Uz9fT3zN9sIC78Ud5vcGaJK\nKI3F4FLQ/CpzBFm0ZZyqVYsX7njh8sW0BeagBs6pYZvQ9r6zzvGopiM6pmIQ8oVj\n8TV885oc4UGctvNOGT+GvgWSGEl8+9SCbNo1ZYjpAoGAR1KeS7TIMGp+4F/dj5o5\nTqqTIN4YwOtx+iG01zQ8jJByG9moI05zdC5mS3xtEJhqDmnqK9mk1o1AyWzlLI9u\nbEs5pkOLR3YYNE6LNsIuH4UVgltvIQ+CbW5F/vjmGdIYicrN8A3YPNKSiwXAJ5wL\nuBIVij1c2C2B5TMFsEFQeZ0=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-6vlm4@isitabiscuit-efcd6.iam.gserviceaccount.com",
    "client_id": "100459690538840376234",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6vlm4%40isitabiscuit-efcd6.iam.gserviceaccount.com"
  }

  firebase.initializeApp(config);

    const db = firebase.firestore()

    export const getBiscuits = async () => {
        const { docs } = await db
          .collection('biscuits')
          .get();
          const biscuits = docs.map(doc => {
            return {
              ...doc.data(),
              _id: doc.id
            }
          })
        return biscuits;
      };