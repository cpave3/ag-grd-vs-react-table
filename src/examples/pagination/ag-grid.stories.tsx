import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AgGrid } from './ag-grid';


export default {
    title: "Pagination/AgGrid",
    component: AgGrid,
    argTypes: {},
} as ComponentMeta<typeof AgGrid>;

const Template: ComponentStory<typeof AgGrid> = () => <AgGrid />;
export const Pagination = Template.bind({});