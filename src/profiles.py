import tornado.web
import random

accountDatabase = {
    "alice": {
        "realname": "Alice Smith", "dateOfBirth": "Jan 1", "email": "alice@example.com"
    },
    "bob": {
        "realname": "Bob Jones", "dateOfBirth": "Dec 31", "email": "bob@bob.xyz"
    },
    "carol": {
        "realname": "Carol Ling", "dateOfBirth": "Jul 17", "email": "carol@example.com"
    },
    "dave": {
        "realname": "Dave N. Port", "dateOfBirth": "Mar 14", "email": "dave@dave.dave"
    }
}

class Handler(tornado.web.RequestHandler):
    def get(self):
        p = self.request.path
        uname = p.split("/")[2]
        realname =accountDatabase[uname]["realname"]
        dob =accountDatabase[uname]["dateOfBirth"]
        email =accountDatabase[uname]["email"]
        self.render( "../html/ProfilePage.html", uname = uname, realname = realname, dob = dob, email = email )