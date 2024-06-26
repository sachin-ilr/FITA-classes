//get the container element from index.html
const mainPage = document.getElementById('main')

//Function to fetch the books
async function fetchBooks() {
    try {
        const res = await fetch('https://freetestapi.com/api/v1/books?limit=5')
        if (!res.ok) {
            throw new Error('Network response was not ok' + res.statusText)
        }
        const books = await res.json()
        return books
    } catch (error) {
        console.error('failed to fetch books')
        return []
    }
}

//Function to display each details in their own element
function displayBooks(books) { 
    books.forEach((book, index) => {
        const bookDiv = document.createElement('div')
        bookDiv.id = 'book-${index}'
        bookDiv.className = 'books'

        const titleP = document.createElement('p')
        titleP.className = 'title'
        titleP.id = 'title-${index}'
        titleP.textContent = 'Title: ${book.title}'
        

        const authorP = document.createElement('p')
        authorP.className = 'author-${index}'
        authorP.id = index
        authorP.textContent = 'Author: ${book.author}'

        const image = document.createElement('img')
        image.className = 'image-${index}'
        image.id = index
        image.sec = books.cover_image
        image.alt = 'Cover image of ${book.title}'

        const descP = document.createElement('p')
        descP.className = 'desc-${index}'
        descP.id = index
        descP.textContent = 'Description: ${book.description}'

        const genreP = document.createElement('p')
        genreP.className = 'genre-${index}'
        genreP.id = index
        genreP.textContent = 'Genre: ${book.genre}'

        const pubP = document.createElement('p')
        pubP.className = 'genre-${index}'
        pubP.id = index
        pubP.textContent = 'Publication year: ${book.publication_year}'

        bookDiv.appendChild(titleP)
        bookDiv.appendChild(authorP)
        bookDiv.appendChild(descP)
        bookDiv.appendChild(genreP)
        bookDiv.appendChild(pubP)
        bookDiv.appendChild(image)

        mainPage.appendChild(bookDiv)
    })
}

//Initialise the array that holds the list of books
let booksList = []

//Fetch the books list
fetchBooks().then(books => {
    booksList = books
    console.log('books fetched successfully', booksList)
    displayBooks(booksList)
})










// fetch('https://freetestapi.com/api/v1/books')
//     .then(res => res.json())
//     .then(data => console.log(data))
        // const displayTest = document.createElement('div')
        // const textExample = document.createElement('p')
        
        // displayTest.id = 'test'
        // textExample.id = 'text'
        
        // textExample.textContent = 'Example paragraph'
        
        // displayTest.appendChild(textExample)
        // mainPage.appendChild(displayTest)