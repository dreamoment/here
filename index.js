const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const portfinder = require('portfinder')

portfinder.getPortPromise()
    .then(port => {

        const staticPath = './'

        const app = new Koa()
        app.use(static(
            path.join(process.cwd(), staticPath)
        ))
        app.listen(port, () => {
            console.log(`server is starting at port ${port}`)
        })
    })
    .catch(err => {
        console.error(err)
    })