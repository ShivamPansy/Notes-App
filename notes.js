const { notStrictEqual } = require('assert')
const chalk = require('chalk')
const fs = require('fs')


const getNotes = () => {
    return "Your name...."
}

const addNotes = (title,body) => {
    const msgs = loadNotes()

    //const duplicateNotes = msgs.filter((msg) => msg.title === title)

    const duplicateNote = msgs.find((msg) => msg.title === title)
    // const duplicateNotes =msgs.filter(( msg)=function(title){
    //     return msg.title === title
    // })
    
    if(!duplicateNotes){
        msgs.push({
            title:title,
            body:body
        })
        saveNotes(msgs)
        console.log(chalk.bold.green("Note added"))
    }
    else{
        console.log(chalk.bold.red('Note title taken'))
    }
    
}

const saveNotes = (msgs) => {
    const dataJSON = JSON.stringify(msgs)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
    
}

const removeNotes = (title) => {
    const msgs = loadNotes()
    const toBeKept = msgs.filter((msg) => msg.title !== title)

    if(msgs.length > toBeKept.length){
        console.log(chalk.bold.green("Note successfully removed."))
        saveNotes(toBeKept)
    }
    else{
        console.log(chalk.bold.red("Note not present"))
    }
    
}

const listNotes = () => {
    const allNotes = loadNotes()
    allNotes.forEach((allNote) => console.log(allNote.title))
    
}

const readNotes= (title) => {
    const msgs  = loadNotes()
    const yourNotes = msgs.find((msg) => msg.title === title)

    //console.log(yourNotes.body)
    
    if(!yourNotes){
        console.log(chalk.bold.red("Couldn \'t find the note"))
    }else{
        console.log(chalk.bold.green("found it!"))
        console.log(yourNotes.body)
    }
}

module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}
