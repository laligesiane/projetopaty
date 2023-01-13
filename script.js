function copyLink() {
    
  let idButton = document.getElementsByClassName('button')
  
  console.log(idButton.length)

  if (idButton.length > 1) {
  
    const element = document.getElementById('copy1');
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

  const element = document.getElementById('copy1');
  element.remove();

} else { 

  const el = document.createElement('div');

  let button = document.getElementById('button-share');

  insertAfter(el, button.lastElementChild);

  el.setAttribute('id','copy1');

  el.classList.add( 'copy-link','label');

  el.innerHTML = '<button onclick="copyLink(this)" class="button ph-share-thin icon-button-hove" ></button><button class="ph-whatsapp-logo-thin icon-button-hove"></button>';

}


}
