const db = require('../Models')

async function seed() {
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Excellent staff, highly recommended!'
    })

    place.comments.push(comment.id)
    await place.save()
    
    process.exit()
}

seed()