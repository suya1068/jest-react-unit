import React from "react";
import ProgressBar from "./ProgressBar";

describe("# ProgressBar Component", () => {
    it("render <ProgresBar />", () => {
        const tree = renderer
            .create(<ProgressBar />)
            .toJSON();
            
        expect(tree).toMatchSnapshot();
    });
});
