
// Your Code Here
async function admin(){
    //get list of books from server
    let response = await fetch('http://localhost:3001/listBooks')
    //convert to object
    let books = await response.json()

    //iterate through books
    books.forEach(function(book){
        //generating elements
        let list = document.querySelector('#book-list')
        let listItem = document.createElement('li')
        listItem.textContent = book.title
        list.append(listItem)
        let input = document.createElement("input")
        input.type = "text"
        input.value = book.quantity
        listItem.append(input)
        let saveButton = document.createElement("button")
        saveButton.textContent = "Save"
        saveButton.addEventListener("click", async function(){
            //fetching updatebook function from server
            await fetch('http://localhost:3001/updatebook',{
                //goobeldy gook tbh
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },//end header block
                body : JSON.stringify({
                    "id" : book.id,
                    "quantity" : input.value
                })//end body block
            })//end fetch
        })//end event listener
listItem.append(saveButton)
    })//end forEach



}
admin()
