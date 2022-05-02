


let card = document.querySelectorAll('.card')
    card.forEach(element => {
        element.onclick = e => {
           window.location.href='../pages/in_review.html'
        }
    });



    //route to all each questions
    let contents = document.querySelectorAll('.past-que')
        contents.forEach( past => {
            past.onclick = e => {
                window.location.href = '../pages/in_past.html'
            }
        })
       


     