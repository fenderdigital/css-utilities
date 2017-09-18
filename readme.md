# Fender CSS Utilities

Functional CSS for humans.

## [Documentation](https://fenderdigital.github.io/css-utilities/intro/)

### Try it out :runner::dash:

Open the `index.html` file in the root of this project and start composing interface components :rocket:

If you use Atom, you can also use [live-server](https://atom.io/packages/atom-live-server) to auto reload changes.

**This is a scratch pad, don't commit the changes** :smile:

### [Development](https://fenderdigital.github.io/tachyons/development/)

Single purpose classes should only be added to if the current design system cannot handle it otherwise.

Classes should be small, pragmatic and reusable in nearly any context.

The SRC folder is broken up into contextual modules, add CSS to the relevant module, or add a new module and import it in the main file

### Local Setup

Clone this repo from github, cd into the directory and run:

`yarn install`

Then

```yarn start```

This will output unminified versions of the css to the css directory and watch the src directory for changes.

run

```yarn run build```

To build a minified production version with sourcemap.

Open the 'index.html` file in the root like you did in the "Try it out Section", and test your new class out in there. If it looks good, do a PR to this repo


## License

MIT
