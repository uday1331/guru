import React from "react";
import { Grid, Flex } from "@chakra-ui/core";

import { NavBar } from "../.";

export interface NavItemDetails {
  name: string;
  logo: React.ReactNode;
  route: string;
  component?: React.ReactNode;
}

interface TemplateProps {
  navItemList: NavItemDetails[];
  children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = ({
  navItemList,
  children,
}) => {
  return (
    <Grid templateColumns="17% 83%">
      <NavBar navItemList={navItemList} />
      <Flex overflowX="scroll" maxHeight="100vh">
        {children}
      </Flex>
    </Grid>
  );
};
