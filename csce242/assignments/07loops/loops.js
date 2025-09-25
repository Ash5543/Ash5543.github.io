document.getElementById("scene").onclick=()=>{
    //trees
    let trees = document.getElementById("trees");
    trees.innerHTML="";
    for(i=0;i<6;i++){
        const tree = document.createElement("div");
        tree.classList.add("tree");

        const leaves = document.createElement("div");
        leaves.classList.add("leaves");

        const trunk = document.createElement("div");
        trunk.classList.add("trunk");

        
        let position = 40 + (200*i);
        tree.style.left=`${position}px`;
        tree.append(trunk);
        tree.append(leaves);
        trees.append(tree)
    }

    //clouds
    let clouds=document.getElementById("clouds");
    clouds.innerHTML="";
    for(i=0;i<6;i++){
        const cloud=document.createElement("div");
        cloud.classList.add("cloud");

        const cloudone=document.createElement("div");
        cloudone.classList.add("cloudone");

        const cloudtwo=document.createElement("div");
        cloudtwo.classList.add("cloudtwo");

        const cloudthree=document.createElement("div");
        cloudthree.classList.add("cloudthree");

        let cloudpos = 200*i;
        cloud.style.left=`${cloudpos}px`;
        cloud.append(cloudone);
        cloud.append(cloudtwo);
        cloud.append(cloudthree);
        clouds.append(cloud);
    }

    //time
    const time = new Date();
    let h = time.getHours();
    if(6<=h<18){
        document.getElementById("body").style.background="darkblue";
        document.getElementById("sun").style.background="white";
        document.getElementById("moon").classList.remove("hidden");
    }
    else{
        document.getElementById("body").style.background="lightblue";
        document.getElementById("sun").style.background="yellow";
    }
};