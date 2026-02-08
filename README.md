<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# cinvf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the inverse of a single-precision complex floating-point number.

<section class="intro">

The inverse (or reciprocal) of a non-zero complex number `z = a + bi` is defined as

<!-- <equation class="equation" label="eq:complex_inverse" align="center" raw="{\frac {1}{z}}=\frac{\bar{z}}{z{\bar{z}}} = \frac{a}{a^{2}+b^{2}} - \frac{b}{a^2+b^2}i." alt="Complex Inverse" > -->

```math
{\frac {1}{z}}=\frac{\bar{z}}{z{\bar{z}}} = \frac{a}{a^{2}+b^{2}} - \frac{b}{a^2+b^2}i.
```

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
cinvf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cinvf@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var cinvf = require( 'path/to/vendor/umd/math-base-special-cinvf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cinvf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.cinvf;
})();
</script>
```

#### cinvf( z )

Computes the inverse of a single-precision complex floating-point number.

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var v = cinvf( new Complex64( 2.0, 4.0 ) );
// returns <Complex64>[ ~0.1, ~-0.2 ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cinvf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create an array of random numbers:
var arr = new Complex64Array( uniform( 200, -100.0, 100.0 ) );

// Compute the inverse of each number in the array:
logEachMap( '1.0 / (%s) = %s', arr, cinvf );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



* * *

<section class="references">

## References

-   Smith, Robert L. 1962. "Algorithm 116: Complex Division." _Commun. ACM_ 5 (8). New York, NY, USA: ACM: 435. doi:[10.1145/368637.368661][@smith:1962a].
-   Stewart, G. W. 1985. "A Note on Complex Division." _ACM Trans. Math. Softw._ 11 (3). New York, NY, USA: ACM: 238–41. doi:[10.1145/214408.214414][@stewart:1985a].
-   Priest, Douglas M. 2004. "Efficient Scaling for Complex Division." _ACM Trans. Math. Softw._ 30 (4). New York, NY, USA: ACM: 389–401. doi:[10.1145/1039813.1039814][@priest:2004a].
-   Baudin, Michael, and Robert L. Smith. 2012. "A Robust Complex Division in Scilab." _arXiv_ abs/1210.4539 \[cs.MS] (October): 1–25. [&lt;https://arxiv.org/abs/1210.4539>][@baudin:2012a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cinv`][@stdlib/math/base/special/cinv]</span><span class="delimiter">: </span><span class="description">compute the inverse of a double-precision complex floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cinvf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cinvf

[test-image]: https://github.com/stdlib-js/math-base-special-cinvf/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/math-base-special-cinvf/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cinvf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cinvf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cinvf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cinvf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cinvf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-cinvf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-cinvf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-cinvf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-cinvf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-cinvf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-cinvf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cinvf/main/LICENSE

[@smith:1962a]: https://doi.org/10.1145/368637.368661

[@stewart:1985a]: https://doi.org/10.1145/214408.214414

[@priest:2004a]: https://doi.org/10.1145/1039813.1039814

[@baudin:2012a]: https://arxiv.org/abs/1210.4539

<!-- <related-links> -->

[@stdlib/math/base/special/cinv]: https://github.com/stdlib-js/math-base-special-cinv/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
