window.onload = async function () {
  if (!/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert('이 페이지는 모바일 환경에 최적화된 페이지입니다')
  }   

  const data = await fetch('/calendar.json').then(function(res) { return res.json() })
  document.getElementById('room').onchange = function (ev) {
    renderTables(data[Number(ev.target.value)])
  }
}

function renderTables (data) {
  try {document.getElementsByClassName('display-none')[0].classList.remove('display-none')} catch (_){}

  const elems = document.getElementsByClassName('table')

  for (let index = 0; index < elems.length; index++) {
    elems[index].innerHTML = ''

    for (let time = 0; time < data[index].length; time++) {
      if (!data[index][time]) elems[index].innerHTML += `<li>&nbsp;</li>`
      else elems[index].innerHTML += `<li>${time + 1}교시: ${data[index][time]}</li>`
    }
  }
}
