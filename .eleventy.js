module.exports = function (eleventyConfig) {
  // Passthrough static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/imagens");

  // Layout aliases
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

  // Collections for bimestres
  const sortByAula = (collection) => {
    return collection.sort((a, b) => {
      return parseInt(a.data.aula_numero) - parseInt(b.data.aula_numero);
    });
  };

  eleventyConfig.addCollection("bimestre01", function (collectionApi) {
    return sortByAula(collectionApi.getFilteredByTag("bimestre-01"));
  });

  eleventyConfig.addCollection("bimestre02", function (collectionApi) {
    return sortByAula(collectionApi.getFilteredByTag("bimestre-02"));
  });

  eleventyConfig.addCollection("bimestre03", function (collectionApi) {
    return sortByAula(collectionApi.getFilteredByTag("bimestre-03"));
  });

  eleventyConfig.addCollection("bimestre04", function (collectionApi) {
    return sortByAula(collectionApi.getFilteredByTag("bimestre-04"));
  });

  return {
    // Se for hospedar no GitHub Pages em um subdiretório, adicione o pathPrefix:
    pathPrefix: "/apostila-bd-ii/",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
