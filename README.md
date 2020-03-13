Unit 5 Project: Awesome Startup Employee Directory
By Sebastian Dounchis

In this project, I used online, public APIs and fetching that I learned earlier in the lesson to create a functioning employee directory that loads 12 fictional, random American people while also providing various information such as their name, gender, date of birth, location, and email. On the webpage, 12 people are displayed in a grid-like format, showing name, email, and location. Once you click on one of the cards containing a person, a modal is opened which tells more information about the person such as their number, birthday, and address. Three buttons are on the modal window: the "X" button, the "prev" button, and the "next" button. The "X" button closes the modal. The "prev" button toggles to the previous person. The "next" button toggles to the final person. In addition, using the search bar at the top right corner of the screen, users can dynamically search by name in a case-insensitive manner.

Tips To Use This Project:
    -I only use vanilla js and never link jQuery, so if you are planning on adding or altering code then I would recommend sticking to vanilla js.
    -Function createModals() has many more lines than necessary, but that is only to instantiate, append, and give IDs to the modals that pop up for the character. This function is done in an orderly display without unnecessary clumping and should be pretty easy to figure out its iteration.

Style Changes to Original Project:
    -Background Color
        -changed from white to light blue (background: rgba(173, 216, 230, 0.4))

    -Title/Header
        -font increase from 1.25 em to 2.5 em
        -margin-top decreased from 35 px to 25px

    -Search Bar
        -background color changed to skyblue
        -padding increase from 0.4rem 1rem to 0.6rem 1.3rem
        -border color changed to blue
    
    -Employee Cards
        -background color changed to skyblue
        -border size increase from 1px to 3px
        -border color changed to blue
        -text color of name of employee on card changed to blue

