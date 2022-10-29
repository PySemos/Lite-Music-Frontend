window.onload = ()=>{
    const save = document.querySelector("#buttonSaveBloc")
    save.addEventListener("click",async ()=>{
        const titulo = document.querySelector("#titulo")
        const content = document.querySelector("#textarea-bloc")
        let query = await fetch(`/api/files/${titulo.value}`,
        {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                save:true,
                content:content.value
            })
        }
        )
        query = await query.json()
        console.log(query)
    })
}