var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Caged",
                   album: "Woodstock 1952"}
          },


  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },



// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

 printPlaylists: function () {

  for ( var itemOfPlaylist in this.playlists){

//console.log(itemOfPlaylist)
var a = itemOfPlaylist
//console.log(library.playlists[itemOfPlaylist].name)
var b=this.playlists[itemOfPlaylist].name
//console.log(library.playlists[itemOfPlaylist].tracks.length)
var c =this.playlists[itemOfPlaylist].tracks.length
console.log(a +':' + b +'-'+c+'tracks' )

  }
},




// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printTracks: function () {

for (var itemOfTrack in this.tracks){

var a = itemOfTrack
var b = this.tracks[itemOfTrack].name
var c = this.tracks[itemOfTrack].artist
var d = this.tracks[itemOfTrack].album
console.log(a+": "+b+" by "+c + '('+d+')')
}


},



// prints a list of tracks for a given playlist, in the form:
//printPlaylist("p01") -->
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

printPlaylist:function (playlistId) {

var a =this.playlists[playlistId].id
var b=this.playlists[playlistId].name
var c= this.playlists[playlistId].tracks.length
console.log(a+':'+b+'-'+c+'tracks')


for (var trackId of this.playlists[playlistId].tracks){
 var a =trackId

 var b= this.tracks[trackId].name
 var c= this.tracks[trackId].artist
  var d= this.tracks[trackId].album
console.log(a+": "+b+" by "+c + '('+d+')')

}


},








// adds an existing track to an existing playlist

addTrackToPlaylist: function (trackId, playlistId) {

this.playlists[playlistId].tracks.push(trackId)


},



// generates a unique id
// (use this for addTrack and addPlaylist)





// adds a track to the library

addTrack:function (songName, artist, album) {
var newId = uid();
this.tracks[newId] = { id: newId,
                          name: songName,
                          artist: artist,
                          album: album}

console.log(this.tracks)
},




// adds a playlist to the library

addPlaylist: function (name) {
  var newId=uid();
  this.playlists[newId]={'id':newId,
                            'name':name}

console.log(this.playlists)
  }


}
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search



