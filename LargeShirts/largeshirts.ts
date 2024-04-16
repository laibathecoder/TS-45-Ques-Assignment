//Question NO : 37
//Large Shirts

function makeShirt
(
    size : string = "large",
    massage : string = "I love TypeScript"
)
{ 

    console.log(
        `You orderd ${size} size t-shirt , that shows the massage ${massage}`
    );
}


makeShirt();

makeShirt("medium");

makeShirt('"Small"','"I love Pakistan."');
