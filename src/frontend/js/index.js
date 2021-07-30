const PokeApi = {
    init: () => {
        PokeApi.getDataPokeApi();
    },
    getDataPokeApi: () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100').then(response => {
            return response.json();
        }).then(response => {
            PokeApi.mountElement(response.results)
        })

    },
    mountElement: (response) => {

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
                PokeApi.mountPokemonInfo(response);
            });

        });

    },
    mountPokemonInfo: (response) => {
        var img = response.sprites.front_default,
            types = response.types,
            name = response.name;

        $('.place-pokemons--img img').attr('src', img);

        fetch('http://localhost:3038').then(response => {
            return response.json()
        }).then(response => {
            PokeApi.mountBffApi(response, name, types);
        })
    }, mountBffApi: (colors, name, types) => {
        var api_data = {},
            arrayTypes = [];



        types.map(item => {
            var obj = {};
            var name = item.type.name;
            var cor = colors.colors.filter(cor => {
                return cor.name == name
            })

            obj.name = name;
            obj.color = cor.color;
            return arrayTypes.push(cor[0]);
        })





        api_data.name = name;
        api_data.types = arrayTypes;
        
        console.log('api_data', api_data);

        PokeApi.mountInfo(api_data);


    }, mountInfo: (api_data) => {
        var name = api_data.name,
        types = api_data.types;

        types.map(item => {
            var tipos = `${item.name} + `
            $('ul li.tipo').text(`Tipo: ${tipos}`)
        })



        $('ul li.name').text(`Nome: ${name}`)
        $('ul li.color').text(`Tipo: ${api_data.types[0].color}`)

    }
}

PokeApi.init();