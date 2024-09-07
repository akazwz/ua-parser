## User Agent Parser Service supported both http and grpc


### http: hono
### grpc: grpcjs for server and buf for protobuf management and code generation

### example response

````json
{
    "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    "browser": {
        "name": "Chrome",
        "version": "128.0.0.0",
        "major": "128"
    },
    "cpu": {
        "architecture": ""
    },
    "device": {
        "type": "",
        "vendor": "Apple",
        "model": "Macintosh"
    },
    "engine": {
        "name": "Blink",
        "version": "128.0.0.0"
    },
    "os": {
        "name": "macOS",
        "version": "10.15.7"
    }
}
````

if you like this project, please give me a star, thank you!