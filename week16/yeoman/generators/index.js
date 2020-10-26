var Generator = require('yeoman-generator')
module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    //this.option('babel'); // This method adds support for a `--babel` flag
  }
  method1 () {
    this.log('yeoman just ran');
  }

  async prompting () {
    this.answers = await this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project title:',
      default: this.appname
    }, {
      type: 'confirm',
      name: 'alias',
      message: 'confirm your project title?',
    }])
    this.log('name', this.answers.name)
    this.log('alias', this.answers.alias)
    const pkgJson = {
      "name": this.answers.name,
      "version": "1.0.0",
      "description": "",
      "main": "./generators/app/index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      devDependencies: {

      },
      dependencies: {

      }
    };
    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    this.npmInstall(['vue'], { 'save-dev': false });
    this.npmInstall(['webpack', 'webpack-cli', 'vue-loader', 'copy-webpack-plugin', 'vue-template-compiler', 'vue-style-loader', 'css-loader'], { 'save-dev': true });

    this.fs.copyTpl(
      this.templatePath('hello.vue'),
      this.destinationPath('src/hello.vue'),
      {}
    );
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
      {}
    );
    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath('src/main.js'),
      {}
    )
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html'),
      { title: this.answers.name }
    )
  }
  /*  writing () {
     const path = this.sourceRoot();//可以重置模板路径
     this.log(path)
     this.fs.copyTpl(
       this.templatePath('tpl.html'),
       this.destinationPath('public/index.html'),
       { title: 'Templating with Yeoman' }
     );
   } */
  /*   deps () {
      const pkgJson = {
        "name": this.answers.name,
        "version": "1.0.0",
        "description": "",
        "main": "./generators/app/index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        devDependencies: {
        
        },
        dependencies: {
         
        }
      };
      // Extend or create package.json file in destination path
      this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
      this.npmInstall(['vue']);
      this.npmInstall(['vue'], { 'dev': true });
    } */
  /*  install () {
     this.log('start install')
     this.npmInstall();
     //this.yarnInstall(['lodash'], { 'dev': true });
   } */
}