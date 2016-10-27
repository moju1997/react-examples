# Hello World Example using React JS

**Usage:**
browse to react-helloworld directory and install modules:
```
cd react-helloworld
npm install
npm run dev
```
To build type command:
> npm build

In browser, type url:  http://localhost:8080
If everything went fine, You will see "Hello World"  on Screen.

//////////////////////////////////////////////////////////////////////////

**React JS Development Environment Setup**

Important:

1. We will be writing all our React JS code in ES6
2. We will break our entire application codes into multiple modules.

But, currently browsers do not understand these new ES6 syntax, So we need a transpiler which converts ES6 code back to ES3 which each and every browsers can usderstand.**Babel** is used for transpiling ES6 to ES3.

**Webpack**: Webpack is module bundler. It can also transpile ES6 code to ES3 using babel as Loader.

In order to achieve this we need to provide config details in a file named `webpack.config.js`.
You refer [this](https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.v4jlbls31) tutorial for webpack config details.

Minimum config requirement for webpack is two fileds: `entry` and `output`. In entry we provide the main javascript file which will be used for bundling. output is used to define the path and filename of output file that will be generated using entry.

If we define only these two config, then it will simply bundle `entry` file and generate output file. It will not transpile ES6 to ES3.
For transpiling we need to define loader (babel here), which is defined in third config `module.loaders`

Now we are good to go with React JS Helloworld code.

You can consider watching [these](https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b) youtube videos for understanding React.
You refer to [React api docs](https://facebook.github.io/react/docs/react-api.html) for more details.
