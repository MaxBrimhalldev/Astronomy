// API Collection
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://api.nasa.gov/planetary/apod?api_key=X1xQxpVTOwpDJUllNfZ4INksYfkm8RJe3lZDUMkd'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
		if(data.media_type === 'image'){
			document.querySelector('img').src = data.hdurl
		}else{
			document.querySelector('iframe').src = data.url
		}
		
		document.querySelector('#description').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}