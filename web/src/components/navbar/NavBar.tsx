import React from "react";
import { Flex, Text } from "@chakra-ui/core";

import { NavItem } from "./NavItem";

export interface NavItemDetails {
  name: string;
  logo: React.ReactNode;
  route: string;
  component: React.ReactNode;
}

interface NavBarProps {
  navItemList: NavItemDetails[];
}

export const NavBar: React.FC<NavBarProps> = ({ navItemList }) => {
  return (
    <Flex
      borderRight="1px solid"
      minHeight="100vh"
      direction="column"
      align="start"
    >
      <Flex p={3} pl={5}>
        <Text fontSize="3xl" p={0}>
          Gooru.
        </Text>
      </Flex>
      {navItemList.map((navItemDetails, index) => (
        <NavItem key={index} details={navItemDetails} />
      ))}
    </Flex>
  );
};