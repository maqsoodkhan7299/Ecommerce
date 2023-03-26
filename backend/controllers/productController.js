exports.getProducts = (req, res, next) => {
    res.status(200).json({
       success: true,
       message: 'this will show all products frrorm data base'
    })
}