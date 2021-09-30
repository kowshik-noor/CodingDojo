package com.sll.listassignment;

public class SinglyLinkedList {
    public Node head;
    public SinglyLinkedList() {
        // your code here
    	this.head = null;
    }
    // SLL methods go here. As a starter, we will show you how to add a node to the list.
    public void add(int value) {
        Node newNode = new Node(value);
        if(head == null) {
            head = newNode;
        } else {
            Node runner = head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    } 
    
//    remove a node from the end of my list
    public void remove() {
//    	an edge-case for an empty list
    	if (head == null) {
    		System.out.println("There is nothing to remove!");
    		return;
    	}
//    	a runner variable that will traverse to the second to last node of the list
    	Node runner = head;
    	while(runner.next.next != null) {
    		runner = runner.next;
    	}
    	
//    	once we reach the second to last node of the list, have the runner point to null
    	runner.next = null;
    }
    
//    print all the values of each node in order
    public void printValues() {
//    	an edge-case for an empty list
    	if (head == null) {
    		System.out.println("There is nothing to print!");
    		return;
    	}
//    traverse through the list and print each value
    	Node runner = head;
    	while (runner != null) {
    		System.out.println(runner.value);
    		runner = runner.next;
    	}
    }
    
//    find and return the first node with the value in the parameter
    public Node find(int val) {
//    	edge-case for an empty list
    	if (head == null) {
    		System.out.println("Your list is empty!");
    		return null;
    	}
//    	traverse through the list until we find a node with its value as the value in the parameter
    	Node runner = this.head;
    	while(runner != null) {
    		if (runner.value == val) {
    			return runner;
    		}
    	}
    	System.out.println("Can't find what you're looking for!");
    	return null;
    }
    
//  remove the nth value of the list. this list will have its initial index at 0
    public void removeAt(int n) {
//    	edge-case for an empty list
    	if (head == null) {
    		System.out.println("Your list is empty!");
    		return;
    	}
//    	create a counter that will keep track of the index, and traverse through the list
    	int counter = 0;
    	Node runner = this.head;
//    	edge-case that will remove and replace the head if n is 0
    	if (n == 0) {
//    		have the original head point to null and the new head as what's next to the original head
    		Node oldHead = head;
    		head = head.next;
    		oldHead.next = null;
    		return;
    	}
    	
    	while (runner != null) {
    		if(counter == n - 1) {
//    			since where being consistent about having the removed values point to null, we're gonna do the same here:
    			Node removedVal = runner.next;
    			runner.next = runner.next.next;
    			removedVal.next = null;
    			return;
    		}
    	}
    	
    	System.out.println("Index doesn't exist!");
    	return;
    }
    
    
}

