function copyLink() {
    
<<<<<<< HEAD
  let idButton = document.getElementsByClassName('copy-link')
  console.log(idButton.length)

      if (idButton.length > 1) {
    
      const element = document.getElementById('copy1');
      element.remove();

  } else { 
      
      var url = location.href;

      navigator.clipboard.writeText(url);
  }
=======
    let idButton = document.getElementsByClassName('copy-link')
    console.log(idButton.length)

        if (idButton.length > 1) {
      
        const element = document.getElementById('copy1');
        element.remove();

    } else { 
        
        var url = location.href;

        navigator.clipboard.writeText(url);
>>>>>>> b37165c68794896e60301f013c2da4dc90c22320
}


function shareLink() {

<<<<<<< HEAD
let classDiv = document.getElementsByClassName('copy-link')

console.log(classDiv.length)

if (classDiv.length > 0) {

  const element = document.getElementById('copy1');
  element.remove();

} else { 

  const el = document.createElement('div');

  let button = document.getElementById('button-share')

  let parentDiv = button.parentNode

  parentDiv.insertBefore(el,button)

  el.setAttribute('id','copy1')

  el.classList.add('bottom', 'copy-link','label');

  el.innerHTML = '<button id="button" onclick="copyLink()">Copiar link</button>'

}
=======
  let classDiv = document.getElementsByClassName('copy-link')

  console.log(classDiv.length)

  if (classDiv.length > 0) {

    const element = document.getElementById('copy1');
    element.remove();

  } else { 

    const el = document.createElement('div');

    let button = document.getElementById('button-share')

    let parentDiv = button.parentNode

    parentDiv.insertBefore(el,button)

    el.setAttribute('id','copy1')

    el.classList.add('bottom', 'copy-link','label');
  
    el.innerHTML = '<button id="button" onclick="copyLink()">Copiar link</button>'

  }
>>>>>>> b37165c68794896e60301f013c2da4dc90c22320

}
