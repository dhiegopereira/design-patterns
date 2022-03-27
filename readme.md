## Os principais Design Patterns

*Os autores do livro “Design Patterns: Elements of Reusable Object-Oriented Software” agruparam os Design Patterns em três tipos diferentes:*

### Creational
> Os padrões desta categoria fornecem meios para criar/instanciar objetos, encapsulando a lógica de criação deles. Desta forma, utilizando o operador new, diversos objetos podem ser instanciados, de acordo com a situação. 

*São eles:*
- Abstract Factory: Criam famílias de objetos on the fly com alta flexibilidade;
- Builder: Constrói o produto passo a passo;
- Factory Method: Cria objetos on the fly com alta flexibilidade;
- Prototype: Permite a criação de novos objetos a partir da cópia de um modelo original ou protótipo;
- Singleton: Centraliza e compartilha recursos.

### Structural
> Estes padrões cuidam da composição dos objetos. O conceito de herança pode ser utilizado para definir como a classe é estruturada, mantendo a flexibilidade de comportamento. 

*São eles:*
- Adapter: Pluga o conteúdo ao sistema;
- Bridge: Separa implementações de abstrações em prol da flexibilidade;
- Composite: Trata todos os objetos de forma justa;
- Decorator: Incrementa funcionalidades de forma dinâmica;
- Facade: Simplifica a utilização de subsistemas complexos;
- Flyweight: Compartilha pequenos recursos para economizar espaço;
- Proxy: Faz com que um objeto represente outro objeto.

### Behavioral
> Estes padrões estão focados na comunicação entre os objetos.

- Chain of Responsibility: Repassa as requisições para evitar a dependência entre um objeto receptor e o solicitante. Com isso, permite que outros objetos da cadeia tenham a oportunidade de tratar tal solicitação;
- Command: Transforma requisições em objetos;
- Interpreter: Define uma gramática e um interpretador;
- Iterator: Percorre um conjunto de dados independentes da implementação;
- Mediator: É um simplificador de relacionamentos complexos;
- Memento: Externaliza estados sem quebrar o encapsulamento;
- Observer: Realiza o compartilhamento de recursos de maneira inteligente;
- State: É considerado muito importante porque simplifica a troca de estados internos de objetos;
- Strategy: Separa os dados dos algoritmos para que possam ser reutilizados;
- Template Method: Define algoritmos extensíveis;
- Visitor: Define uma nova operação para uma classe sem alterá-la.






