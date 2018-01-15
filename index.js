function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  let lis = document.getElementById('app').querySelectorAll('ul.unranked-list li')
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i]) + n
  }
}

function deepestChild() {
  
}