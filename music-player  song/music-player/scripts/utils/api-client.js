// const getSongs =async (val)=>{
//     const URL = `https://itunes.apple.com/search?term=${val}&limit=10`;
//     const response = await fetch(URL);
//     const object = await response.json();
//     const songs = object['results'];
//     return songs; // wrap in promise
// }
// export default getSongs;


const getSongs = async (val) => {
    // iTunes API URL with the search term and a limit of 10 results
    const URL = `https://itunes.apple.com/search?term=${val}&limit=10`;

    try {
        // Fetch data from the API
        const response = await fetch(URL);

        // Convert response to JSON
        const object = await response.json();

        // Extract songs from the 'results' field in the response
        const songs = object['results'];

        // Return the songs array
        return songs;
    } catch (error) {
        // If an error occurs, log it and return an empty array
        console.error('Error fetching songs:', error);
        return [];
    }
};

export default getSongs;
