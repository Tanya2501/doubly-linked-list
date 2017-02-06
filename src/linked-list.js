const Node = require('./node');

class LinkedList {
    constructor() {
         this.length = 0;
       this._head = null;
       this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length === 0) {
             this._head = node;
             this._tail = node;
        } else{
            this._tail.next = node;
             node.prev = this._tail;
            this._tail = node;
      }
         this.length++;
         return this;
    }

    head() {
        return this._head.data; 
    }

    tail() {
        return this._tail.data; 
    }

    at(index) {
        var currentNode = this._head;
        var currentIndex =0;
        while (currentIndex!=index){
        currentNode = currentNode.next;
        currentIndex++;
        }      
        if(index>this.length || this.length==0){
        return false;
          }
        return currentNode.data;
    }

    insertAt(index, data) {
      var currentNode = this._head;
      var currentIndex = 0;
      while (currentNode){
      if (currentIndex == index){
      currentNode.next=currentNode;
      currentNode.data=data;
      this.length++;
      break;
        }
        currentNode=currentNode.next;
        currentIndex++;
      }
      return this;
    }

    isEmpty() {
        if (this.length){
      return false;
      }
      return true;
    }

    clear() {
      this.length=0;
      this._tail.data=null;
      this._head.data=null;
      return this;
  }

    deleteAt(index) {
        var currentNode=this._head;
      var currentIndex=0;
      while (currentNode){
        if (currentIndex==index){
      if (currentNode.prev) {
      currentNode.prev.next=currentNode.next;
      }
      if (currentNode.next){
      currentNode.next.prev=currentNode.prev;
      }
      currentNode==null;
      this.length--;
      break; 
      }
      currentNode=currentNode.next;
      currentIndex++;
      }
      return this;
    }

    reverse() {
        var currentNode = this._head;
      var temp=this._head;
      this._head=this._tail;
      this._tail=temp;
   while(currentNode){
      temp=currentNode.next;
      currentNode.next=currentNode.prev;
      currentNode.prev=temp;
      currentNode=temp;
      }
  return this;
    }

    indexOf(data) {
        var currentNode=this._head;
      var currentIndex=0;
      while(currentNode){
      if(currentNode.data==data){
      return currentIndex;
      }
      currentNode=currentNode.next;
      currentIndex++;
      }
      return -1;
      }
    }


module.exports = LinkedList;
