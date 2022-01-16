
// Your Code Here
async function admin(){
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderAdminPage)

    function updateQuantity(ID, newQuantity){
        for(let i = 0; i < books.length ; i++){
            if(books[i].id == ID){
                
            }
        }
    }
}
function renderAdminPage(book){
    let list = document.querySelector('#book-list')
    let listItem = document.createElement('li')
    listItem.innerHTML = `
        <form>
            <p>${book.title}<p>
            <input type="text" id="${book.id}-quantity" value="${book.quantity}">
            <input type="submit" value="Save">
        </form>
    `
    list.append(listItem)
}



admin()
