//Question NO : 43
//Unchanged Magicians


function make_great2(magicians : string[]){

    const greatMagicians : string [] = []

    for(let i = 0; i < magicians.length; i++)
    {
        greatMagicians.push(magician[i] + ' the Great');
    }

    return greatMagicians;
  }

  function show_magicians(magicians : string[]):void{
    
    for( const magician of magicians)
    {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
  }
  

  const magician :string [] = ["Lil Nas X","Jack","Yiruma","Olly Murs"];
  
  const greatMagicians : string[] = make_great2(magician);

  show_magicians(magician);
  show_magicians(greatMagicians);

  

