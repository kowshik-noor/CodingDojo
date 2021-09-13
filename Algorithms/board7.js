class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the end of queue
    enqueue(value) {
        // you code here
        // create a new node
        let nn = new Node(value);

        // if there's nothing in the queue, the new node will become the head and the tail
        if (this.head === null) {
            this.head = nn;
            this.tail = nn;
            return this;
        }

        // otherwise, put this new node in the back of the queue (behind the tail). the new node will become the tail
        nn.next = this.tail;
        this.tail = nn;
        return this
    }

    // remove and return the front value from the queue
    dequeue() {
        // you code here
        // if there's nothing in the queue, have it print an error message and return null
        if (this.head === null) {
            console.log("There's nothing to remove!")
            return null;
        }

        // save the current value of the head so we can return it afterwards
        let returnValue = this.head.value;

        // traverse through the queue until we reach the node before the head
        let runner = this.tail;
        while(runner.next !== this.head) {
            runner = runner.next
        }

        // remove the head from the queue. the new head will be the value before it
        runner.next = null
        this.head = runner

        return returnValue;
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
        // you code here
        // step #1) We set the runner to the tail
        var runner = this.tail;

        // step #2) traverse through the list untill we find the node that equals the value
        while(runner !== null) {
            // Checkes if the runner.value == runner if it is then stops the function and return true
            if(runner.value === value) {
                return true
            }
                runner = runner.next
        }

        return false
    }

    // write an algo that prints the values in a queue in order; try and identify the FRONt and TAIL as well
    displayQueue(){
        // you code here
        // return an error message if there's nothing in the queue
        if (this.head == null) {
            console.log("There's nothing in the queue, dummy.")
            return this;
        }
        // traverse throught the queue and print each value
        let runner = this.tail;

        while(runner !== null) {
            // step #2) print the values at each iteration before moving the runner!
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        console.log("We have hit the end of the queue!")
        // return 'this' to end function and allow chaining of methods
        return this
    }

    // return the value of the front node without removing from list
    front() {
        // you code here
        // i assume this is asking me to return the value of the tail??
        if (this.tail === null) {
            console.log("The queue is empty!")
            return null
        }
        return this.tail.value;
    }

    // return whether or not a list is empty
    isEmpty() {
        // you code here
        return this.head === null;
    }
}


var q = new SLQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
q.enqueue(9);
q.displayQueue();
console.log("=========")
console.log(q.dequeue())
console.log(q.dequeue())
q.displayQueue();
console.log("=========")
console.log(q.contains(3))
console.log(q.contains(9))
console.log("=========")
console.log(q.front())
console.log(q.isEmpty())
