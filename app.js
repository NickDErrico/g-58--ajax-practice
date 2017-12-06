$(document).ready(function() {

  let bookList = $('#getBooks')
  let authorList = $('#getAuthors')
  let bookSearch = $('#findBooks')

  bookList.click(function() {
    $('li').remove()
    $.get('https://tmartin-books-api.herokuapp.com/details', function(data) {
      for (let i = 0; i < data.length; i++) {
        let book = "<li class='bookList'>" + data[i].title + "</li>";
        // let img = "<img src=" + data[i].cover_img + ">"
        $('.results').append(book)
        $('.bookList:last-child').append(" by: " + data[i].author_first_name + data[i].author_last_name )
        // $('.bookList:last-child').append(img);
      }
    })
  })
  authorList.click(function() {
    $('li').remove()
    $.get('https://tmartin-books-api.herokuapp.com/authors', function(data) {
    for (i = 0; i < data.length; i++) {
      $('.results').append("<li class='authorList'>" + data[i].first_name + " " + data[i].last_name + "</li>");
      }
    })
  })
  bookSearch.click(function() {
    $('li').remove()
    $.get('https://tmartin-books-api.herokuapp.com/details', function(data) {
    for (let i = 0; i < data.length; i++) {
    if (data[i].genre === $('#search').val()) {
      console.log($('#search').val());
      $('.results').append("<li class='booksByGenre'>" + data[i].genre + " - " + data[i].title + " by: " + data[i].author_first_name + " " +  data[i].author_last_name +"</li>")
    }
      }
    })
  })



})
