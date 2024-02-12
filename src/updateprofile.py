import tornado.web
import json

accountDatabase= {}

class Handler(tornado.web.RequestHandler):
    def post(self):
        J = json.loads(self.request.body)
        firstName = J["firstName"]
        lastName = J["lastName"]
        dob = J["birthDate"]
        picture = J["picture"]

        print("WE GOT:", firstName, lastName, dob)
        resp = {"ok": True}

        self.write(json.dumps(resp))
