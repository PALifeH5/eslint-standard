## ESLint Standard

Standards for ECMAScript Projects of PALife.

Basically we use [AirBnB's ESLint rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), however we make some exceptions.

### Basic Rules

- [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) AirBnB's ESLint, it relies on these rules:
    - [`eslint`](eslint.org/docs/rules/) Default ESLint rules
    - [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) Import rules
    - [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) HTML accessibility rules
    - [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) React rules

### Exceptions

See `.eslintrc` file for exceptional rules.

### Usage

1. If no `package.json` in your project, add it(skip this step if already exists):

    ```
    npm init
    ```
    
2. Save these libraries to your project's `devDependencies`:

    ```
    npm i babel-eslint eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev
    ```

3. Copy `.eslintrc` file to your project root directory.

4. Configure your editor to read `.eslintrc` file:

    - Atom
    
        Install `linter` and `linter-eslint` packages and Atom will lint automatically.
        
    - WebStorm
    
        Preference 
        -> Languages & Framworks
        -> JavaScript
        -> Code Quality Tools
        -> ESLint
        -> check `Enable` and set `ESLint package` to `path/to/your/project/node_modules/eslint`.

### Explanations for Rules

Walk around `examples` folder to see explanations for each rules. We try to explain why, how to use a rule and give some correct or wrong example codes.
