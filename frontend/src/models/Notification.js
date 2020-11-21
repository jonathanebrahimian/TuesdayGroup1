export class Notification{
    constructor(reciever,title,message,type, important) {
        this.reciever = reciever
        this.title = title;
        this.message = message;
        this.type = type;
        this.important = important;
    }
}