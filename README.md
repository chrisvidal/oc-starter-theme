# October CMS

The theme comes with the possiblity to add `blocks` for the _RainLabPages_ plugin.
To create a new block:
- add your new block in the file `meta/blocks.yaml`
- add the corresponding partial under the folder `blocks`

Example:
To create a new Hero block.

In `meta/blocks.yaml`, we will add

```yaml
hero:
    name: Page Hero
    description: Hero for pages
    icon: icon-desktop
    fields:
        title:
            label: Hero main title
            span: auto
            type: text
        subheader:
            label: Hero main title
            span: auto
            type: textarea
```

In `partials/blocks/hero.htm`

```html
<section class="bg-center bg-cover hero">
  <div class="container">
    <h1>{{ data.title }}</h1>
    <p>{{ data.subheader }}</p>
  </div>
</section>
```


# Laravel Mix Boilerplate

A boilerplate for building web projects with Laravel Mix.

**Features**

* CSS
  * Sass compilation
  * PostCSS transformation (Tailwindcss JIT, Autoprefixer)
  * Minify
  * File versioning for cache-busting (in production)
* JavaScript
  * Minify with terser
  * File versioning for cache-busting (in production)
* Images
  * Copy
  * Optimize with imagemin (in production)
* Fonts
  * Copy
* Web server (Browsersync)
  * Watch files changes, inject style, browser auto-refresh and cross-device synchronization

## Getting Started

### Quick Start

1. Clone repository
2. Install Node dependencies `npm install`.
3. Use Mix CLI:
  * Compiling in a Local Environment `npx mix`
  * Watch Assets for changes `npx mix watch`
  * Compiling for production `npx mix --production`


## Futher reading

* [Laravel Mix Documentation](https://laravel-mix.com/docs/6.0/installation) from [Jeffrey Way](https://laracasts.com/)

## License
Inspired by [laravel-mix-boilerplate](https://github.com/florianbouvot/laravel-mix-boilerplate/)
MIT © [Chris Vidal](https://github.com/chrisvidal)
