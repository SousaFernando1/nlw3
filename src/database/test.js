const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    await saveOrphanage(db, {
        lat: "-28.4898474",
        lng: "-48.77961979",
        name:"Lar dos meninos",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "998989898",
        images:[
            "https://images.unsplash.com/photo-1576025773492-cc2eb828c42a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1586022773518-47a6bf08fa90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions:"Venha como se sentir a contade e traga muito amor e pacieência para dar.",
        opening_hours:"Horário de visita Das 18h até 8",
        open_on_weekends:"0"
    })

   const selectedOrphanages =  await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)



    // const orphanage = await db.all('SELECT * from ORPHANAGES WHERE id = "3"')
    // console.log(orphanage)


    // console.log(await db.run("DELETE FROM orphanages WHERE id='2'"))


})