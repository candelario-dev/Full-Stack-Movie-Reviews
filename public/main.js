

// document.querySelector('#btn').addEventListener('click', function () {
document.querySelector('#btn').onclick = getMovie

function getMovie(){
 let movieKey = Math.floor(Math.random()*999)
fetch(`https://api.themoviedb.org/3/movie/${movieKey}?api_key=d4c84d13fa174965464cf05de8021286`) //Put those flags bc I don't play like that
  .then(response => response.json())
  .then(data => {
      if (data.success == false){
        getMovie()
      }else{
      document.getElementById('movieTitle').innerHTML = data.title
      document.getElementById('desc').innerHTML = data.overview
      document.getElementById('tag').innerHTML = data.tagline
      console.log(data); //Just so it shows in the console.
    }
    }) //closes the .then for the data

} //{closes the function and ( closes the parameters in query selector




var thumbUp = document.getElementsByClassName("fa-star");
var thumbDown = document.getElementsByClassName("fa-poo")
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('thumbDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
