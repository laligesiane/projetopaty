function copyLink() {
    
  let idButton = document.getElementsByClassName('share-button')
  
  console.log(idButton.length)

  if (idButton.length > 1) {
  
    const element = document.getElementById('copy');
    element.remove();

  } else { 
        
    var url = location.href;

    navigator.clipboard.writeText(url);

  }
}


function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}


function shareLink() {

let classDiv = document.getElementsByClassName('copy-link')

if (classDiv.length > 0) {

  const element = document.getElementById('copy');
  element.remove();

} else { 

  const el = document.createElement('div');

  let button = document.getElementById('div-share-button');

  insertAfter(el, button.lastElementChild);

  el.setAttribute('id','copy');

  el.classList.add( 'copy-link','label');

  el.innerHTML = '<button onclick="copyLink(this)" class="ph-share-thin"></button><button class="ph-whatsapp-logo-thin"></button><button class="ph-telegram-logo-thin"></button>';

}


}
