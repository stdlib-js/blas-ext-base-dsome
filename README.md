<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# dsome

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether a double-precision floating-point strided array contains at least `k` truthy elements.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-dsome
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var dsome = require( '@stdlib/blas-ext-base-dsome' );
```

#### dsome( N, k, x, strideX )

Tests whether a double-precision floating-point strided array contains at least `k` truthy elements.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 0.0, 0.0, 1.0, 2.0 ] );

var v = dsome( x.length, 2, x, 1 );
// returns true
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **k**: minimum number of truthy elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to test every other element:

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 0.0, 0.0, 1.0, 2.0, 1.0, 3.0 ] );

var v = dsome( 3, 2, x, 2 );
// returns true
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x0 = new Float64Array( [ 0.0, 0.0, 1.0, 2.0, 0.0, 3.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dsome( 3, 2, x1, 2 );
// returns true
```

#### dsome.ndarray( N, k, x, strideX, offsetX )

Tests whether a double-precision floating-point strided array contains at least `k` truthy elements using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 0.0, 0.0, 1.0, 2.0 ] );

var v = dsome.ndarray( x.length, 2, x, 1, 0 );
// returns true
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to test every other element starting from the second element:

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 0.0, 1.0, 0.0, 2.0, 0.0, 3.0 ] );

var v = dsome.ndarray( 3, 2, x, 2, 1 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, the function returns `false`.
-   Both functions explicitly treat `NaN` values as falsy.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bernoulli = require( '@stdlib/random-array-bernoulli' );
var dsome = require( '@stdlib/blas-ext-base-dsome' );

var x = bernoulli( 10, 0.5, {
    'dtype': 'float64'
});
console.log( x );

var out = dsome( x.length, 5, x, 1 );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/dsome.h"
```

#### stdlib_strided_dsome( N, k, \*X, strideX )

Tests whether a double-precision floating-point strided array contains at least `k` truthy elements.

```c
const double x[] = { 0.0, 0.0, 1.0, 2.0 };

bool result = stdlib_strided_dsome( 4, 2, x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **k**: `[in] CBLAS_INT` minimum number of truthy elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.

```c
bool stdlib_strided_dsome( const CBLAS_INT N, const CBLAS_INT k, const double *X, const CBLAS_INT strideX );
```

#### stdlib_strided_dsome_ndarray( N, k, \*X, strideX, offsetX )

Tests whether a double-precision floating-point strided array contains at least `k` truthy elements using alternative indexing semantics.

```c
const double x[] = { 0.0, 0.0, 1.0, 2.0 };

bool result = stdlib_strided_dsome_ndarray( 4, 2, x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **k**: `[in] CBLAS_INT` minimum number of truthy elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.
-   **offsetX**: `[in] CBLAS_INT` starting index.

```c
bool stdlib_strided_dsome_ndarray( const CBLAS_INT N, const CBLAS_INT k, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   Both functions explicitly treat `NaN` values as falsy.

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/dsome.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of indexed elements:
    const int N = 8;

    // Specify the minimum number of truthy elements:
    const int k = 2;

    // Specify a stride:
    const int strideX = 1;

    // Test whether the array contains at least `k` truthy elements:
    bool result = stdlib_strided_dsome( N, k, x, strideX );

    // Print the result:
    printf( "Result: %s\n", result ? "true" : "false" );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-dsome.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-dsome

[test-image]: https://github.com/stdlib-js/blas-ext-base-dsome/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-dsome/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-dsome/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-dsome?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-dsome.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-dsome/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-dsome/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-dsome/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-dsome/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-dsome/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-dsome/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-dsome/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-dsome/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-dsome/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
