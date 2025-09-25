document.getElementById("display").onclick = () =>{
    const section = document.getElementById("loop-results");
    const ul=document.createElement("ul");
    section.append(ul);

    //loop
    for(let i=0; i<10; i++){
        const li = document.createElement("li");
        li.innerHTML=`${i} thing`;
        ul.append(li);
    }
    //6 sections for clouds with class of cloud, css art to make cloud, day+night class
}

document.getElementById("count").onclick = () =>{
    const error = document.getElementById("error-number");
    error.innerHTML="";

    const startNum = parseInt(document.getElementById("start").value);
    const endNum = parseInt(document.getElementById("end").value);

    const div = document.getElementById("d-count");
    div.innerHTML="";

    if(startNum>endNum){
        error.innerHTML="*second num has to be larger than first";
        return;
    }

    //loop every num from start to end display the num in paragraphs
    for(let i=startNum; i<=endNum; i++){
        const p = document.createElement("p");
        p.innerHTML=i;
        div.append(p);
        p.onclick=()=>{
            console.log(`you clicked num ${i}`);
        }
    }
}

document.getElementById("toy-btn").onclick=()=>{
    const toyList = document.getElementById("toys");
    toyList.innerHTML="";

    const toys = ["ball", "jumprope", "doll", "car", "elmo"];
    //first way to iterate, iterate over array and add lis to uls
    // for(let i=0; i<toys.length; i++){
    //     const toyli=document.createElement("li");
    //     toyli.innerHTML=toys[i];
    //     toyList.append(toyli);
    // }

    //second way preferred
    //foreach takes function as parameter
    toys.forEach((toy, i)=>{
        const li = document.createElement("li");
        li.innerHTML=toy;
        toyList.append(li);
    });
}

document.getElementById("toy-show-btn").onclick=()=>{
    const toys =[];
    toys["ball"] = 2.99;
    toys["barbie"] = 19.99;
    toys["jumprope"]= 1.98;
    toys["car"]= 2.54;
    //associative array doesnt work with foreach
    let toydiv=document.getElementById("toy-prices");
    toydiv.innerHTML="";
    //for in loop
    const pricep = document.getElementById("prices");
    pricep.innerHTML="";

    for(let toy in toys){
        const para = document.createElement("p");
        para.innerHTML=`${toy}`;
        toydiv.append(para);

        para.onclick=()=>{
            pricep.innerHTML=`${toy} costs ${toys[toy]}`;
        };
    };
};
//associative arrays, dog1=src, separate arrays for before and after