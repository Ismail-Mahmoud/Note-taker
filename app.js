const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'edit',
    describe: 'Edit a note',
    builder: (yargs) => {
        yargs.option('title', {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }).option('newtitle', {
            describe: 'New note title [optional if newbody specified]',
            type: 'string'
        }).option('newbody', {
            describe: 'New note body [optional if newtitle specified]',
            type: 'string'
        }).check(argv => Boolean(argv.newtitle || argv.newbody))
    },
    handler(argv) {
        notes.editNote(argv.title, argv.newtitle, argv.newbody)
    }
})

yargs.parse()