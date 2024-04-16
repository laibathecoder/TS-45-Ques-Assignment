//Question NO : 42
//Great Magisions

function make_great(magicians : string[]):void{
    
  for(let i = 0; i < magicians.length; i++)
  {
      magicians[i] = magicians[i] + " the Great."
  }
}


function show_magicians(magicians : string[]):void{
    
  for( const magician of magicians)
  {
      console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}

const magician :string [] = ["Lil Nas X","Jack","Yiruma","Olly Murs"];

show_magicians(magician);

make_great(magician);
show_magicians(magician);
  


