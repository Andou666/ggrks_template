module.exports = function(config){
    return{
        htmlTemplateEngine: "liquid",
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "dist"
        }
    };
};