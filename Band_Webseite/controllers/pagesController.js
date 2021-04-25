const Controller = require('../core/controller.js')

class PagesController extends Controller{

    constructor(...args){

        super(...args);

        const self = this;

     //   self.css('layout');

     /*
        self.before(['*','-imprint','-signin'], (next) => {
            console.log('all pages');
            if(self.req.authorized === true){
            next();
            }
            else{
                self.redirect(self.urlFor('pages', 'signin'))
            }
        });

        self.before('index',(next) => {
            console.log('only index');

            next();
        });



        self.before(['signin'], (next) => {
            console.log('all pages');
            if(self.req.authorized === true){
                self.redirect(self.urlFor('pages', 'index'))
            }
            else{
                next();
            }
        });

        self.before('index',(next) => {
            console.log('only index');

            next();
        });

    */

         self.before('index',(next) => {
            console.log('only index');

            next();
        });

    }

    

    actionIndex(){
        const self = this;
        self.render({
            title: 'HUHUHUHU'
        });
    }

    actionAufnahmen(){
        const self = this;
        self.render({
            title: 'Aufnahmen'
        });
    }

}

module.exports = PagesController;