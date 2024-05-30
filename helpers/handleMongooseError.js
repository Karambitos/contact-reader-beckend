 const handleMongooseError =(error, data, next) => {
    console.log(error.message);
    next();
}

 export default handleMongooseError