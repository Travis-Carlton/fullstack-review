module.exports = {
    getCouches: (req,res)=>{
        req.app.get('db').get_couches().then(couches => {
            res.json(couches)
        }).catch(error => {
            console.error('error in getCouches', error);
            res.status(500).json({ message: 'Blah Blah' })
        })
    },

    postCouch: (req, res) => {
        req.app.get('db').create_couch({ 
            user_id: req.session.user.id,
            name: req.body.name,
            price: req.body.price, 
            image: req.body.image
        }).then(couches => {
            res.status(200).json(couches[0])
        }).catch(error => {
            console.error('error in postCouch', error);
            res.status(500).json({ message: 'Blah Blah Blah' })
        })
    },
}