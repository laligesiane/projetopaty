function copyLink() {
    
  let idButton = document.getElementsByClassName('share-button')
  
  console.log(idButton.length)

  if (idButton.length > 1) {
  
    const element = document.getElementById('copy');
    element.remove();

  } else { 
        
    var url = location.href;

    navigator.clipboard.writeText(url);

    alert("Link copiado para área de transferência");

  }
}


function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}


function shareLink() {

  let el = document.getElementById("copy");

  if (el.classList.contains("hidden")) {
    document.getElementById("copy").classList.add('visible');
    document.getElementById("copy").classList.remove('hidden');
    } else {
      closeNav();
  }
}

function closeNav() {
  document.getElementById("copy").classList.remove('visible');
  document.getElementById("copy").classList.add('hidden');
}


function shareUrlWhatsapp(){
  var url = location.href;
  var text = ['teste'];
  var link = 'https://api.whatsapp.com/send?text='+url;
  window.open(link);
}

function shareUrlTelegram(){
  var url = location.href;
  var text = ['teste'];
  var link = '  https://t.me/share/url?url='+url+'&text=';
  window.open(link);
}