class ResponseHandler{
    static ok (res,message= "Success" ,data = "null") {

        return res.status(200).json({
            success:true,
            message,
            data
        })
    }
    static created (res,message = "Created successfully",data = null) {
        return res.status(201).json({
            success:true,
            message,
            data
        })

    }
    static badRequest (res,message = "Bad Request", errors=null) {
        return res.status(400).json({
            success:false,
            message,
            errors
        })

    }
    static unauthorized (res,message ="Unauthorized") {
        return res.status(401).json({
            success:false,
            message
        })
    }
    static forbidden (res,message = "Forbiddne") {
        return res.status(403).json({
            success:false,
            message
        })

    }
    static notFound (res,message = "Not Found") {
        return res.status(404).json({
            success:false,
            message
        })

    }
    static conflict (res,message = "Conflict") {
        return res.status(409).json({
            success:false,
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