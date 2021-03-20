This is expenses App help to manage your expenses
I am bulding this app using React,Redux for front-end
I am planing to use firebase for google Authentication and database
// "test": "react-scripts test",

to make test: jest works with ES6 import
Just make one .babelrc file

```
{
    "env": {
        "test": {
            "plugins": [
                "@babel/plugin-transform-modules-commonjs"
            ]
        }
    }
}
```
