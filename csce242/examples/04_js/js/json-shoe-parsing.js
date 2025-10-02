const getShoes = async() =>{ //asynchronous method
    const url ="https://portiaportia.github.io/json/shoes.json";

    try{
        const response = await fetch(url); //wait to get response from url
        return response.json(); //take response and get json
    }
    catch(error)
    {
        console.log("error");
    }
};

const showShoes = async() =>{
    const shoes = await getShoes(); //have to wait for shoes to fill out
    const shoelist = document.getElementById("shoe-list");

    shoes.forEach((shoe)=>{
        //make section for each shoe, put all data in
        //append to shoe list
        const section = document.createElement("section");
        let name = document.createElement("p");
        name.innerHTML=`${shoe.name}`;
        let brand = document.createElement("p");
        brand.innerHTML=`Brand: ${shoe.brand}`;
        let price = document.createElement("p");
        price.innerHTML=`${shoe.price}`;
        let description = document.createElement("p");
        description.innerHTML=`${shoe.description}`;
        description.style.fontSize="x-small";
        section.classList.add("shoe");

        const ul = document.createElement("ul");
        //loop through reviews ul li list
        shoe.reviews.forEach((review)=>{
            let li = document.createElement("li");
            li.innerHTML=`${review}`;
            ul.append(li);
        })

        //img:  img.src=`https://portiaportia.github.io/json/${shoe.img}`
        section.append(name);
        section.append(brand);
        section.append(description);
        section.append(price);
        section.append(ul);

        shoelist.append(section);


        console.log(shoe.name);


    });
};

showShoes();