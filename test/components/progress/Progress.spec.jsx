import React from "react";
import Progress from "src/components/progress/Progress";

describe("# Progress Component", () => {
    it("render <Progres />", () => {
        const tree = renderer
            .create(<Progress />)
            .toJSON();
            
        expect(tree).toMatchSnapshot();
    });
});