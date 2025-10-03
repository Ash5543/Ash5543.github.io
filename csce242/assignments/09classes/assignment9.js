class Painting{
    constructor(name, artist, image, frame){
        this.name=name;
        this.artist=artist;
        this.image=image;
        this.frame=frame;
    }

    get item(){
        //title + image in this in an html section
        //when title or image is clicked then popup shows up
        const section = document.createElement("section");
        section.classList.add("painting");
        const h2 = document.createElement("h2");
        h2.innerHTML=this.name;
        section.append(h2);

        const img = document.createElement("img");
        img.src=`images/${this.image}`;
        section.append(img);

        section.onclick=()=>{
            const modal = document.createElement("div");
            modal.classList.add("w3-modal");
            const modalcontent = document.createElement("div");
            modalcontent.classList.add("w3-modal-content");


            const span = document.createElement("span");
            span.classList.add("w3-button");
            span.classList.add("w3-display-topright");
            span.innerHTML="&times;";
            modalcontent.append(span);
            span.onclick=()=>{
                modal.style.display="none";
            };

            const name = document.createElement("h3");
            name.innerHTML=this.name;
            modalcontent.append(name);

            const author = document.createElement("h3");
            author.innerHTML=`By: ${this.artist}`;
            modalcontent.append(author);

            const img = document.createElement("img");
            img.src = `images/${this.image}`;
            modalcontent.append(img);

            modalcontent.style.paddingBottom="15px";
            modalcontent.style.background="#8AA1B1";
            modal.append(modalcontent);
            modal.style.display="block";

            if(this.frame=="true"){
                img.classList.add("frame");
            }

            document.getElementById("content").append(modal);
        };


        return section;
    }
}


const paintings = [];
paintings.push(new Painting("Starry Night","Vincent van Gogh","starry-night.jpg","true"));
paintings.push(new Painting("Mona Lisa","Leonardo da Vinci","mona-lisa.jpg","false"));
paintings.push(new Painting("Girl with the Pearl Earring","Johannes Vermeer","pearl-earring.webp","true"));
paintings.push(new Painting("American Gothic","Grant Wood","american-gothic.jpg","false"));
paintings.push(new Painting("The Son of Man", "Rene Margritte", "son-of-man.jpg", "false"));


const paintinglist = document.getElementById("paintings");
paintings.forEach((painting)=>{
    paintinglist.append(painting.item);
});
    //create each painting section




