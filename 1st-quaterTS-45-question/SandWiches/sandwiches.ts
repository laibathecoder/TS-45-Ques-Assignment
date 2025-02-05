//Question NO : 44
//Sand Wiches

function sendWich(...ingrediens : string []):string []
{
    console.log("Add the following ingrediens to make the Sandwich:");


for (const ingredien of ingrediens)
    {
        console.log("- " + ingredien );
    } 


    console.log("Your Sandwich is ready,Now enjoy it:)");

return ingrediens;

}

sendWich("Chicken","Capsium","tomatos");
sendWich("Beef","onion","Ketchup");
sendWich("Egg","Fired potatos","chilligarlic soues");