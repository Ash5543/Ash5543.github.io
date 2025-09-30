//array of paintings


class Dog{
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed= breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("dog");

        //header
        const h3 = document.createElement("h3");
        h3.innerHTML=this.title;
        section.append(h3);
        const arrow = document.createElement("a");
        arrow.href="#";
        arrow.innerHTML="&#x2964"
        h3.append(arrow);

        const column = document.createElement("div");
        column.classList.add("columns");
        column.style.padding="10px";
        const columnone = document.createElement("div");
        columnone.append(this.picture(this.pic));

        column.append(columnone);


        const columntwo = document.createElement("div");
        

        columntwo.append(this.paragraph("breed", this.breed));
        columntwo.append(this.paragraph("age", this.age));
        columntwo.append(this.paragraph("size", this.size));
        columntwo.classList.add("transparent");
        column.append(columntwo);

        section.append(column);


        arrow.onclick=(e)=>{
            e.preventDefault(); //dont go to destination of link
            columntwo.classList.toggle("transparent");
        };


        return section;
    }

    picture(filename){
        const img = document.createElement("img");
        img.src = `images/classes/${filename}`;
        return img;
    }

    paragraph(key, value){
        const p = document.createElement("p");
        p.innerHTML=`<strong>${key}:</strong> ${value}`;
        return p;
    }

}

const dogs = [];

dogs.push(new Dog("coco", "yorkie", "black", 6, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "golden retriever", "yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("gerald", "pit bull", "white", 3, "large", "pitt-bull.jpg"));

//on page load
const doglist = document.getElementById("dog-list");
dogs.forEach((dog)=>{
    doglist.append(dog.item);

});
