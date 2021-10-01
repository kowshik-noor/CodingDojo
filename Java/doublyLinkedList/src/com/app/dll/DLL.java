package com.app.dll;

public class DLL {
    public Node head;
    public Node tail;
    
    public DLL() {
        this.head = null;
        this.tail = null;
    }

    // the push method will add a new node to the end of the list
    public void push(Node newNode) {
    	// if there is no head in the list, aka, an empty list, we set the newNode to be the head and tail of the list
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        
        // first find the lastNode in the list
        // then, set the lastNode's next to be the newNode;
        // then, we have to set the previous of the lastNode to the lastNode that we found previously.
        // finally, set the list's tail to be the node that we have added
        Node lastNode = this.tail;
        lastNode.next = newNode;
        newNode.previous = lastNode;
        this.tail = newNode;
    }
    
    public void printValuesForward() {
        // find the first node, aka head.
        Node current = this.head;
        
        // while the current node exists...
        while(current != null) {
            // print it's value
            System.out.println(current.value);
            // and move on to it's next node.
            current = current.next;
        }
    }
    
    public void printValuesBackward() {
//    	find the last node, aka the tail.
    	Node current = this.tail;
    	
//    	while the current node exists...
    	while (current != null) {
//    		print its value
    		System.out.println(current.value);
//    		and move on to the previous node
    		current = current.previous;
    	}
    }
    
    public Node pop() {
//    	find the last node in the list
    	Node lastNode = tail;
    	
//    	have the last node previously linked to nothing. and return it
    	lastNode.previous = null;
    	
    	return lastNode;
    }
    
    public boolean contains(Integer value) {
//    	traverse through the list
    	Node runner = this.head;
    	while (runner != null) {
//    		if we find the value, return true
    		if (runner.value == value) {
    			return true;
    		}
    	}
    	
//    	otherwise, return false
    	return false;
    }
    
    public int size() {
//    	traverse through the list and keep track of its size
    	int size = 0;
    	Node runner = this.head;
    	while (runner != null) {
    		size++;
    		runner = runner.next;
    	}
    	
//    	return the size
    	return size;
    }
    
    public void insertAt(Node newNode, int index) {
//    	traverse through the list and keep track of it's index
    	int counter = 0;
    	Node runner = head;
//    	get the size of the list just in case
    	int size = this.size();
    	
//    	edgecases if the index is the head or the size of the list
    	if (index == 0) {
    		head.previous = newNode;
    		newNode.next = head;
    		head = newNode;
    		return;
    	} else if(index == size) {
    		this.push(newNode);
    		return;
    	}
    	
    	while (runner != null) {
//    		if we approach the index before our target index, inject the new node into the list
    		if (counter == index - 1) {
//    			preserve the next node
    			Node nextNode = runner.next;
//    			have our runner point to the new node
    			runner.next = newNode;
//    			have the preserved next node point to the new node
    			nextNode.previous = newNode;
//    			have everything properly point to each other
    			newNode.previous = runner;
    			newNode.next = nextNode;
    			return;
    		}
    		counter++;
    		runner = runner.next;
    	}
    	
    	System.out.println("Out of bounds!");
    	return;
    }
    
    
}
