class ResponseHandler{
    static ok (res,message= "Success" ,data = "null") {
        return res.status(200).json({
            message,
            data
        })
    }
    static created (res,message = "Created successfully",data = null) {
        return res.status(201).json({
            message,
            data
        })

    }
    static badRequest (res,message = "Bad Request", errors=null) {
        return res.status(400).json({
            message,
            errors
        })

    }
    static unauthorized (res,message ="Unauthorized") {
        return res.status(401).json({
            message
        })
    }
    static forbidden (res,message = "Forbidden") {
        return res.status(403).json({
            message
        })

    }
    static notFound (res,message = "Not Found") {
        return res.status(404).json({
            message
        })

    }
    static conflict (res,message = "Conflict") {
        return res.status(409).json({
            message
        })

    }
    static serverError (res,message = "Internal Server Error") {
        return res.status(500).json({
            res,
            message
        })
    }

}

module.exports = ResponseHandler