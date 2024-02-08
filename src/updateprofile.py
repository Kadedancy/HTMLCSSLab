import tornado.web
import json
import os
import uuid 

class Handler(tornado.web.RequestHandler):
    async def post(self):
        try:
            J = json.loads(self.request.body)
            firstName = J["firstName"]
            lastName = J["lastName"]
            dob = J["birthDate"]
            picture = J["picture"]

            picture_file = self.request.files.get("picture", [])
            if picture_file:
                uploaded_file = picture_file[0]
                picture_content = uploaded_file["body"]
                
                picture_filename = str(uuid.uuid4()) + os.path.splitext(uploaded_file["filename"])[1]

                save_path = os.path.join("../html", picture_filename)
                with open(save_path, "wb") as f:
                    f.write(picture_content)

            print("WE GOT:", firstName, lastName, dob)
            resp = {"ok": True}

        self.write(json.dumps(resp))
