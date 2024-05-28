import express from 'express'
const app = express()



app.get('/article', (req, res) => {

    const limit = req.query.limit === undefined || req.query.limit > data.length ? 10 : req.query.limit
    const filter = req.query.filter

    const resultWithLimit = (tab) => {
        const result = []
        for (let i = 0; i < limit && i < tab.length; i++)
            result.push(tab[i])
        return result
    }

    if (filter !== undefined) {
        const filtered = data.filter(a => a.title.includes(filter))
        res.json(resultWithLimit(filtered))
    } else {
        res.json(resultWithLimit(data))
    }
})

app.get('/article/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const article = data.find(a => a.id === id)
    if (article === undefined) {
        res.status(404)
        res.json({
            message: `Article n° ${id} NOT FOUND`
        })
    } else {
        res.json(article)
    }
})

app.listen(3310, () => {
    console.log('Server started ...')
})