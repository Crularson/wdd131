let selectelem = document.querySelector('.menu-btn');
const nav = document.querySelector('nav')
const gallery = document.querySelector('.workColumns');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

selectelem.addEventListener('click',ViewMenu);

function ViewMenu()
{
    nav.classList.toggle('navdisplay')
}

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    if(e.target.tagName != 'IMG'){
        console.log('SKIP')
        return;
    }
    else
        {
            modalImage.src = e.target.src.replace("-sm","-full")
            modal.showModal()
    }
// Code to show modal  - Use event parameter 'e'   
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});