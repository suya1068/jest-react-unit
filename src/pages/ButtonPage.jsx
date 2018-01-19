import React from "react";

import Button from "src/components/button/Button";

function ButtonPage() {
    return (
        <div>
            <p>
                <Button>test</Button>
            </p>
            <p>
                <Button theme="primary">primay</Button>
            </p>
            <p>
                <Button theme="secondary">secondary</Button>
            </p>
            <p>
                <Button theme="positive">positive</Button>
            </p>
            <p>
                <Button theme="negative">negative</Button>
            </p>
        </div>
    );
}

export default ButtonPage;
