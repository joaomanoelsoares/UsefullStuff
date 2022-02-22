<h1>Passos para criar handlers de evento em contexto React</h1>

<span>

1- Definir a função do componente

2- Definir o que o(s) evento(s) vai(ão) fazer

3- Iniciar o contrutor (Anexo 1.1)

4- Criar as funções necessárias para lidar com os eventos

5- Linkar as funções aos eventos usando <strong>bind</strong>

6- Definir o estado inicial do componente <strong>(this.state = { exemplo: false })</strong>

7- Inserir o estado do componente no <strong>render()</strong>, armazenando-o em uma variável <strong>let</strong>

8- Fazer o <strong>return()</strong> da função <strong>render()</strong> 

<span>

<h2>ANEXOS</h2>

<p>
Código de início do <strong>constructor()</strong>
<br>


constructor(props) {
    <br>
    super(props);
    <br>
    this.EventoGenerico = this.EventoGenerico.bind(this);
    <br>
    this.state = { objetoExemplo: false };
    <br>
};


</p>