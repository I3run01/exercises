class Animal {
    photo: string
    name: string
    color: string
    gender: string
    kind: string


    constructor (photo: string, name: string, color: string, gender: string, kind:string ) {
        this.photo = photo,
        this.name = name,
        this.color = color,
        this.gender = gender,
        this.kind = kind  
    }
}

let AnimalsList = [
    new Animal('images/pastor-alemao.jpg', 'Pastor Alemão', 'Amarelo e Preto', 'Masculino', 'dog'),
    new Animal('images/labrador.jpg', 'Labrador-retriever', 'Branco', 'Masculino', 'dog'),
    new Animal('images/zwergspitz.jpg', 'Zwergspitz', 'Amarelo', 'Masculino', 'dog'),
    new Animal('images/husky.jpg', 'Husky Siberiano', 'Branco e Preto', 'Masculino', 'dog'),
    new Animal('images/golden.jpg', 'Golden Retriever', 'Amarelo', 'Masculino', 'dog'),
    new Animal('images/poodle.jpg', 'Poodle', 'Branco ', 'Masculino', 'dog'),
    new Animal('images/bulldog.jpg', 'Bulldog', 'Branco e Amarelo ', 'Masculino', 'dog'),
    new Animal('images/persa.jpg', 'Persa', 'Amarelo ', 'Amarelo', 'cat'),
    new Animal('images/mainecoon.jpg', 'Maine Coon', 'Preto e Branco ', 'Masculino', 'cat'),
    new Animal('images/bengal.jpg', 'Bengal', 'Branco, Preto e Amarelo ', 'Masculino', 'cat'),
    new Animal('images/siames.jpg', 'Siamês', 'Amarelo e Preto ', 'Masculino', 'cat'),
    new Animal('images/sphynx.jpg', 'Sphynx', 'Branco ', 'Masculino', 'cat'),
    new Animal('images/neon.jpg', 'Tetra Neon', 'Vermelho e Azul ', 'Masculino', 'fish'),
    new Animal('images/matogrosso.jpg', 'Mato Grosso', 'Laranja ', 'Masculino', 'fish'),
    new Animal('images/limpavidro.jpg', 'Limpa Vidro', 'Verde e Branco ', 'Masculino', 'fish'),
    new Animal('images/tanictis.jpg', 'Tanictis', 'Vermelho ', 'Masculino', 'fish'),
    new Animal('images/acara.jpg', 'Acará Bandeira', 'Preto ', 'Masculino', 'fish'),
]

export const Animals = {
    getAll: () => {
        return AnimalsList
    },

    getDog: () => {
        let DogList = AnimalsList.filter(animal => animal.kind == 'dog')
        return DogList
    },

    getCat: () => {
        let CatList = AnimalsList.filter(animal => animal.kind == 'cat')
        return CatList
    },

    getFish: () => {
        let FishList = AnimalsList.filter(animal => animal.kind == 'fish')
        return FishList
    },

    getName: (value?: string) => {
        let Animal = AnimalsList.filter(animal => animal.name == value)
        return Animal
    }
}
