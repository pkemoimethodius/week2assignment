//Event listener
document.addEventListener("DOMContentLoaded",() =>{
    let form =document.getElementById("shoppingForm")
    form.addEventListener("submit",(e) =>{
    e.preventDefault()
    handlingItems(e.target.ItemAdded.value)
     form.reset()
    })
})

//function handling action
function handlingItems(items){
    let li=document.createElement("li")
    let btn =document.createElement("button")
    let yesMan=document.createElement("button")
    yesMan.addEventListener("click",theGreenButton)
    yesMan.textContent=" Purchased"
    btn.addEventListener("click",handleDelete)
    btn.textContent="x"
    li.textContent=`${items}`
    li.appendChild(btn)
    li.appendChild(yesMan)
    document.querySelector("#theList").appendChild(li)
    console.log(li)
}
function handleDelete(e){
    e.target.parentNode.remove()
}

function theGreenButton(e){
    e.target.classList.add("green")
}


const shoppingDone=document.getElementById("shopping_done")
shoppingDone.addEventListener("click",(e)=>{
    e.target.parentNode.remove()
})