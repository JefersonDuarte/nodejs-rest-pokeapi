const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    return res.json({
        colors: [
            {"name": "normal", "color": "#ffffff"},
            {"name": "fighting", "color": "#f0f0f0"},
            {"name": "flying", "color": "#fefefe"},
            {"name": "poison", "color": "#c6c6c6"},
            {"name": "ground", "color": "#d47b4a"},
            {"name": "rock", "color": "#5a4d41"},
            {"name": "bug", "color": "#b0dea3"},
            {"name": "normal", "color": "#f5f5f5"},
            {"name": "ghost", "color": "#ccccccc"},
            {"name": "steel", "color": "#43464B"},
            {"name": "fire", "color": "#ff0000"},
            {"name": "water", "color": "#d4f1f9"},
            {"name": "grass", "color": "#567d46"},
            {"name": "electric", "color": "#7df9ff"},
            {"name": "psychic", "color": "#625981"},
            {"name": "ice", "color": "#b9e8ea"},
            {"name": "dragon", "color": "#9cdcf0"},
            {"name": "dark", "color": "#000000"},
            {"name": "fairy", "color": "#f2c1d1"},
            {"name": "unknown", "color": "transparent"},
            {"name": "shadow", "color": "#696969"},
        ]
    });
});

app.listen('3038');