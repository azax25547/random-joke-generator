const getRequest = require("./getRequest");

async function generateRandomJokes(language, type, category, callback) {
    if (language === undefined)
        language = "en";
    const res = await getRequest(language, type, category);
    callback(res);

}

module.exports = {
    generateRandomJokes
}