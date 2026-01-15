const {Subject} = require("../../models")


class SubjectService{

    static createSubject = async(data)=>{

        try{

            // extract name from input
            const {name} = data

            // find an existing subject

            const existingSubject = await Subject.findOne({where:{name}})

            if(existingSubject){
                throw new Error ("subject already exists")
            }

            // create a new subject
            const newSubject = await Subject.create({name})

            return newSubject;
        }
        catch(error){
            throw new Error(error.message || "Error creating subject")
        }


    };
    static readSubject = async()=>{

    };
    static updateSubject = async() =>{

    }
    static deleteSubject = async()=>{


    }
}
module.exports = SubjectService