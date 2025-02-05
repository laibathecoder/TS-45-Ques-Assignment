//Question NO : 32
//Checking Users Names.

let current_Users : string [] = ["Admin","Laiba Naz","Eirc","Jhon","Ben"];

let new_users : string [] = ["Admin","Bob","Laiba Naz","Tom","Herry"];

let current_users_list : string [] = current_Users.map(user => user.toLowerCase());

 for( let new_user of new_users)
    {
       if (current_users_list .includes (new_user.toLowerCase()))
        {
            console.log(`Sorry ${new_user} , that name is already taking.`);
        } else {
            console.log(`Yes ${new_user} , is still in avaliable list.`);
        }
    }