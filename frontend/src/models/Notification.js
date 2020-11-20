export class Notification{
    constructor(id,title,message,type, important) {
        this.id = id;
        this.title = title;
        this.message = message;
        this.type = type;
        this.important = important;
    }
}