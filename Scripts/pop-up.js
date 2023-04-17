// Récupération des éléments
//const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
// Fonction pour afficher la fenêtre
function openPopup(element) {
    console.log(element.id);
    let overlay = document.querySelector(".overlay-"+element.id)
    overlay.style.display = 'block';
}
// Fonction pour masquer la fenêtre
function closePopup(element) {
    let overlay = document.querySelector("."+element)
    overlay.style.display = 'none';
}

document.addEventListener('keydown', function(event) {
    if(event.key === "Escape"){
        for(let i = 1; i<=3; i++)
        {
            document.querySelector(".overlay-test"+i).style.display = 'none';
        }
    }
})
// Ajout de l'événement sur la div pour ouvrir la fenêtre
//document.querySelector('.test2').addEventListener('click', openPopup);
// Ajout de l'événement sur le bouton pour fermer la fenêtre
//close.addEventListener('click', closePopup);

          