import axios from 'axios';

const {host} = require('../config.json');
export default  new (class Api{
    constructor(){

    }


    courses(){
        return [
            {
                id: 1,
                name: "s"
            }
        ] 
    }
})();