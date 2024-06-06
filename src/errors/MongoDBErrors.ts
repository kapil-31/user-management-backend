
export class MongoDBErrors extends Error {

    validationErrors: { [key: string]: string };
    
    constructor(e){
        if(e.code===11000 || e.code == 11001){
            const duplicateKey = Object.keys(e.keyPattern)[0];
            super(`${duplicateKey.charAt(0).toUpperCase() + duplicateKey.slice(1)} already exists`)
            this.name='DuplicatedError'
        }
        else if(e.name==='ValidationError'){
            const errors = e.errors;
            super()
            this.name = 'ValidationError';
            this.validationErrors = errors
        }
        else  {
            super(e)
        }

    }
  }
  