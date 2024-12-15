// import getSongs from "../utils/api-client.js";
// import SongModel from "./song-model.js";

// export const songOperations = {
//    musicsongs: [],  // Array to store all songs

//    // Function to get all songs for a particular singer
//    getAllSong: async (singerName) => {
//       try {
//          // Fetch songs using getSongs method (api call)
//          const songs = await getSongs(singerName);

//          // Map fetched songs to SongModel instances
//          const allSongs = songs.map(song => {
//              return new SongModel(song.trackId, song.trackName, song.collectionName, song.previewUrl, song.artworkUrl100);
//          });

//          // Store the songs in musicsongs array
//          songOperations.musicsongs = allSongs;

//          // Log the songs (optional)
//          console.log('All Songs ', allSongs);

//          // Return the array of all songs
//          return allSongs;
//       } catch (error) {
//          // Handle errors if the API call fails
//          console.error('Error fetching songs:', error);
//          return [];  // Return an empty array in case of error
//       }
//    }
// };


// import getSongs from "../utils/api-client.js";
// import SongModel from "./song-model.js";

// export const songOperations = {
//    musicsongs: [],
//    getAllSong: async (singerName) => {
//       try {
//          const songs = await getSongs(singerName);
//          const allSongs = songs.map(song => {
//             return new SongModel(song.trackId, song.trackName, song.collectionName, song.previewUrl, song.artworkUrl100);
//          });
//          songOperations.musicsongs = allSongs;
//          console.log('All Songs ', allSongs);
//          return allSongs;
//       } catch (error) {
//          console.error('Error fetching songs:', error);
//          return [];
//       }
//    }
// };

// // Export `getAllSong` as part of `songOperations`
// export { songOperations };
   

// song-service.js
import getSongs from "../utils/api-client.js";
import SongModel from "./song-model.js";

export const songOperations = {  // Named export of songOperations
   musicsongs: [],
   getAllSong: async (singerName) => {
      try {
         const songs = await getSongs(singerName);
         const allSongs = songs.map(song => {
             return new SongModel(song.trackId, song.trackName, song.collectionName, song.previewUrl, song.artworkUrl100);
         });
         songOperations.musicsongs = allSongs;
         console.log('All Songs ', allSongs);
         return allSongs;
      } catch (error) {
         console.error('Error fetching songs:', error);
         return [];
      }
   }
};

