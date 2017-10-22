import nltk
import requests
from nltk.corpus import stopwords
import string

def main():
   url = "https://s3.amazonaws.com/weebstuff/employees.txt"
   userin = "My screen is not working, its unresponsive, and iOS device"
   r = requests.get(url)
   data = r.text
   users = nltk.sent_tokenize(data)

   user_dick = {}
   for user in range(len(users)):
       user_dick[user] = users[user]

   temp = {}
   test = {}
   for user in user_dick:
       name, prob = calcProb(userin, user_dick[user])
       temp[user] = name, prob

   test = (sorted(temp.items(), reverse=True, key=lambda temp: temp[1][1]))

   print(test[0])
   pass


def cleanText(text):
   text = text.lower()
   tokens = nltk.word_tokenize(text)
   tokens = [word for word in tokens if word not in stopwords.words('english') and
             word not in string.punctuation]
   return tokens


def calcProb(userIn, X):
   prob = 0
   commonWord = 0
   totalCount = 0

   userIn = cleanText(userIn)
   X = cleanText(X)

   for word in userIn:
       if word in X:
           commonWord = commonWord + 1
       totalCount = totalCount + 1
   prob = (commonWord / totalCount)
   return X[0], prob

if __name__ == '__main__':
   main()