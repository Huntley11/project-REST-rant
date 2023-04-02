const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    try{
        let place = await db.place_schema.findOne({ name: 'H-Thai-ML' })

        // Create a fake sample comment.
        let comment = await db.Comment.create({
            author: 'Famished Fran',
            rant: false,
            stars: 5.0,
            content: 'Wow, simply amazing! Highly recommended!'
        })

        // Add that comment to the place's comment array.
        place.comments.push(comment.id)

        //save the place now that it has comment
        await place.save()
        console.log('Done saving comment')
    }
    catch (err) {
        console.log(err)
    }    
    // Exit the program
    process.exit()
}

seed()
