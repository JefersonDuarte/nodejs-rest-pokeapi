const PokeApi = {
    init: () => {
        PokeApi.getDataPokeApi();
    }, getDataPokeApi: () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100').then(response => {
            return response.json();
        }).then(response => {
            PokeApi.mountElement(response.results)
            console.log('PokeApi.init();');
        })

    }, mountElement: (response) => {
        response.map(item => {
            var name = item.name;
            $("#pokemons").append(
                `<option class="pokemons" value="${name}">${name}</option>`
            );
        });

        PokeApi.getPokemonData();

    }, getPokemonData: () => {
        var $pokemons = $('#pokemons');

        $pokemons.on('change', function() {
            var id =  $(this).find(":selected").val(),
            url = `https://pokeapi.co/api/v2/pokemon/${id}`;

            fetch(url).then(response => {
                return response.json();
            }).then(response => {
                console.log(response);
            })
        });
    }
}

PokeApi.init();