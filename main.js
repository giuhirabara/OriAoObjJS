function Filme(nome) {
    this.nome = nome;
    this.filmFav = function() {
        console.log('O filme:', this.nome);
    }
}

function Detalhes(nome, genero, classificacao) {
    this.genero = genero;
    this.classificacao = classificacao;

    this.dizGenero = function() {
        console.log('É do gênero:', this.genero);
    }

    this.dizClassificacao = function() {
        console.log('E é classificado com:', this.classificacao, 'estrelas')  
    }

    Filme.call(this, nome);
}

const detalhes1 = new Detalhes("Simplesmente acontece", "Romance", "5");
const detalhes2 = new Detalhes("Pearl", "Terror", "5");

detalhes1.filmFav();
detalhes1.dizGenero();
detalhes1.dizClassificacao();

detalhes2.filmFav();
detalhes2.dizGenero();
detalhes2.dizClassificacao();

console.log(detalhes1 instanceof Detalhes)
console.log(detalhes2 instanceof Detalhes)
console.log(detalhes2 instanceof Filme)