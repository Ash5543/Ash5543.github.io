const getSandwiches=async()=>{
    const url = "https://ash5543.github.io/csce242/projects/part6/json/sandwiches.json"
    try{
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log(error);
    }
};

const showSandwiches=async()=>{
    const sandwiches = await getSandwiches();
    const hotmenu = document.getElementById("hot-menu");
    const coldmenu = document.getElementById("cold-menu");

    sandwiches.forEach((sandwich)=>{
        const section = document.createElement("section");
        section.classList.add("menu-option");
        const img = document.createElement("img");
        img.src=`json/images/${sandwich.img}`;
        const h3 = document.createElement("h3");
        h3.innerHTML=sandwich.name;
        section.append(img);
        section.append(h3);
        if(sandwich.hot=="true"){
            hotmenu.append(section);
        }
        else{
            coldmenu.append(section);
        }
        section.onclick=()=>{
            const popup = document.createElement("div");
            popup.classList.add("popup-background");
            const popupcontent = document.createElement("div");
            popupcontent.classList.add("popup");

            const name = document.createElement("h2");
            name.innerHTML=sandwich.name;
            popupcontent.append(name);

            const label = document.createElement("h3");
            label.innerHTML="Toppings:";
            popupcontent.append(label);

            //toppings
            sandwich.toppings.forEach((topping, index)=>{
                const choice = document.createElement("input");
                choice.type = "checkbox";
                choice.id = `${index}`;
                choice.value = topping;

                const label = document.createElement("label");
                label.htmlFor = choice.id;
                label.innerHTML = topping;
                popupcontent.append(choice);
                popupcontent.append(label);

                const br = document.createElement("br");
                popupcontent.append(br);
            });

            const span = document.createElement("span");
            span.classList.add("x-button");
            span.classList.add("topright");
            span.innerHTML="&times;";
            popupcontent.append(span);
            span.onclick=()=>{
                popup.style.display="none";
            };


            popup.append(popupcontent);
            popup.style.display="block";

            document.getElementById("menu").append(popup);
        };
    });
}

showSandwiches();
