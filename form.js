class Form {

    constructor() {
        
        this.title = createElement("h2");
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
        
    }

    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display() {
        this.title.html("Car Racing Game");
        this.title.position(470,100);

        this.input.position(480,270);

        this.button.position(550,320);

        this.button.mousePressed =()=> {
            this.input.hide();
            this.button.hide();

            this.greeting.html("Hello" + this.input.name);
            this.greeting.position(480,270);
        }
    }

}

