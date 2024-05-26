// API Collection
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://api.nasa.gov/planetary/apod?api_key=X1xQxpVTOwpDJUllNfZ4INksYfkm8RJe3lZDUMkd'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });