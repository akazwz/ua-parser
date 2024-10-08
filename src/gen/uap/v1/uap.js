"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: uap/v1/uap.proto
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UAParserServiceClient = exports.UAParserServiceService = exports.OS = exports.Engine = exports.Device = exports.CPU = exports.Browser = exports.ParseResponse = exports.ParseRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "uap.v1";
function createBaseParseRequest() {
    return { ua: "" };
}
exports.ParseRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ua !== "") {
            writer.uint32(10).string(message.ua);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ua = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { ua: isSet(object.ua) ? globalThis.String(object.ua) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.ua !== "") {
            obj.ua = message.ua;
        }
        return obj;
    },
    create(base) {
        return exports.ParseRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseParseRequest();
        message.ua = (_a = object.ua) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseParseResponse() {
    return { ua: "", browser: undefined, cpu: undefined, device: undefined, engine: undefined, os: undefined };
}
exports.ParseResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ua !== "") {
            writer.uint32(10).string(message.ua);
        }
        if (message.browser !== undefined) {
            exports.Browser.encode(message.browser, writer.uint32(18).fork()).ldelim();
        }
        if (message.cpu !== undefined) {
            exports.CPU.encode(message.cpu, writer.uint32(26).fork()).ldelim();
        }
        if (message.device !== undefined) {
            exports.Device.encode(message.device, writer.uint32(34).fork()).ldelim();
        }
        if (message.engine !== undefined) {
            exports.Engine.encode(message.engine, writer.uint32(42).fork()).ldelim();
        }
        if (message.os !== undefined) {
            exports.OS.encode(message.os, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ua = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.browser = exports.Browser.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.cpu = exports.CPU.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.device = exports.Device.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.engine = exports.Engine.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.os = exports.OS.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            ua: isSet(object.ua) ? globalThis.String(object.ua) : "",
            browser: isSet(object.browser) ? exports.Browser.fromJSON(object.browser) : undefined,
            cpu: isSet(object.cpu) ? exports.CPU.fromJSON(object.cpu) : undefined,
            device: isSet(object.device) ? exports.Device.fromJSON(object.device) : undefined,
            engine: isSet(object.engine) ? exports.Engine.fromJSON(object.engine) : undefined,
            os: isSet(object.os) ? exports.OS.fromJSON(object.os) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ua !== "") {
            obj.ua = message.ua;
        }
        if (message.browser !== undefined) {
            obj.browser = exports.Browser.toJSON(message.browser);
        }
        if (message.cpu !== undefined) {
            obj.cpu = exports.CPU.toJSON(message.cpu);
        }
        if (message.device !== undefined) {
            obj.device = exports.Device.toJSON(message.device);
        }
        if (message.engine !== undefined) {
            obj.engine = exports.Engine.toJSON(message.engine);
        }
        if (message.os !== undefined) {
            obj.os = exports.OS.toJSON(message.os);
        }
        return obj;
    },
    create(base) {
        return exports.ParseResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseParseResponse();
        message.ua = (_a = object.ua) !== null && _a !== void 0 ? _a : "";
        message.browser = (object.browser !== undefined && object.browser !== null)
            ? exports.Browser.fromPartial(object.browser)
            : undefined;
        message.cpu = (object.cpu !== undefined && object.cpu !== null) ? exports.CPU.fromPartial(object.cpu) : undefined;
        message.device = (object.device !== undefined && object.device !== null)
            ? exports.Device.fromPartial(object.device)
            : undefined;
        message.engine = (object.engine !== undefined && object.engine !== null)
            ? exports.Engine.fromPartial(object.engine)
            : undefined;
        message.os = (object.os !== undefined && object.os !== null) ? exports.OS.fromPartial(object.os) : undefined;
        return message;
    },
};
function createBaseBrowser() {
    return { name: "", version: "", major: "" };
}
exports.Browser = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.major !== "") {
            writer.uint32(26).string(message.major);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBrowser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.major = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            version: isSet(object.version) ? globalThis.String(object.version) : "",
            major: isSet(object.major) ? globalThis.String(object.major) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.version !== "") {
            obj.version = message.version;
        }
        if (message.major !== "") {
            obj.major = message.major;
        }
        return obj;
    },
    create(base) {
        return exports.Browser.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBrowser();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        message.major = (_c = object.major) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseCPU() {
    return { architecture: "" };
}
exports.CPU = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.architecture !== "") {
            writer.uint32(10).string(message.architecture);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCPU();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.architecture = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { architecture: isSet(object.architecture) ? globalThis.String(object.architecture) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.architecture !== "") {
            obj.architecture = message.architecture;
        }
        return obj;
    },
    create(base) {
        return exports.CPU.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCPU();
        message.architecture = (_a = object.architecture) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDevice() {
    return { type: "", vendor: "", model: "" };
}
exports.Device = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.vendor !== "") {
            writer.uint32(18).string(message.vendor);
        }
        if (message.model !== "") {
            writer.uint32(26).string(message.model);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDevice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.vendor = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.model = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            vendor: isSet(object.vendor) ? globalThis.String(object.vendor) : "",
            model: isSet(object.model) ? globalThis.String(object.model) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.vendor !== "") {
            obj.vendor = message.vendor;
        }
        if (message.model !== "") {
            obj.model = message.model;
        }
        return obj;
    },
    create(base) {
        return exports.Device.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDevice();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.vendor = (_b = object.vendor) !== null && _b !== void 0 ? _b : "";
        message.model = (_c = object.model) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEngine() {
    return { name: "", version: "" };
}
exports.Engine = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEngine();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            version: isSet(object.version) ? globalThis.String(object.version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.version !== "") {
            obj.version = message.version;
        }
        return obj;
    },
    create(base) {
        return exports.Engine.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEngine();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseOS() {
    return { name: "", version: "" };
}
exports.OS = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOS();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            version: isSet(object.version) ? globalThis.String(object.version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.version !== "") {
            obj.version = message.version;
        }
        return obj;
    },
    create(base) {
        return exports.OS.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOS();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
exports.UAParserServiceService = {
    parse: {
        path: "/uap.v1.UAParserService/parse",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ParseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ParseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ParseResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ParseResponse.decode(value),
    },
};
exports.UAParserServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.UAParserServiceService, "uap.v1.UAParserService");
function isSet(value) {
    return value !== null && value !== undefined;
}
