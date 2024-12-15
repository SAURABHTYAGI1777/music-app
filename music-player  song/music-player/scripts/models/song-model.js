//name, desc, audio url, image url
class SongModel{
    constructor(id, name, desc, audiourl, imageurl){
        // object - instance of a class
        // this - keyword 
        // refer to the current calling object
        // instance member = Local Variable
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.audiourl = audiourl;
        this.imageurl = imageurl;
        this.isInPlayList = false;
    }
}
export default SongModel;