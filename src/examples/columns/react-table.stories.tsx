import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ReactTable } from './react-table';


export default {
    title: "Columns/ReactTable",
    component: ReactTable,
    argTypes: {},
} as ComponentMeta<typeof ReactTable>;

const Template: ComponentStory<typeof ReactTable> = () => <ReactTable />;
export const Columns = Template.bind({});