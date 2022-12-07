class Stack {
    constructor(maxSize) {
      // definir o número máximo de elementos da pilha caso não seja fornecido
      if (isNaN(maxSize)) return maxSize = 10;
      this.maxSize = maxSize; // iniciar um array que conterá os valores da pilha
      this.container = []; // vetor que terá os elementos da pilha
    }
  
    // método para ver os itens
    display() {
      console.log(this.container);
    }
  
    // verifica se a pilha está vazia
    isEmpty() {
      return this.container.length === 0;
    }
  
    // verifica se a pilha está cheia
    isFull() {
      return this.container.length >= this.maxSize;
    }
  
    push(element) {
      // Verifica se a pilha está cheia
      if (this.isFull()) {
        console.log("Stack Overflow!");
        return;
      }
      this.container.push(element);
    }
  
    pop() {
      // Verifica se a pilha está vazia
      if (this.isEmpty()) {
        console.log("Stack Underflow!");
        return;
      }
      this.container.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Stack Underflow!");
        return;
      }
      return this.container[this.container.length - 1];
    }
  
    // método para limpar o array
    clear() {
      this.container = [];
    }
  }
  
  let pilha = new Stack(3);
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);
  pilha.display();
  pilha.pop();
  pilha.clear();
  pilha.display();
  console.log(pilha);