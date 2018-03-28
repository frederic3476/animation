export class MyFrontEndComponent {
 
    /**
     * Element will receive the HTML DOM node from pew
     */
    constructor(public element, public options) {
        this.init();
    }
    init() {
        console.log('This is MyFrontEndComponent instanciated with the HTML DOM node : '+this.element.id);
    }
}    