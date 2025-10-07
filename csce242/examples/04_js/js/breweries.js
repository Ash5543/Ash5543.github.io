const getBreweries=async()=>{
    const url = "https://api.openbrewerydb.org/v1/breweries";

    try{
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log(error);
    }
};

const showBreweries = async()=>{
    const breweries = await getBreweries();
    const breweriesSection = document.getElementById("breweries");
    breweries.forEach((pub)=>{
        const section = document.createElement("section");
        section.classList.add("brewery");
        breweriesSection.append(section);

        const h3 = document.createElement("h3");
        section.append(h3);
        const a = document.createElement("a");
        h3.append(a);
        a.innerHTML=pub.name;
        a.href=pub.website_url;

        const pType=document.createElement("p");
        section.append(pType);
        pType.innerHTML=pub.brewery_type;
    });
};

showBreweries();