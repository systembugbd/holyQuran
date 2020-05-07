const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
    id: Number,
    icon: String,
    name: String,
    lon: Number,
    lat: Number,
    main: String,
    temp: Number,
    description: String,
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    pressure: Number,
    humidity: Number,
    speed: Number,
    deg: Number,
    country: String,
    sunrise: Number,
    sunset: Number,
    date: { type: Date, default: Date.now }
});

const History = mongoose.model('History', HistorySchema);

module.exports = History;