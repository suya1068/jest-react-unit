import React from "react";
import Sample from "src/app/components/sample/Sample";

describe("<Sample />", () => {
    it("renders three <Sample /> components", () => {
        const tree = renderer
            .create(<Sample />)
            .toJSON();
            
        expect(tree).toMatchSnapshot();
    });
});