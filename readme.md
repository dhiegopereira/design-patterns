## Os principais Design Patterns

*Os autores do livro “Design Patterns: Elements of Reusable Object-Oriented Software” agruparam os Design Patterns em três tipos diferentes:*

### Creational
> Os padrões desta categoria fornecem meios para criar/instanciar objetos, encapsulando a lógica de criação deles. Desta forma, utilizando o operador new, diversos objetos podem ser instanciados, de acordo com a situação. 

*São eles:*
- [Abstract Factory](./01-Creational/abstractFactory.js): Criam famílias de objetos on the fly com alta flexibilidade;
- [Builder](./01-Creational/bulder.js): Constrói o produto passo a passo;
- [Factory Method](./01-Creational/factoryMethod.js): Cria objetos on the fly com alta flexibilidade;
- [Prototype](./01-Creational/prototype.js): Permite a criação de novos objetos a partir da cópia de um modelo original ou protótipo;
- [Singleton](./01-Creational/singleton.js): Centraliza e compartilha recursos.

### Structural
> Estes padrões cuidam da composição dos objetos. O conceito de herança pode ser utilizado para definir como a classe é estruturada, mantendo a flexibilidade de comportamento. 

*São eles:*
- [Adapter](./02-Structural/adapter.js): Pluga o conteúdo ao sistema;
- [Bridge](./02-Structural/bridge.js): Separa implementações de abstrações em prol da flexibilidade;
- [Composite](./02-Structural/composite.js): Trata todos os objetos de forma justa;
- [Decorator](./02-Structural/decorator.js): Incrementa funcionalidades de forma dinâmica;
- [Facade](./02-Structural/facade.js): Simplifica a utilização de subsistemas complexos;
- [Flyweight](./02-Structural/flyweight.js): Compartilha pequenos recursos para economizar espaço;
- [Proxy](./02-Structural/proxy.js): Faz com que um objeto represente outro objeto.

### Behavioral
> Estes padrões estão focados na comunicação entre os objetos.

- [Chain of Responsibility](./03-Behavioral/chainResponsibility.js): Repassa as requisições para evitar a dependência entre um objeto receptor e o solicitante. Com isso, permite que outros objetos da cadeia tenham a oportunidade de tratar tal solicitação;
- [Command](./03-Behavioral/command.js): Transforma requisições em objetos;
- [Interpreter](./03-Behavioral/interpreter.js): Define uma gramática e um interpretador;
- [Iterator](./03-Behavioral/iterator.js): Percorre um conjunto de dados independentes da implementação;
- [Mediator](./03-Behavioral/mediator.js): É um simplificador de relacionamentos complexos;
- [Memento](./03-Behavioral/memento.js): Externaliza estados sem quebrar o encapsulamento;
- [Observer](./03-Behavioral/observer.js): Realiza o compartilhamento de recursos de maneira inteligente;
- [State](./03-Behavioral/state.js): É considerado muito importante porque simplifica a troca de estados internos de objetos;
- [Strategy](./03-Behavioral/strategy.js): Separa os dados dos algoritmos para que possam ser reutilizados;
- [Template Method](./03-Behavioral/templateMethod.js): Define algoritmos extensíveis;
- [Visitor](./03-Behavioral/visitor.js): Define uma nova operação para uma classe sem alterá-la.

_____________________

## Referências
 - [Entenda Design Patterns - Dio](https://www.dio.me/articles/entenda-design-patterns)
 - [Design Patterns - Wikipedia](https://en.wikipedia.org/wiki/Design_Patterns)




