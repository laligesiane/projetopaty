function copyLink() {

    var copyText = location.href;

    navigator.clipboard.writeText(copyText.value);

}


function shareLink() {

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

    el.innerHTML = '<button onclick="copyLink()">Copiar link</button>'

  }

}
