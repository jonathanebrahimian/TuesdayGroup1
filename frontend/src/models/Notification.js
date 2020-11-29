export class Notification{
    constructor(sender,reciever,title,message,type, important) {
        this.sender = sender;
        this.reciever = reciever;
        this.title = title;
        this.message = message;
        this.type = type;
        this.important = important;
    }
}