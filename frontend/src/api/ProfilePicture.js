import axios from 'axios';

export class ProfilePicture {
    url = "https://randomuser.me/api/";

    getProfileURL() {
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}`)
            .then(x => resolve(x.data.results[0].picture.large))
            .catch(e =>{
                alert(e);
                reject();
            })
        })
    }
}