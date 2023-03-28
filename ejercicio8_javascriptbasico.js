const miFunc = word => {
    if(typeof word !== "string") {
        throw new Error("Esto no es una palabra!")
    }
}



try{
    miFunc(36);
    console.log("Se ejecuto de manera correcta")
} catch (e){
    console.error(`ERROR! : ${e}`)
} finally {
    console.log("Terminó la ejecución")
}