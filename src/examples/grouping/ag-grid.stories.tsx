import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AgGrid } from './ag-grid';


export default {
    title: "Grouping/AgGrid",
    component: AgGrid,
    argTypes: {},
} as ComponentMeta<typeof AgGrid>;

const Template: ComponentStory<typeof AgGrid> = () => <AgGrid />;
export const Grouping = Template.bind({});