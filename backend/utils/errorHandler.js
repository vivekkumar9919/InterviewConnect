// class CustomError extends Error {
//     constructor(message, statuscode, name) {
//         super(message)
//         this.statuscode = statuscode
//         this.name = name
//     }
//     // static alreadyExist(message, statuscode, name) {
//     //     return new CustomError(message, statuscode, name)
//     // }
// }

const CustomError = (status,message)=>{
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
}

module.exports = CustomError;