document.getElementById('bored-bot').addEventListener('click', getIdea)

function getIdea() {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then(res => res.json())
    .then(data => {
      document.body.classList.add('fun')
      document.getElementById('idea').textContent = data.activity
      document.getElementById('title').textContent = "🦾 HappyBot🦿"
    })
}

// fetch('https://dog.ceo/api/breeds/image/random')
//   .then(res => res.json())
//   .then(data => {
//     const imgSpt = document.createElement('img')
//     imgSpt.src = data.message
//     document.body.appendChild(imgSpt)

//   })
