import { API_KEY, SEARCH_URL } from "../variables/variables";

export const apiSearch = (query, page) => {
    
    const searchLink = `${SEARCH_URL}?api_key=${API_KEY}&page=${page}&query=${query}`;
    
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', searchLink);

        xhr.send();
        
        xhr.onload = function () {
            
            if (xhr.status !== 200) {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
                console.log(`Помилка ${xhr.status}: ${xhr.statusText}`);
            } else {
                resolve(JSON.parse(xhr.response));
            }
        }
    })

}
