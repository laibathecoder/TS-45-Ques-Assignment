//Question NO : 40
//ALBUM

function makeAlbum(
    artist : string , 
    title : string , 
    tracks : number
): 
Record <string,any>
{
    return{artist, title, tracks}
}

let album = makeAlbum("Alan Walker","Faded", 12);

let album2 = makeAlbum("Camila Cabello","Havana",18);

let album3 = makeAlbum("Imagine Dragons","Baliever",28);

console.log(album);

console.log(album2);

console.log(album3);

