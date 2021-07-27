const PokeApi = {
    init: () => {
        PokeApi.getDataPokeApi();
    },
    getDataPokeApi: () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100').then(response => {
            return response.json();
        }).then(response => {
            PokeApi.mountElement(response.results)
            console.log('PokeApi.init();');
        })

    },
    mountElement: (response) => {
        console.log('mount', typeof(response));

        response.map(item => {
            var name = item.name;
            $("#pokemons").append(
                `<option class="pokemons" value="${name}">${name}</option>`
            );
        });

        PokeApi.getPokemonData();

    },
    getPokemonData: () => {
        var $pokemons = $('#pokemons');

        $pokemons.on('change', function () {
            var id = $(this).find(":selected").val(),
                url = `https://pokeapi.co/api/v2/pokemon/${id}`;

            fetch(url).then(response => {
                return response.json();
            }).then(response => {
                console.log(response);
                PokeApi.mountPokemonInfo(response);
            });

        });

    }, 
    mountPokemonInfo: (response) => {
        const img = response.sprites.front_default,
        name = response.name;

        $('.place-pokemons--img img').attr('src', img);
        $('ul li.name').text(name)

        fetch('http://localhost:3038').then(response => {
            return response.json()
        }).then(response => {
            console.log(response);
        })
    }
}

PokeApi.init();