const axios = require("axios");

module.exports = async (l, t, c) => {
    const joke = await axios.get(`https://sv443.net/jokeapi/v2/joke/${c}?lang=${l}&type=${t}`)
    return joke.data;
}