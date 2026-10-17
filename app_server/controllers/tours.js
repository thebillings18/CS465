const tours = (req, res) => {
    res.render('tours', { 
        title: 'Tours'
    });
};

module.exports = {
    tours
};
