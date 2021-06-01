module.exports = function (eleventyConfig) {
    /* eleventyConfig.setTemplateFormats([
      "jpg",
      "eot",
      "svg",
      "ttf",
      "woff",
      "woff2"
    ]); */

    eleventyConfig.addWatchTarget("assets/sass/");
    eleventyConfig.addPassthroughCopy("assets/images/");
    eleventyConfig.addPassthroughCopy("assets/css");    
    eleventyConfig.addPassthroughCopy("assets/js");
    eleventyConfig.addPassthroughCopy("assets/webfonts");
    eleventyConfig.addPassthroughCopy("admin/");
    
  
    // Filter to retrieve a random blog post
    /* eleventyConfig.addFilter("randomPost", (arr) => {
      arr.sort(() => {
        return 0.5 - Math.random();
      });
      return arr.slice(0, 1);
    }); */
  
    return {
      dir: {
        input: "src",
        output: "dist",
      },
    };
  };