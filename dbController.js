db=firebase.database(); 
refText=db.ref().child("texto")  //db.ref() es el nodo padre


// para leer datos desde la base de datos
refText.on("value",datapush=>{
    realTime=document.getElementById("realTime")
    realTime.innerHTML=datapush.val()
})


//para hacer push de un objeto en la db
db.ref().child("datapush").push({
    nombre:"pedro"
})
//para hacer set de un objeto en la db
db.ref().child("dataset").set({
    nombre:"juan"
})

//para combinar metodos set y push
db.ref().child("datasetpush").push().set({
    nombre:"miguel"
})