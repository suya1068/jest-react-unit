import React from "react";
import Sample from "./Sample";

describe("<Sample />", () => {
    it("renders three <Sample /> components", () => {
        const tree = renderer
            .create(<Sample name="홍길동" />)
            .toJSON();
            
        expect(tree).toMatchSnapshot();
    });
});