AFRAME.registerComponent("comic", {
    init: function(){
        this.placesContainer = this.e1;
        this.createCards();
    },
    
    createCards: function(){
        const thumbNailsRef =[
            {
                id: "book1",
                title: "Book1",
                url: "./images/book1.jpeg",
            },
            {
                id: "book2",
                title: "Book2",
                url: "./images/book2.jpeg",
            },
            {
                id: "book3",
                title: "Book4",
                url: "./images/book4.jpeg",
            },
            {
                id: "book4",
                title: "Book4",
                url: "./images/book4.jpeg",
            },
            {
                id: "book5",
                title: "Book5",
                url: "./images/book5.jpeg",
            },
        ];

        let previousXposition = -60;

        for(var item of thumbNailsRef) {
            const posX = previousXposition + 25;
            const posY = 10;
            const posZ = -40;
            const position = {x: posX, y: posY, z: posZ };
            prevoiusXPosition = posX;

            const borderEl = this.createBorder(position, item.id);

            const thumbNail = this.createThumbNail(item);
            borderEl.appendChild(thumbNail);

            const titleEl = this.createTitleEl(position, item);
            borderEl.appendChild(titleEl);

            this.postersContainer.appendChild(borderEl);
        }
    },
    createBorder: function(position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 22,
          height: 40
        });
    
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", { color: "#fff" });
    
        return entityEl;
      },
      createPoster: function(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 20,
          height: 28
        });
    
        entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
        entityEl.setAttribute("material", { src: item.url });
    
        return entityEl;
      }
})