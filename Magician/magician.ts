//Question NO : 41
//Magician

function show_magicians(magicians : string[]):void{
    
    for( const magician of magicians)
    {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician :string [] = ["Lil Nas X","Jack","Yiruma","Olly Murs"];

show_magicians(magician);

