# Code_Prototype
<p>
Our objective with this project is to encourage avid learners to learn a different
programming language through a highly accessible and engaging social web
platform. The intention is to first introduce the programming language of choice
and establish the basics in an interactive environment. The web page will aid the
learner through the whole learning experience of the fundamentals to ensure the
apprehension of a solid base.
<p>
We’ll offer multiple programming languages, each divided in three main levels:
beginner, intermediate, and expert. Access to the beginner level will be free of
charge, unlike the other two levels which will have a fee. Once you’ve paid for
access, you will be considered a premium user, and you will have unlimited
access.
<p>
C will be implemented first, followed up by the most in demand languages.
Furthermore, as a motivation for the users, the web page will include a simple
global ranking system per programming language. Each exercise or challenge,
based on its difficulty, will improve the position in the ranking.
<p>
The project is composed of three types of users: non-registered users,
registered users and premium users. Basic information like the ranking or beginner
lessons are available for all users. On the other hand, the ad-free version is only
accessible for premium users, which are those who buy an intermediate and/or
expert lessons package. Registered users will show up in the ranking, and their
progress in basic lessons is saved. And non-registered users are considered to be
those who enter the application for the first time or who haven't created an
account yet.

# DataBase
We will create a non-relational database. Composed by 3 tables: Users, C

## Users
### Attributes
* id (primaryKey): String
    * The id is the gmail and that will be unique.
* userName: String
* isPremium: Boolean
## Course
### Attributes
* id (primaryKey): String
    * The id is maked by our self
* userName: String
* name: String
* programmingLanguage: String
* description: String
* challenges: Challenges[]
    * The Challenges contains information of the users and his score:
        * id: String
            * The id is maked by our self
        * title: String
        * description: String
        * executationTime: Time
        * durationTime: Time
        * score: int = executationTime + durationTime
        * stage: String
## Subscription
### Atributes
* id (primaryKey): String
    * The id is maked by FireStore
* user: String
* course: String
* isActivate: boolean
* startDate: Time
* price: float

