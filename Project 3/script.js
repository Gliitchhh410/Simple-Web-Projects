const cards = document.querySelectorAll(".card")
const lists   = document.querySelectorAll(".list")


for (const card of cards){
    card.addEventListener("dragstart", dragStart)
    card.addEventListener("drageEnd", dragEnd)
}


for (const list of lists){
    card.addEventListener("dragover", dragOver)
    card.addEventListener("dragenter", dragEnter)
    card.addEventListener("dragleave", dragLeave)
    card.addEventListener("drop", drop)
}
