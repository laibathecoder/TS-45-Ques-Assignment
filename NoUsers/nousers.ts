//Question NO : 31
// No Users

let usernames : string [] = ["Admin","Eric","Laiba Naz","Jhon","Ben"];

usernames = []  // For Empty Array Result.

if (usernames.length === 0) 
    {
        console.log("We need to find some users!");
    } 
    else {
        for (let username of usernames)
            {
               if (username === "Admin")
                {
                    console.log("Hello admin, would you like to see a status report?");

                } else {`Hello ${username} , Thank you for logging again.`}


            }

        }