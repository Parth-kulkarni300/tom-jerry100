class CAT{

    constuctor(x,y,width,height){

        this.body=Bodies.rectangle(500,500,10,10)
        this.width=10;
        this.height=10;
        this.image=("images/cat1.png");



}

display(){


    push();
    ImageMode(CENTER)
    image(cat,500,500,10,10);
    pop();

}
}
