/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropFunction() {
    document.getElementById("content").classList.toggle("show");
  }
  // Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) {
    if (!event.target.matches('.side-icon')) {
      var dropdowns = document.getElementsByClassName("menu-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
//   here the mani play code starts 
console.log("welcom to  my song world");
// these are all variables required
let index = 0;
let audioelement = new Audio("/Tera Ho Raha Hoon.mp3"); 
let masterplay = document.getElementById("masterplay");
let progress_bar = document.getElementById("my-progressbar");
let gif = document.getElementById("gif");
let songchange =document.getElementsByClassName('songchange');
let main_song_name =document.getElementById("main-song-name");
let banner = document.getElementById('song-banner-img');
let name_side = document.getElementById('name-side');
let song_banner_side = document.getElementsByClassName('song-banner-side');
let timestam = document.getElementById('time-duration');
let list_time =document.getElementById('time');
let vol =document.getElementById('volume-bar');
var min = 0;
var sec = 0;
let tottime = parseInt(audioelement.duration);
let curtime = parseInt(audioelement.currentTime)
var mintime = tottime - curtime;
min = parseInt(mintime/60);
sec = mintime%60;
var tet = [min,sec];

// song list
let songs = [
  { songname: "Tera Ho Raha Hoon", path: "/songs/Tera Ho Raha Hoon.mp3", coverpath:"/image/song-img/song-1.jpg" , duration:"3,40"},
  { songname: "Devbhoomi Jubin Nautiyal", path: "/songs/Devbhoomi Jubin Nautiyal.mp3", coverpath:"/image/song-img/song-2.jpg" , duration:"2,40"},
  { songname: "Door Hoke Bhi Anurag Mohn", path: "/songs/Door Hoke Bhi Anurag Mohn.mp3", coverpath:"/image/song-img/song-3.jpg" , duration:"4,28"},
  { songname: "Srivalli Remixremix", path: "/songs/Srivalli Remixremix By Dj Kiran Kamath.mp3", coverpath:"/image/song-img/song-4.jpg" , duration:"3,21"},
  { songname: "Desh Mere Bhuj The Pride Of India", path: "/songs/Desh Mere Bhuj The Pride Of India.mp3", coverpath:"/image/song-img/song-5.jpg" , duration:"3,23"},
]
let song_item  = Array.from(document.getElementsByClassName("song-list-item"));


song_item.forEach((element, i)=>{
  // console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("name")[0].innerText = songs[i].songname;
  element.getElementsByClassName("time")[0].innerText = songs[i].duration;  
})


const makeallplays = ()=>{
  Array.from(document.getElementsByClassName('songchange')).forEach((element) => {
    element.classList.add('fa-play');

  })

}





  Array.from(document.getElementsByClassName('songchange')).forEach((element) => {
    element.addEventListener('click', (e) => {
      makeallplays();
      index = parseInt(e.target.id);
      audioelement.src = songs[index].path;
      // console.log(audioelement.src);
      
      audioelement.currentTime = 0;
     
      main_song_name.innerText = songs[index].songname;
      name_side.innerText = songs[index].songname;
      banner.src = songs[index].coverpath;
      
      if (e.target.classList.contains('make-play')){
        audioelement.play();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        e.target.classList.remove('make-play');
        e.target.classList.add('make-pause');
        gif.style.opacity = 1;
        if (audioelement.paused || audioelement.currentTime <= 0) {
    
          audioelement.play();
          masterplay.classList.remove('fa-play');
          masterplay.classList.add('fa-pause');
          gif.style.opacity = 1;
        }
      }
      else{
        // alert("play e")
        audioelement.pause();
        e.target.classList.remove('fa-pause');
        e.target.classList.add('fa-play');
        e.target.classList.remove('make-pause');
        e.target.classList.add('make-play');
        gif.style.opacity = 0;
        // alert("else class")
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
   

    });
  });
    

      

    
    // listen time event
    audioelement.addEventListener('timeupdate', () => {
      progress = parseFloat(audioelement.currentTime / audioelement.duration) * 100;
      progress_bar.value = progress;
      let tottime = parseInt(audioelement.duration);
      let curtime = parseInt(audioelement.currentTime);
      var mintime = 0;
      mintime = tottime - curtime;
      var min = 0;
      min = parseInt(mintime / 60);
      var sec = 0;
      sec = mintime % 60;
      var tet = [min, sec];
      
      timestam.innerText = tet;
    });
    progress_bar.addEventListener('change', () => {
      audioelement.currentTime = parseFloat(progress_bar.value * audioelement.duration / 100);
    });
    // volume- bar work
    vol.addEventListener('change',()=>{
      audioelement.volume = parseFloat(vol.value/100);
      console.log(vol.value/100);
    })
    //working of play pause button
    masterplay.addEventListener('click',()=>{
      if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
      }
      else {
        
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
      
        Array.from(document.getElementsByClassName('songchange')).forEach((element) => {
          if (element.target.classList.contains('fa-pause')){
            if (element.target.classList.contains('make-play')){
              alert("play if")
              element.target.classList.remove('fa-play');
              element.target.classList.add('fa-pause');
              element.target.classList.remove('make-play');
              element.target.classList.add('make-pause');
              gif.style.opacity = 1;
            }
            else{
              alert("play e")
              element.target.classList.remove('fa-pause');
              element.target.classList.add('fa-play');
              element.target.classList.remove('make-pause');
              element.target.classList.add('make-play');
              gif.style.opacity = 0;
              // alert("else class")
              masterplay.classList.remove('fa-pause');
              masterplay.classList.add('fa-play');
              gif.style.opacity = 0;
          }

          }
          
        });
      }
    });
    document.getElementById("backward").addEventListener("click", () => {
      if (index <= 1) {
        index = songs.length;
      }
      else {
        index -= 1;
      }
      audioelement.src = songs[index].path;
      audioelement.play();
      audioelement.currentTime = 0;
      masterplay.classList.remove('fa-play');
      masterplay.classList.add('fa-pause');
      gif.style.opacity = 1;
      main_song_name.innerText = songs[index].songname;
      banner.src = songs[index].coverpath;
      name_side.innerText = songs[index].songname;
    });
    document.getElementById("forward").addEventListener("click", () => {
      if (index >= songs.length) {
        index = 0;
      }
      else {
        index += 1;
      }
      audioelement.src = songs[index].path;
      audioelement.play();
      audioelement.currentTime = 0;
      masterplay.classList.remove('fa-play');
      masterplay.classList.add('fa-pause');
      gif.style.opacity = 1;
      main_song_name.innerText = songs[index].songname;
      banner.src = songs[index].coverpath;
      name_side.innerText = songs[index].songname;

    });
  




