exports.post = (req, res, next) => {
    res.status(200).send('Route POST');
};

exports.get = (req, res, next) => {
    res.status(200).send('Route GET');
}

exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
 };