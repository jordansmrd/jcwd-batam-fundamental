
class Queue {
   constructor() {
    this.queue = []
   }

    addQueue(values){
    let newData = {
        "nama_makanan": values
    }  
    this.queue.push(newData);
    } 

    run(){
    console.log(this.queue);
        while(this.queue.length) {
            let random =  Math.floor(Math.random() * 10) + 1 // random number dari 1 - 10

            let promise = new Promise((resolve, reject) => { 
                if(this.queue[0].nama_makanan) {
                resolve("Queue nama makanan : " + this.queue[0].nama_makanan +" done in " + random + " minutes") 
                }
                else {
                    reject("error nama makanan tidak ditemukan")
                }
            })
            
            setTimeout( () => promise.then((res) => console.log(res)) ,random)
            this.queue.shift()
        }
    }
}




module.exports = Queue