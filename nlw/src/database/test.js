const Database=require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: 'Alex Stein', 
        avatar: "https://avatars3.githubusercontent.com/u/61603785?s=460&u=3f7b480ea46a5270247d61900956c9c9a3beaede&v=4" ,
        whatsapp: '11973370505', 
        bio: "Amante da Física desde criança.<br><br>Sempre gostou de aprender sobre as leis da física e sobre as teorias de Einstein Seu maior sonho é ajudar um foguete brasileiro a ir para o espaço e ajudar quem quiser a aprender Física também.", 
        
    }

    classValue = {
        subject: 1, 
        cost : '20', 
        
    }

    classScheduleValue = [
        {
            weekday:0, 
            time_from: 720, 
            time_to: 1436
        },
        {
            weekday:0, 
            time_from: 320, 
            time_to: 1700
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValue})

    //todos os proffys

    //console.log(selectClassesSchedules)

})  