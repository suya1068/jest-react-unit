import React from "react";
import Input from "src/components/input/Input";

describe("# Input Component", () => {
    it("렌더링 가능", () => {
        // shallow는 현재 노드를 렌더링하고 그 주변에 얕은 래퍼를 반환합니다.
        // 단일 노드의 래퍼에서만 호출 할 수 있습니다.
        // shallow([options]) => shallowWrapper
        const input = shallow(<Input/>);
        expect(input).toMatchSnapshot();
    });

    it("width를 설정 할 수 있다.", () => {
        const input = shallow(<Input width={30}/>);
        expect(input).toMatchSnapshot();
    });

    it("placeholder 값을 설정 할 수 있다.", () => {
        const input = shallow(<Input placeholder="테스트1"/>);
        expect(input).toMatchSnapshot();
    });

    it("input type을 설정할 수 있다.", () => {
        const input = shallow(<Input type="text"/>);
        expect(input).toMatchSnapshot();
    });
});

/**
 * 1. 컴포넌트 생성
 * 2. input창의 너비(width)를 설정할 수 있다.
 *      - 입력받거나
 *      - 기본값으로 세팅
 * 3. placeholder 의 값을 설정할 수 있다.
 * 4. type을 설정할 수 있다.
 *      - text || number || date
 * 5. type의 상세 설정이 가능하다 ... (pattern입력) ...생각만 하고 있음.
 */

