import express from 'express'

const router = express.Router()

router.get('/', () => {
    return res.json({
        message: "Hello World"
    })
})

export default router
