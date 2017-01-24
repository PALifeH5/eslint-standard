## ESLint Standard

Standards for ECMAScript Projects of PALife.

Basically we use [AirBnB's ESLint rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), however we import some exceptions.

### Basic Rules

- [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) AirBnB style, it relies on these repos:
    - [`eslint`](eslint.org/docs/rules/) Default ESLint style
    - [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) Import style
    - [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) HTML accessibility style
    - [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) React style

### Exceptions

See `.eslintrc` file for exceptional rules.

### Usage

1. If no `package.json` in your project, add it:

    ```
    npm init
    ```
    
2. Import these libraries to you `devDependencies`:

    ```
    npm i babel-eslint eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev
    ```

3. Copy `.eslintrc` file to your project root directory

4. Configure your editor to read `.eslintrc` file

    - Atom
    
        Install `linter` and `linter-eslint` packages and Atom will lint automatically.
        
    - WebStorm
    
        Preference 
        -> Languages & Framworks
        -> JavaScript
        -> Code Quality Tools
        -> ESLint
        -> check `Enable` and set `ESLint package` to `path/to/your/project/node_modules/eslint`

### Explanations for Rules

Walk around `examples` folder to see explanations for each rules. We try to explain why, how to use a rule and give some correct or wrong example codes.
