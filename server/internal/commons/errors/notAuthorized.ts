class NotAuthorized extends Error {
    public status;

    constructor (message) {
        super(message)
        Error.captureStackTrace(this, this.constructor);
        
        this.name = this.constructor.name;
        this.status = 403;
    }
    
    statusCode() {
        return this.status
    }
}

export default NotAuthorized;
