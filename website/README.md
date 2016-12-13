## My personal, static website
### Built off my [static site scaffold](https://github.com/noahyonack/Static-Site-Scaffold)

* I designed this site using [Sketch](http://bohemiancoding.com/sketch/).
* Javascript is arranged in AMD modules, optimized with RequireJS's `r.js` optimizer, and shipped with `almond.js`.
* HTML is templated via Handlebars, which receives context from YML at the top of each file.
* Grunt builds the entire thing by doing things like:
	* Optimizing my Require modules
	* Building my SASS (compiling, autoprefixing, etc.)
	* Compiling my Handlebars templates
	* etc.

### To get this up and running:

* Clone the repo
* sudo npm install
* grunt watch
* visit localhost:8080 to ensure that the livereload server is up and running
* open up dist/index.html and start writing code!