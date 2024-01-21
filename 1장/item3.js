"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var x = 'hello';
x = 1234;
function calculateArea(shape) {
    // instanceof 함수는 런타임 시에 동작하는 함수
    // 타입스크립트의 타입, interface, 타입 구문은 타임체커에서만 사용하고 트렌스파일 시 전부 삭제
    if (shape instanceof Rectangle) {
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
// 타입체커에서 활용할 수 있도록 로직을 수정1
function calculateArea2(shape) {
    // height 프로퍼티가 존재하는 여부로 판단(타입 추론 - 타입 좁히기)
    if ('height' in shape) {
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
// 타입체커에서 활용할 수 있도록 로직을 수정2
function calculateArea3(shape) {
    // kind라는 tag를 둬서 활용하는 방식(타입 추론 - 타입 좁히기)
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
// 클래스를 활용하는 방식
var Square2 = /** @class */ (function () {
    function Square2(width) {
        this.width = width;
    }
    return Square2;
}());
var Rectangle2 = /** @class */ (function (_super) {
    __extends(Rectangle2, _super);
    function Rectangle2(width, height) {
        var _this = _super.call(this, width) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    return Rectangle2;
}(Square2));
function calculateArea4(shape) {
    // instanceof 함수는 런타임 시에 동작하는 함수
    // 클래스의 경우는 런타임에도 존재하기 떄문에 해당 로직이 동작한다.
    if (shape instanceof Rectangle2) {
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
// 타입체커를 통과하지만 잘못된 로직
function asNumber(val) {
    return val;
}
