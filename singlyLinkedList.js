const Node = (value) => {
  const node = {};
  node.value = value;
  node.next = null;
  return node;
}

const LinkedList = () => {
  this.head = null;
}

LinkedList.prototype.push = function(val){
  var node = {
     value: val,
     next: null
  }
  if(!this.head){
    this.head = node;
  }
  else{
    current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
}

let myNode = Node(3);
console.log(myNode);
