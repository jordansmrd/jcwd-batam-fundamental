//data structure 


class Student {
    #nama = ""
    #ip = "192.168.1.1"
    constructor(nama) {
        this.#nama = nama
    }

    #panggil() {
        return `hallo saya dipanggil`
    }

    panggil2() {
        return this.#panggil()
    }

    #getIPValues(){
        return this.#ip
    }

    connect() {
        
        if(this.#getIPValues() == this.#ip) {
            return "berhasil connect"
        }
        else {
            return "gagal connect"
        }
    }

}




// frontend backend database
// frontend request ke backend 
// backend request ke database 

// frontend => page profile facebook =>reqeust ke backend 
// backend request ke database 

// database kirim data ke backend . 
// backend kirim data ke frontend 




// tableNama= [{nama : jordan} ]

let student1 = new Student("jordan")

console.log(student1);
console.log(student1.connect());


console.log(student1.panggil2());



//stack
class Stack {
    #maxSize;
    #container = [];

    constructor(maxSize = 10) {
        this.#maxSize = maxSize
    }

    push(element){
        this.#container.push(element);
    }

    pop(){
        this.#container.pop()
    }

    getElements(){
        return this.#container
    }

    #isFull() {
        return this.#container.length >= this.#maxSize
    }

    #isEmpty() {
        return this.#container.length === 0
    }

    push(element) {
        if(this.#isFull()) {
            console.log("Stack Overflow");
        return;
        }

        this.#container.push(element)
    }

    pop(){
        if(this.#isEmpty()) {
            console.log("Stack Underflow !");
            return
        }

        this.#container.pop()
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.getElements());
stack.pop()
console.log(stack.getElements());


//queue
class Queue{
    #container = []

    enqueue(element) {
        this.#container.push(element)
    }

    dequeue() {
        return this.#container.shift()
    }

    getElements() {
        return this.#container
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

console.log(queue.getElements());

queue.dequeue();
console.log(queue.getElements());

//set
const fruits = ["banana", "apple", "jackfruit", "apple"]

const newFruits = new Set(fruits)

console.log(newFruits);

newFruits.add("Banana")

newFruits.delete("apple")
console.log(newFruits.has("Banana"));
// newFruits.clear()
console.log(newFruits.size);

console.log(newFruits);

newFruits.forEach((val)=>{
    console.log(val);
    })




newFruits.delete("banana")
console.log(newFruits.has("Grape"))
console.log(newFruits.size)

const iterator1 = newFruits.entries();
for (const entry of iterator1) {
    console.log(entry);
  }



console.log(newFruits);
console.log(typeof newFruits);
//hash table/map
let obj = {
    David : "001",
    Buchanan : "002"
}

//david as a key, 001 as value

const myMap = new Map()

console.log(myMap);
myMap.set("David", "001")
myMap.set("Buchanan", "002")
console.log(myMap.get("David"))
console.log(myMap.get("Buchanan"));
myMap.Timmy = "003"
console.log(myMap.Timmy);



console.log(myMap);


// const arr3 = [0,1,2,3,4]

// push 5 => 1 
// index 1 = 1 gunakan linked list 
// data structure linear 
// push 7
// [0,{ 1, { 5, 7 } } ,2,3,4]





for (let [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}
console.log(myMap.has("Buchanan"))
console.log(myMap.get("David"));
console.log(myMap.size);


//linked list

const list = {
    head: {
        value: 1, 
            next: {
                value : 2,
                    next : {
                        value : 3,
                            next : {
                                value: 4,
                                    next : {
                                        value : 5, 
                                            next: null
                                    }
                        }
                    }
            }
    }
}

console.log(list);

class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

const obj1 = new Node(3)
console.log(obj1);

// obj1 linked ke object lainnya lewat class LinkedList
// ingin memasukan sebuah value baru ke dalam linked 
class LinkedList {
        constructor(){
            this.head = null;
            this.size = 0;
        }

        add(element) {
            let node = new Node(element);
            //node = object dengan values


            let current; //data/value sekarang 
            //head adalah baris pertama pada object yang menentukan data pertama 
            if(this.head == null) {
                this.head = node
            }
            else {
                current = this.head 
                //contoh element = "A"
                // LinkedList =  { element : "A" , next : null } 

                //tambah element baru = "B"
                // LinkedList =  { element : "A" , next : { element : "B" , next : null} } 

                //current { element : "A" , next : { element : "B" , next : null} } //truthy
                //current = { element : "B" , next : null} //truthy 
                // current.next = null // falsy 

                //tambah element baru  = "C"
                //{ element : "A" , next : { element : "B" , next : {element : "C" , next : null  } } }
                // size = 3 yaitu A, J ,B,C
                while(current.next) {
                    current = current.next
                }
                current.next = node
            }

         this.size += 1;
        }

        printList() {
            let curr = this.head;
            while(curr) {
                console.log(curr.element); 
                curr = curr.next;
            }
        }

        insertAt(element, index) {
            if(index < 0 || index > this.size){
                return console.log("Please enter a valid index");
            }
            else {
                const node = new Node(element)
                let curr = this.head
                //curr = {element : A , next : {.....}}
                // apabila indexnya 0 
                // maka headnya akan ubah menjadi value yg dikirim 

                // node = { element : j , next : null}

                // { element : j, next : { element : B , next : { .... }} }
                

                if(index == 0) {
                    node.next = this.head
                    this.head = node
                }else {
                    curr = this.head
                    let prev
                 //curr = {element : A , next : {.....}}
                 // size = 4 
                 //index = 2 
                 // looping dari index 0 hingga index 1 

                 //dilooping sehingga kita tau letak value/element 
                 // di index yang kita tuju 


                // data sebelumnya diubah . 
                // yang diubah adalah .next nya 
                // data baru.next diisi dengan element yg berada di index yang mau digunakan 

                // prev : element = "A" , next = "B"
                // prev : element = "A", next = J 
                //curr : element = "J" , next = "B"




                    for (let i = 0; i < index; i++) {
                        prev = curr
                        curr = curr.next                        
                    }

                    prev.next = node
                    node.next = curr
                }
                this.size += 1;
            }
        }

        removeAt(index) {
            if(index < 0  || index >= this.size) {
                return console.log("please enter a valid index")
            }
            else {
                let curr = this.head
                let prev  = curr

                if(index === 0 ) {
                    this.head = curr.next
                } else {

                    for (let i = 0; i < index; i++) {
                        prev = curr
                        curr  = curr.next                        
                    }

                    prev.next = curr.next
                }

                this.size -= 1;

                return curr.element;
            }
        }

        removeElement(element) {
            let current = this.head;
            //current { element : "A" , next : { element : "B" , next : ....} } //truthy
            // param element = "A"

      //current { element : "B" , next : ....} } //truthy



            let prev = null;

            while(current != null) {

                if(current.element === element) {
                    if(prev == null) {
                        this.head == current.next;
                    } else {
                        prev.next = current.next
                    }

                    this.size -= 1

                    return current.element
                }

                prev = current
                current = current.next
            }
            return null
        }

        indexOf(element){
            let count  = 0 
            let current = this.head;

            while(current != null) {
                if(current.element === element) {
                    return count
                }

                count += 1

                current = current.next
            }

            return -1
        }
}

const linkedList = new LinkedList()

linkedList.add("A")
linkedList.add("B")
linkedList.add("C")
linkedList.add("D")
linkedList.add("E")

console.log(linkedList);


linkedList.insertAt("new val" , 2)
console.log(linkedList);

// linkedList.removeElement("B")
linkedList.removeAt(3)
console.log(linkedList);

linkedList.printList()

console.log(linkedList.indexOf("new val"));

let node = new Node("a");

node.next = new Node("C");
console.log(node);


// buat class calculator 
// dimana inputnya merupakan sebuah string 
// example : 5 + 5 x 2 : 3 x 1
// example : 8 x 20 x 30%


// terdapat method history untuk melihat kalkulasi yg terjadi dan hasilnya 
// example : 5 + 5 *2 /3 *1 = 8.33

// terdapat method untuk melakukan clear terhadap history 

// gunakan get dan set untuk menginput kalkukasinya dan menampilkan hasilnya
// gunakan private 



// buat class student , ekskul (futsal, basket, karate), futsal, basket, karate 

//student 
//prop : fname,lname, age , kelas 
//get set perkenalan . example : budi haryanto 12 tahun kelas 3 SMA 


//ekskul 
//prop : nama_ekskul , jam_mulai, jam_selesai, durasi, feePerDAY
//method : showEkskul ( "budi haryanto ekskul basket")



