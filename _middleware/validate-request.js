module.exports = validateRequest;

function validateRequest(req, next, schem,) {
    const options = {
        abortEarly: false, //include all errors
        allowUnknown: true, // ignore unknown props
        stripUnkwon: true, // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        next(`Validation error: ${error,details.map(x => x.message).join(',')}`);
    } else {
        req.body = value;
        next();
    }
}   
