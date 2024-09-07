import * as grpc from '@grpc/grpc-js'
import {ParseRequest, ParseResponse, UAParserServiceServer,UAParserServiceService} from './gen/uap/v1/uap'
import { UAParser } from 'ua-parser-js'

export const GRPC_PORT = 9090
export const server = new grpc.Server()

class ServiceImpl implements UAParserServiceServer {
    [key: string]: any;
    parse: grpc.handleUnaryCall<ParseRequest, ParseResponse> = (call, callback) => {
       const {ua, browser, cpu,device,engine,os} = UAParser(call.request.ua)
       callback(null,ParseResponse.fromJSON({
              ua,
              browser,
              cpu,
              device,
              engine,
              os
       }))
    }
}

server.addService(UAParserServiceService, new ServiceImpl())

server.bindAsync(`0.0.0.0:${GRPC_PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(`grpc server listening on port ${port}`)
})
