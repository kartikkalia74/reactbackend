/**
 * server class 
 * initilse server 
 * public routes
 * private routes
 * 
 */
import * as http from 'http'
import AppRoutes from './express'

const server = http.createServer(AppRoutes.routes())

server.listen(3001,()=>{
    console.log('server running')
})
