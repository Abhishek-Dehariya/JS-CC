const userEmail = []

if (userEmail){
    console.log("Got user email")
}else{
    console.log("Don't have email addree")
}

if (userEmail.length === 0){
    console.log("array is empty")
}


    const emptyObject = {}

    if(Object.keys(emptyObject).length === 0){
        console.log("object is empty")
    }


    //Nulish coalesscing opreater (??) : null undefined

  
    // val1 = 5 ?? 10
    // let val1 = null ?? 10
    let val1 = undefined ?? 15

    console.log(val1)
