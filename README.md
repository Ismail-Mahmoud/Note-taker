# Note-taker
A command line application that helps you adding, removing, editing and listing your notes

## Requirements
[Node.js](https://nodejs.org/)

## Installation

Clone this repository to your local machine
```bash
git clone https://github.com/Ismail-Mahmoud/Note-taker.git
```

Go to the project directory
```bash
cd Note-taker
```

Install needed modules
```bash
npm install
```

## Getting started

Adding a note
```bash
node app.js add --title="NOTE_TITLE" --body="NOTE_BODY"
```

Removing a note
```bash
node app.js remove --title="NOTE_TITLE"
```

Reading a note
```bash
node app.js read --title="NOTE_TITLE"
```

Editing a note (either title or body or both)
```bash
node app.js edit --title="NOTE_TITLE" --newtitle="NEW_TITLE"
node app.js edit --title="NOTE_TITLE" --newbody="NEW_BODY"
node app.js edit --title="NOTE_TITLE" --newtitle="NEW_TITLE" --newbody="NEW_BODY"
```

Listing all notes
```bash
node app.js list
```