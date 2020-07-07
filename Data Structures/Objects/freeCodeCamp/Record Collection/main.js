var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

function updateRecords(id, prop, value) {
    
    if(prop !== 'tracks' && value !== ''){
        collection[id][prop] = value;
    }else{
        if(value === ''){
            delete collection[id][prop];
        } else{
            if(prop === 'tracks' && !collection[id].hasOwnProperty(prop)){
                collection[id]['tracks'] = [];
                collection[id]['tracks'].push(value);
            } else{
                collection[id]['tracks'].push(value);
            }
        }
    }

  return collection;
  }

console.log(updateRecords(1245, "tracks", "Addicted to Love"));
console.log(updateRecords(1245, "album", "bla de blá"));
console.log(updateRecords(2468, "tracks", "Bla bla"));
console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(5439, "tracks", ""));
console.log(updateRecords(5439, "tracks", "bla nice music"));
console.log(updateRecords(5439, "artist", "Super Bla"));