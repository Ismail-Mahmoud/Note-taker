const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    }
    catch {
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicate = notes.some((note) => note.title === title)

    if(duplicate) {
        console.log(chalk.red('Duplicated title!'))
    }
    else {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('Note added successfully!'))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()

    notesToKeep = notes.filter((note) => note.title !== title)

    if(notesToKeep.length === notes.length) {
        console.log(chalk.red('No such note!'))
    }
    else {
        saveNotes(notesToKeep)
        console.log(chalk.green('Note removed successfully!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow('Your notes:'))
    notes.forEach((note) => console.log(chalk.blue('- ' + note.title)))
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note === undefined) {
        console.log(chalk.red('No such note!'))
    }
    else {
        console.log(chalk.yellow(note.title))
        console.log(chalk.blue(note.body))
    }
}

const editNote = (title, newtitle, newbody) => {
    const notes = loadNotes()
    const idx = notes.findIndex((note) => note.title === title)
    if(idx === -1) {
        console.log(chalk.red('No such note!'))
    }
    else {
        if(!newtitle) newtitle = title
        if(!newbody) newbody = notes[idx].body
        notes[idx] = {
            title: newtitle,
            body: newbody
        }
        saveNotes(notes)
        console.log(chalk.green('Note edited successfully!'))
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote,
    editNote
}