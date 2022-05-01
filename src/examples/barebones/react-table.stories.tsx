import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ReactTable } from './react-table';


export default {
    title: "Barebones/ReactTable",
    component: ReactTable,
    argTypes: {},
} as ComponentMeta<typeof ReactTable>;

const Template: ComponentStory<typeof ReactTable> = () => <ReactTable />;
export const Barebones = Template.bind({});