class HandlerMiddleware {
    responses (err, req, res, next) {
        console.log('\n\n\n aquiii \n\n\n')
        if(err && err !== '') {
            res.status(err.status || 500).json({
                message: err.message || 'Internal Error',
                error: err.error
            });
        }

        console.log('--->', res);
    }
}

export default new HandlerMiddleware();