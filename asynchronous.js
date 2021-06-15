class HTTP {
    
    static get(url, cb){
        const xhr = new XMLHttpRequest();
        if (cb) {
            xhr.open('GET', url, true);
                xhr.onload = function() {
                    if(this.status === 200) {
                        cb(this.responseText);
                    } else {
                        cb(`ERROR: ${this.status}`);
                    }
            }
            xhr.send();
        } else {
            return new Promise((resolve, reject) => {
                xhr.open('GET', url, true);
                xhr.onload = function() {
                    if(this.status === 200) {
                        resolve(this.responseText);
                    } else {
                        reject(`ERROR: ${this.status}`);
                    }
            }
            xhr.send();
            })
        }
    }
}


const myhttp = HTTP

myhttp.get('https://jsonplaceholder.typicode.com/posts/1', (r) => console.log(r));

myhttp.get('https://jsonplaceholder.typicode.com/posts/1')
.then(response => console.log(response))
.catch(err => console.log(err))

const getData = async (url) => {
    try {
    const data = await myhttp.get(url);
    console.log(data);
    } catch (err) {
        console.log(err)
    }
}
getData('https://jsonplaceholder.typicode.com/posts/1');

