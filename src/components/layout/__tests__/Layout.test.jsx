import { render } from "@testing-library/react";
import React from "react";
import Layout from "../Layout";
import { screen } from "@testing-library/react";

describe("Layout", () => {
    it('should render layout component', () => {
        const { getByText } = render(
            <Layout>
                <div>Test Component</div>
            </Layout>
        );
        
        expect(screen.getByText('Test Component')).toBeInTheDocument();
    })
})
