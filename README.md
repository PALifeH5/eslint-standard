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

### Explanations for Rules

Walk around `examples` folder to see explanations for each rules. We try to explain why, how to use a rule and give some correct or wrong example codes.

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

    **Recommended:** or put ESLint configuration in your `package.json` file under `eslintConfig`:

    **package.json**

    ```
    {
        "eslintConfig": {
            "extends": "airbnb",
            "installedESLint": true,
            "parser": "babel-eslint",
            "plugins": [
                "react"
            ],
            "env": {
                "browser": true
            },
            "rules": {
                "semi": ["error", "never"]
            }
        }
    }
    ```

4. Configure your editor to read `.eslintrc` file:

    - Atom
    
        Install `linter` and `linter-eslint` packages and Atom will lint automatically.
        
    - WebStorm
    
        Search for 'eslint', then check `Enable` and set `ESLint package` to `path/to/your/project/node_modules/eslint`.

### Git `pre-commit` Hook

**Recommended:** use git `pre-commit` hook to run ESLint before committing.

1. Install [pre-commit](https://github.com/observing/pre-commit)

    ```
    npm install --save-dev pre-commit
    ```
    
2. Add ESLint scripts in your `package.json`, like below:

    **package.json**

    ```
    {
        "scripts": {
            "lint": "./node_modules/.bin/eslint --global require,window --ext .js src"
        },
        "pre-commit": [
            "lint"
        ]
    }
    ```
    
3. Run `git commit` to test if `pre-commit` hook works.
