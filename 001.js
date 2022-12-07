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
  
  // criar os nós da árvore
class No {
    constructor(data, esquerda = null, direita = null) {
      this.data = data;
      this.esquerda = esquerda;
      this.direita = null;
    }
  }
  
  // criar a árvore
  class ArvoreBuscaBinaria {
    constructor(root = null) {
      this.root = null;
    }
  
    // inserir novo nó com valor especificado
    Insercao(data) {
      let novoNo = new No(data);
  
      if (this.root === null) {
        this.root = novoNo;
      } else {
        this.InserirNo(this.root, novoNo);
      }
    }
  
    // verificar em qual parte da árvore o nó deve ser inserido
    InserirNo(no, novoNo) {
      if (novoNo.data < no.data) {
        if (no.esquerda === null) {
          no.esquerda = novoNo;
        } else {
          this.InserirNo(no.esquerda, novoNo);
        }
      } else {
        if (no.direita === null) {
          no.direita = novoNo;
        } else {
          this.InserirNo(no.direita, novoNo);
        }
      }
    }
  
    // remover nós da árvore
    Remover(data) {
      this.root = this.RemoverNo(this.root, data);
    }
  
    RemoverNo(no, key) {
      if (no === null) {
        return null;
      } else if (key > no.data) {
        no.direita = this.RemoverNo(no.direita, key);
        return no;
      } else {
        if (no.esquerda === null && no.direita === null) {
          no = null;
          return no;
        }
        if (no.esquerda === null) {
          no = no.direita;
          return no;
        } else if (no.direita === null) {
          no = no.esquerda;
          return no;
        }
        let aux = this.EncontrarMenorNo(no.direita);
        no.data = aux.data;
        no.direita = this.RemoverNo(no.direita, aux.data);
        return no;
      }
    }
  
    // percorrer a árvore a partir de um nó
    EmOrdem(no) {
      if (no !== null) {
        this.EmOrdem(no.esquerda);
        console.log(no.data);
        this.EmOrdem(no.direita);
      }
    }
  
    // percorre primeiro o nó raiz e vai para o lado esquerdo e depois para o lado direito
    PreOrdem(no) {
      if (no !== null) {
        console.log(no.data);
        this.PreOrdem(no.esquerda);
        this.PreOrdem(no.direita);
      }
    }
  
    // percorre o lado esquerdo, depois vai para o lado direito e por último vai até o nó raiz
    PosOrdem(no) {
      if (no !== null) {
        this.PosOrdem(no.esquerda);
        this.PosOrdem(no.direita);
        console.log(no.data);
      }
    }
  
    // encontra o nó com menor valor na árvore
    EncontrarMenorNo(no) {
      if (no.esquerda === null) {
        return no;
      } else {
        return this.EncontrarMenorNo(no.esquerda);
      }
    }
  
    // encontra o nó raiz da árvore
    EncontrarNoRaiz(){
      return this.root;
    }
  
    // pesquisa o nó com dados que tenham valor em toda a árvore
    Pesquisar(no, data){
      if (no === null){
          return null;
      }
  
      else if (data < no.data){
          return this.Pesquisar(no.esquerda, data);
      } else if (data > no.data){
          return this.Pesquisar(no.direita, data);
      } else {
          return no;
      }
    }
  }
  
  let arvoreBinaria = new ArvoreBuscaBinaria();
  arvoreBinaria.Insercao(20);
  arvoreBinaria.Insercao(25);
  arvoreBinaria.Insercao(15);
  arvoreBinaria.Insercao(10);
  arvoreBinaria.Insercao(28);
  arvoreBinaria.Insercao(27);
  arvoreBinaria.Insercao(9);
  arvoreBinaria.Insercao(7);
  arvoreBinaria.Insercao(2);
  arvoreBinaria.Insercao(28);
  
  let raiz = arvoreBinaria.EncontrarNoRaiz();
  
  arvoreBinaria.EmOrdem(raiz);
  arvoreBinaria.Remover(2);
  
  arvoreBinaria.PosOrdem(raiz);
  arvoreBinaria.PreOrdem(raiz);
  
  console.log(arvoreBinaria);