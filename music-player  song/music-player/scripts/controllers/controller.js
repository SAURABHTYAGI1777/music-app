// Mid Layer b/w View (HTML) and Model (data)
// Glue b/w View and Model


// import {getAllSong, songOperations} from "../models/song-service.js";
// const bindEvents = ()=>{
//   const searchButton = document.querySelector('#search-bt');
//    searchButton.addEventListener('click', doSearch); //search button per click event jodtha hai
//    printSongs(); //page per default song  load kertha   hai

// }
// window.addEventListener('load', bindEvents); // windo load event per bindevents kertha hai


// const doSearch = ()=>{
//   const val = document.querySelector('#search-box').value; //search box ka value leta hai
//   printSongs(val); //es value ke aader per song ko print kertha hai
// }
// const addOrRemoveToThePlayList = ()=>{
//   console.log("Add or Remove to the PlayList...");
// }
// const toggleToPlayList = ()=>{
//   // document - Page
//   // Element - <p> <div> <button> (Html elements)
//   const button = document.createElement('button'); //<button></button>
//   button.innerText = 'Add to PlayList';
//   button.addEventListener('click', addOrRemoveToThePlayList);
//   button.className = 'btn btn-success';
//   return button;
// }

// // MVC - Design pattern
//   songOperations.getAllSong ('sonu nigam').than( songs=>{
//     console.log(songs);
//   const div = document.getElementById('root');
//   div.innerHTML = '';
//     // 1. Bring the data with the help of service
//     //const songs = await getSongs(val);
//     try{
//     const songs = await getAllSong(val); // api call kerke song ki suchi latha hai
//     console.log('songs ', songs);
//     for(var i = 0; i<songs.length ; i++){
//         printSong(songs[i]); // har song ke liye printsong call kertha hai
//     }
//   }catch (error){
//     console.error('Error fetching songs:',error);
//     div.innerHTML = '<p> Failed to load songs . please try again later .</p>'
//   }
// })
// let previousSong ;
// //let currentSong ;
// const isPlayingSong = (event)=>{
  
//   if(previousSong){
//     previousSong.pause();
//     previousSong.currentTime = 0;
//   }
  
//   previousSong =  event.target;
//   //console.log('Is Playing Called...', event);
// }
// const printSong = (currentSong)=>{
//   // DOM 
//   const cardDiv = document.createElement('div'); // <div></div>
//   cardDiv.className = 'card me-2';
//   cardDiv.style.width = '18rem';
//   const image = document.createElement('img');
//   image.src =currentSong.imageurl;
//   image.className = 'card-img-top';
//   cardDiv.appendChild(image); //<div> <img/> </div>
//   const cardBody = document.createElement('div');
//   cardBody.className = 'card-body';
//   const h5 = document.createElement('h5');
//   h5.className = 'card-title';
//   h5.innerText = currentSong.name;
//   cardBody.appendChild(h5);
//   cardDiv.appendChild(cardBody);
//   const pTag = document.createElement('p');
//   pTag.className = 'card-text';
//   pTag.innerText= currentSong.desc;
//   cardBody.appendChild(pTag);
//   const audio = document.createElement('audio');// <audio>
//   audio.controls = true; // <audio controls>
//   audio.addEventListener('play',isPlayingSong); // <audio controls onplay="isPlayingSong()">
//   audio.src = currentSong.audiourl;
//   audio.type = 'audio/mpeg';
//   cardBody.appendChild(audio);
//   cardBody.appendChild(toggleToPlayList());
//   const div = document.getElementById('root');
//   div.appendChild(cardDiv);





//   //   const song = `<div class="card me-2" style="width: 18rem;">
//   //   <img src="${currentSong.artworkUrl100}" class="card-img-top" alt="...">
//   //   <div class="card-body">
//   //     <h5 class="card-title">${currentSong.trackName}</h5>
//   //     <p class="card-text">${currentSong.collectionName}</p>
//   //     <audio controls onplay=${isPlayingSong()}>
//   //       <source src="${currentSong.previewUrl}" type="audio/mpeg">
//   //     </audio>
//   //   </div>
//   // </div>`;
  
//   // div.innerHTML = div.innerHTML + song;
// }

//  2

// import { getAllSong, songOperations } from "../models/song-service.js";

// const bindEvents = () => {
//   const searchButton = document.querySelector('#search-bt');
//   searchButton.addEventListener('click', doSearch); // search button per click event jodhta hai
//   printSongs(); // page per default song load kertha hai
// };

// window.addEventListener('load', bindEvents); // window load event per bindEvents kertha hai

// const doSearch = () => {
//   const val = document.querySelector('#search-box').value; // search box ka value leta hai
//   printSongs(val); // is value ke aader per song ko print kertha hai
// };

// const addOrRemoveToThePlayList = () => {
//   console.log("Add or Remove to the PlayList...");
// };

// const toggleToPlayList = () => {
//   const button = document.createElement('button'); //<button></button>
//   button.innerText = 'Add to PlayList';
//   button.addEventListener('click', addOrRemoveToThePlayList);
//   button.className = 'btn btn-success';
//   return button;
// };

// // MVC - Design pattern
// const printSongs = async (val = "sonu nigam") => {
//   try {
//     // `await` is used here to wait for the song data
//     await songOperations.getAllSong(val); // api call kerke song ki suchi lata hai
//     const div = document.getElementById('root');
//     div.innerHTML = ''; // clear existing content
    
//     const songs = songOperations.musicsongs; // Use songs from songOperations
    
//     console.log('songs ', songs);

//     for (let i = 0; i < songs.length; i++) {
//       printSong(songs[i]); // har song ke liye printSong call kertha hai
//     }
//   } catch (error) {
//     console.error('Error fetching songs:', error);
//     const div = document.getElementById('root');
//     div.innerHTML = '<p> Failed to load songs. Please try again later.</p>';
//   }
// };

// let previousSong;

// // This function will pause any currently playing song before starting a new one
// const isPlayingSong = (event) => {
//   if (previousSong) {
//     previousSong.pause();
//     previousSong.currentTime = 0;
//   }
  
//   previousSong = event.target;
// };

// const printSong = (currentSong) => {
//   const cardDiv = document.createElement('div'); // <div></div>
//   cardDiv.className = 'card me-2';
//   cardDiv.style.width = '18rem';
  
//   const image = document.createElement('img');
//   image.src = currentSong.imageurl;
//   image.className = 'card-img-top';
//   cardDiv.appendChild(image); // <div> <img/> </div>
  
//   const cardBody = document.createElement('div');
//   cardBody.className = 'card-body';
  
//   const h5 = document.createElement('h5');
//   h5.className = 'card-title';
//   h5.innerText = currentSong.name;
//   cardBody.appendChild(h5);
  
//   cardDiv.appendChild(cardBody);
  
//   const pTag = document.createElement('p');
//   pTag.className = 'card-text';
//   pTag.innerText = currentSong.desc;
//   cardBody.appendChild(pTag);
  
//   const audio = document.createElement('audio');
//   audio.controls = true;
//   audio.addEventListener('play', isPlayingSong);
//   audio.src = currentSong.audiourl;
//   audio.type = 'audio/mpeg';
//   cardBody.appendChild(audio);
  
//   cardBody.appendChild(toggleToPlayList());
  
//   const div = document.getElementById('root');
//   div.appendChild(cardDiv);
// };


import { songOperations } from "../models/song-service.js"; // Import songOperations

const bindEvents = () => {
   const searchButton = document.querySelector('#search-bt');
   searchButton.addEventListener('click', doSearch); // Search button per click event jodhta hai
   printSongs(); // Page per default song load karta hai
}

window.addEventListener('load', bindEvents); // Window load event per bindEvents ko call karta hai

// doSearch ko async banaya jisme await ka use kar sake
const doSearch = async () => { 
   const val = document.querySelector('#search-box').value; // Search box ka value leta hai
   await printSongs(val); // await ka use karte hue printSongs ko call karte hain
}

// PlayList add/remove karne ka function
const addOrRemoveToThePlayList = () => {
   console.log("Add or Remove to the PlayList...");
}

// PlayList toggle button banane ka function
const toggleToPlayList = () => {
   const button = document.createElement('button'); //<button></button>
   button.innerText = 'Add to PlayList';
   button.addEventListener('click', addOrRemoveToThePlayList);
   button.className = 'btn btn-success';
   return button;
}

// printSongs ko async banaya taaki await ka use kar sake
const printSongs = async (val) => { 
   const div = document.getElementById('root');
   div.innerHTML = ''; // Pichli songs ko clean karte hain

   try {
      const songs = await songOperations.getAllSong(val); // Correctly await songOperations.getAllSong
      console.log('songs ', songs);
      for (let i = 0; i < songs.length; i++) {
         printSong(songs[i]); // Har song ke liye printSong call karte hain
      }
   } catch (error) {
      console.error('Error fetching songs:', error);
      div.innerHTML = '<p>Failed to load songs. Please try again later.</p>';
   }
}

let previousSong;

// Song play hone par, dusre song ko pause karna
const isPlayingSong = (event) => {
   if (previousSong) {
      previousSong.pause();
      previousSong.currentTime = 0;
   }
   previousSong = event.target;
}

// Song ko print karna
const printSong = (currentSong) => {
   const cardDiv = document.createElement('div');
   cardDiv.className = 'card me-2';
   cardDiv.style.width = '18rem';
   
   const image = document.createElement('img');
   image.src = currentSong.imageurl;
   image.className = 'card-img-top';
   cardDiv.appendChild(image);
   
   const cardBody = document.createElement('div');
   cardBody.className = 'card-body';
   
   const h5 = document.createElement('h5');
   h5.className = 'card-title';
   h5.innerText = currentSong.name;
   cardBody.appendChild(h5);
   
   const pTag = document.createElement('p');
   pTag.className = 'card-text';
   pTag.innerText = currentSong.desc;
   cardBody.appendChild(pTag);
   
   const audio = document.createElement('audio');
   audio.controls = true;
   audio.addEventListener('play', isPlayingSong);
   audio.src = currentSong.audiourl;
   audio.type = 'audio/mpeg';
   cardBody.appendChild(audio);

   // Add to playlist button
   cardBody.appendChild(toggleToPlayList());
   
   cardDiv.appendChild(cardBody);
   const div = document.getElementById('root');
   div.appendChild(cardDiv);
};
