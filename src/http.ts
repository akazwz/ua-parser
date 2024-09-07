import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { UAParser } from 'ua-parser-js';

const app = new Hono()

app.get('/', (c) => {
    let ua = c.req.header('user-agent') as string
    if (c.req.query('ua')) {
        ua = c.req.query('ua') as string
    }
    const {browser,cpu,device, os} = UAParser(ua!)
    return c.json({
        browser,
        cpu,
        device,
        os,
    })
})

serve(app)