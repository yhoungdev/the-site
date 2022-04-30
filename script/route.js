


let card = document.querySelectorAll('.card')
    card.forEach(element => {
        element.onclick = e => {
           window.location.href='../pages/in_review.html'
        }
    });

   