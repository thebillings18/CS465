const index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways' });
};

const about = (req, res) => {
    res.render('about', { title: 'About Travlr' });
};

const tours = (req, res) => {
    res.render('tours', { title: 'Tours' });
};

const contact = (req, res) => {
    res.render('contact', { title: 'Contact Us' });
};

module.exports = {
    index,
    about,
    tours,
    contact
};
