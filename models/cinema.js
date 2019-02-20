const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map(film => film.title);
};

Cinema.prototype.findByTitle = function (title) {
  return this.films.find(film => film.title === title);
};

Cinema.prototype.findByGenre = function (genre) {
 return this.films.filter(film => film.genre === genre);
};

Cinema.prototype.checkByYear = function (year) {
  return (this.films.find(film => film.year === year)? true:false);
  // const result = this.films.find(film => film.year === year);
  // if (result) {
  //   return true;
  // }
  // return false;
};

Cinema.prototype.checkByLength = function (length) {
  return this.films.filter(film => film.length >= length);
};

Cinema.prototype.totalLength = function () {
  return this.films.reduce((runningTotal, film)=> {
    return runningTotal + film.length;
  }, 0);


  // const overallLength = this.films.reduce(function(total, film){
  //   total += film.length;
  // });
  // console.log(overallLength);
  // return overallLength;
};

Cinema.prototype.filmsByProperty = function (property, value) {
  return this.films.filter(film => (film[property] === value ? film : "" ))

  // const results = this.films.filter(function(film){
  //   if (film[property] === value)
  //    {
  //     return film;
  //   }
  // })
  // return results;
};

module.exports = Cinema;
