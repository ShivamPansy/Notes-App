// const add = require('./notes.js')

// const sum= add(4,-2)
// console.log(sum)

const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

// const theNotes = gettingNotes()

// console.log(theNotes)
// console.log(chalk.inverse.italic.bold.blue("Error"))


// console.log(process.argv[2])

//const command = process.argv[2]

// if(command === 'add'){
//     console.log("Adding note...")
// }else if(command === "remove"){
//     console.log('Removing Note...')
// }

yargs.version('1.1.0')

//add, remove, read, list

//create add command

yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe:'Content',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

//create remove command

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demnadOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

//create list command

yargs.command({
    command:'list',
    describe:'List the notes',
    handler(){
        console.log('Your Notes....')
        notes.listNotes()
    }
})

//create read command

yargs.command({
    command:'read',
    describe:'read the notes',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()