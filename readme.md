# SnapBook 
By [Kyle Van Bergen](http:///www.github.com/kyleavb) and [Emily Garrett](http://www.github.com/egarrett94)

## User Stories
1. **Carol**: she has a family that she loves very much, but doesn't live near.  She wants to share photos of her shitty cats, but in a fashinable layout.
2. **Kyle**: He has Zero design sense but wants to impress his mom back home with his Immsersive Class Graduation Photos.
3. **Khaleesi**: She owns a business and wants to do a presentation for local girl bosses who are also passionate about burning men alive. She'll use a SnapBook layout to capture her fond memories about not sleeping with her weird half brother.

## Minimum Viable Product

Our MVP will be a web app that will provide a user the ability to upload images that are saved to their profile, allow them to view all images currently saved, and have users select pictures to output to a scrapbook that can be saved and accessed later. 

## Routes

| Path | Verb | Purpose |
| ---|:---:|--- |
| / | GET | Serve the Home Page |
| /layouts | GET | Serve page of our snapbook templates |
| /login | GET | Serve the login page |
| /login | POST | Verify User Login information |
| /signup | GET | Serve the signup page & form |
| /signup | POST | Add user to user DB |
| /profile | GET | Display authenticated user |
| /profile | PUT | To update user information |
| /collections | GET |  Display all users associated images and videos |
| /collections | POST | Submit collection to PostBook Generator |
| /collections/:photoId | GET | Display information on specific image/video |
| /collections/:photoId | PUT | Allows users to add filters !-Stretch Goal-! |
| /collections/:photoId | DELETE | removes photo from site |
| /snapbooks | GET | Provide a index page of all Created SnapBooks |
| /snapbooks/:snapbookId | GET | Opens specific saved SnapBook |
| /snapbooks/:snapbookId | PUT | Saves any edits made to photo layout |
| /snapbooks/:snapbookId | POST | Submit Snapbook to share manager |
| /snapbooks/:snapbookId | DELETE | Removes saved snapbook from app|

## Screenshots of some main features

![screen shot 2018-04-13 at 9 17 28 am](https://user-images.githubusercontent.com/25888207/38746218-b9d74adc-3efb-11e8-81e3-e86704b650a9.png)
![screen shot 2018-04-13 at 9 17 41 am](https://user-images.githubusercontent.com/25888207/38746219-b9efc526-3efb-11e8-9a05-c497ebc84c1a.png)
![screen shot 2018-04-13 at 9 17 50 am](https://user-images.githubusercontent.com/25888207/38746220-ba0d47c2-3efb-11e8-9488-eecf5ab0317e.png)
![screen shot 2018-04-13 at 9 18 00 am](https://user-images.githubusercontent.com/25888207/38746221-ba229faa-3efb-11e8-90b1-3fb8dbd96965.png)

## Models coming soon!
