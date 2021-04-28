const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/zvjds8', { useUnifiedTopology: true ,  useNewUrlParser: true});

module.exports = mongoose;