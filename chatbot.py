# -*- coding: utf-8 -*-
"""chatbot.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1ysaJIYDcLzyjbqbLk4hdS8ROTe1GkyKI
"""

!python -m spacy download fr_core_news_md

# import en_core_web_lg # Large SpaCy model for English language
import numpy as np
import re # regular expressions
import spacy # NLU library


from collections import defaultdict
from sklearn.svm import SVC # Support Vector Classification model
from spacy.lang.fr.stop_words import STOP_WORDS

spacy.cli.download("fr_core_news_md")
nlp = spacy.load('fr_core_news_md')

# stop_words=set(STOP_WORDS)

# deselect_stop_words = ['n\'', 'ne','pas','plus','personne','aucun','ni','aucune','rien']
# for w in deselect_stop_words:
#     if w in stop_words:
#         stop_words.remove(w)
#     else:
#         continue

stop_words=set(STOP_WORDS)

deselect_stop_words = ['n\'', 'trop', 'je', 'ca']
for w in deselect_stop_words:
    if w in stop_words:
        stop_words.remove(w)
    else:
        continue

# Create training data
training_sentences = [
    "Je ne me sens pas bien",
    "Je ne suis pas bien",
    "Je ne peux plus supporter la situation",
    "Je vais mal",
    "Je suis triste",
    "Je ne me sens pas très bien",
    "Je vais très mal",
    "Je suis désespéré",
    "Je suis malheureux",
    "Ca ne va pas",
    "Ca ne vas pas trop",
    "Je n'ai envie de rien",

    "Je me sens bien",
    "Je suis bien",
    "Je peux supporter la situation",
    "Je vais bien",
    "Je suis joyeux",
    "Je ne me sens pas très bien", 
    "Je vais très bien",
    "Je suis bien",
    "Je suis heureux",
    "Je suis en forme",
    "Je me sens plutôt bien",
    "Je suis heureux",
    "Bien",
    
]




training_intents = [
    "negatif",
    "negatif",
    "negatif",
    "negatif",
    "negatif",
    "negatif",
    "negatif",
    "negatif",
    "negatif",
    "negatif",
    "negatif",
    "negatif",

    "positif",
    "positif",
    "positif",
    "positif",
    "positif",
    "positif",
    "positif",
    "positif",
    "positif",
    "positif",
    "positif",
    "positif",
    "positif"
]

# Initialize the array with zeros: X
X_train = np.zeros((len(training_sentences), 
              nlp('sentences').vocab.vectors_length))

for i, sentence in enumerate(training_sentences):
    # Pass each each sentence to the nlp object to create a document
    doc = nlp(sentence)
    # Save the document's .vector attribute to the corresponding row in X
    X_train[i, :] = doc.vector

    # Create a support vector classifier
clf = SVC(C=1, gamma="auto", probability=True)

# Fit the classifier using the training data
clf.fit(X_train, training_intents)

#Yes, a lot can be done here to check / improve model performance! We will leave that for another day!

def get_intent_ml(text):
    doc = nlp(text)
    return(clf.predict([doc.vector])[0])

output_format = "IN: {input}\nOUT: {output}\n" + "_"*50

responses_ml = {
"negatif":"Je suis désolée d'entendre ça.",
"positif": "Super! Te sens tu en forme pour un peu de sport?",
"default":"Je t'aime aussi!"
}

def respond_ml(text):
    response = responses_ml.get(get_intent_ml(text), responses_ml["default"])
    return(output_format.format(input=text, output=response))

print(respond_ml("Je ne me sens pas bien"))
print(respond_ml("Je vais bien"))
print(respond_ml("l"))

# Define keywords that can help determine the intent 
intent_keywords = {

'negatif': ['abattu','accablé','affamé','affligé','affolé','agacé','agité','aigri','alarmé',
'âme en peine','amer','angoissé','animosité','anxieux','apathique','apeuré','appréhension','blessé','bloqué',
'cafardeux','chagriné','choqué','coeur brisé','confus','consterné','contrarié','courroucé','craintif',
'crispé','curieux','déchiré','déconcerté','décontenancé','découragé','déçu','dégoûté','démonté',
'démoralisé','démuni','dépassé', 'triste',"dépité","déprimé","dépressif","dérangé","désappointé",
"désarçonné","désarmé","désespéré","désintéressé","désolé","détaché","douloureux","ébahi","ébranlé",
"écoeuré","effrayé","sans élan","embarrassé","embêté","embrouillé","endormi","énervé","ennuyé",
"enragé","envieux","épouvanté","éprouvé","épuisé","éreinté","étonné","exaspéré","excédé","excité","fâché","fatigué",
"furieux","fureur","fourbu","fragile","frousse","frustré","être sur ses gardes","grognon","haineux","haletant",
"hésitant","honteux","horrifié","horripilé","hors de soi","humeur noire","impatient","impuissant","incrédule",
"indécis","indifférent","indolent","inerte","inquiet","insatisfait","insécuriser","insensible","instable",
"intéressé","intrigué","irrité","jaloux","las","léthargique","mal","mal à l’aise","malheureux",
"en avoir marre","maussade","mécontent","méfiant","mélancolique","ne pas avoir le moral","morose",
"mortifié","boulversé", 'moulu',"navré",'sur les nerfs','nerveux','paniqué','paresseux','perplexe','pessimiste',
'peur','rancoeur','renfermé','sur la réserve','ressentiment','réticent','rompu','saturé',"sceptique",
'secoué','seul','sidéré','sombre','soucieux','souffrant','soupçonneux','submergé','surpris','taciturne',
'tendu','terrifié','tiraillé','tourmenté','tremblant','triste','troublé','avoir la trouille','vexé','vulnérable', "délaissé"],


'positif': ['bien', "heureux","à l’aise","absorbé","affection","alerte","allégé","allègre","amical","amour",
"amoureux","amusé","animé","ardeur","attentif","au septième ciel","aux anges","aventureux","béat","bonne humeur",
"calme","captivé","centré","charmé","comblé","compatissant","concentré","concerné","confiant",
"courage","curieux","délassé","détaché","détendu","ébloui","effervescence","égayé","emballé","ému","enchanté",
"encouragé","énergie","enflammé","enjoué","enthousiasmé","entrain","épanoui","étonné","étourdi","éveillé",
"exalté","excité","expansif","expectative","extase","exubérant","fasciné","fier","fou de joie","gai","galvanisé",
"gonflé à bloc","gratitude","grisé","haletant","harmonie","heureux","hilare","humeur","enjouée","humeur","espiègle",
"impatient","impliqué","insouciant","inspiré","intéressé","intrigué","joyeux","libre"],

'neutre': ['je ne sais pas', ],

'medecine' : ['medicament', 'médecin', 'pilule', 'médoc', 'medoc','traitement'],

'sport' : ['sport', 'exercice', 'santé', 'courir', 'nager', "piscine", 'plongée', 'cardio'],

'alerte' : ['suicide', 'mort', 'pas envie de vivre', 'mourir']
}
# Create a dictionary of patterns
patterns = {intent: re.compile('|'.join(keys)) for intent, keys in intent_keywords.items()}

# Define a function to find the intent of a message
def get_intent_re(message):
    for intent, pattern in patterns.items():
        # Check if the pattern occurs in the message 
        if pattern.search(message):
            return(intent)
    else:
        return('default')

responses_re = {
    "negatif":"Oh non...",
    "positif": "Super!",
    "medecine":"Navré, je te propose de t'adresser à ton médecin pour toute information concernant le traitement!",
    "sport" : "Le sport t'aidera à aller mieux à coup sûr!",
    "alerte" : "Je te conseille de prendre contact avec SOS Suicide",
    "default":"désolé, je ne comprends pas",
}

def respond_re(text):
    response = responses_re.get(get_intent_re(text))
    return(output_format.format(input=text, output=response))

print(respond_re("je me sens délaissé"))
print(respond_re("je vais bien"))
print(respond_re("vhgfjhgj"))
print(respond_re("j'ai pas envie de prendre le medoc"))
print(respond_re("j'ai plus de cardio"))
print(respond_re("je n'aime pas le sport"))

