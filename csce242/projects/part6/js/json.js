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
    console.log(sandwiches);
}

showSandwiches();

//json reading into array

//initializing