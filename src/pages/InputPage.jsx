import React, { Component } from "react";
import Input from "src/components/input/Input";

export default class InputPage extends Component {
    constructor() {
        super();
        this.state = {};
    }
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

    render() {
        return (
            <div>
                <p>1. 컴포넌트 생성</p>
                <Input />
                <p>2. width값을 설정할 수 있다.</p>
                <Input width={500} />
                <p>3. placeholder 값을 설정할 수 있다.</p>
                <Input placeholder="테스트 placeholder" />
                <p>4. type을 설정할 수 있다.</p>
                - type: text <Input type="text"/><br/>
                - type: number <Input type="number"/><br/>
                - type: date <Input type="date"/><br/>
            </div>
        );
    }
}
