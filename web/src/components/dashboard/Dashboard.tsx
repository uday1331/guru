import React, { FC, useContext } from "react";
import { Box, PseudoBox, Text } from "@chakra-ui/core";
import { ActivityBox, ActivityBoxProps } from "./ActivityBox";
import { Title } from "../reusables";
import { dummyUser1 } from "../../data/users";
import { dummyStory1 } from "../../data";
import moment from "moment";
import { DataContext } from "../../context";
import { Carousel } from "./Carousel";

export const Dashboard: FC = () => {
  const {
    storyHandler: { stories },
  } = useContext(DataContext);

  const { picture, name } = dummyUser1;
  const { title: storyTitle } = dummyStory1;
  const activities: ActivityBoxProps[] = [
    "working",
    "completed",
    "created",
  ].map(activityType => ({
    picture,
    name,
    activityType,
    storyTitle,
    time: moment().subtract(1, "day").toDate(),
  }));

  return (
    <Box color={"revolver.500"} px={8} py={1} w={"100%"}>
      <Box my={3}>
        <Title title={"Dashboard"} />
      </Box>

      <Box my={6}>
        <Box fontWeight={"600"}>
          <Box display={"inline-block"}>
            <Title
              title={"Recent Activities"}
              style={{ fontSize: "xl", fontWeight: "500" }}
            />
          </Box>
          <PseudoBox
            display={"inline-block"}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
          >
            <Text mx={4} fontSize={"sm"} color={"camelot.400"}>
              see all
            </Text>
          </PseudoBox>
        </Box>

        <Box>
          {activities.map((props, index) => (
            <Box key={index} my={2}>
              <ActivityBox {...props} />
            </Box>
          ))}
        </Box>
      </Box>

      <Box my={8}>
        <Box my={3}>
          <Title
            title={"Top Stories"}
            style={{ fontSize: "xl", fontWeight: "500" }}
          />
        </Box>
        <Box>
          <Carousel stories={Array(4).fill(stories[0])} />
        </Box>
      </Box>

      <Box my={8}>
        <Box my={3}>
          <Title
            title={"Recommended for you"}
            style={{ fontSize: "xl", fontWeight: "500" }}
          />
        </Box>
        <Box>
          <Carousel stories={stories} />
        </Box>
      </Box>
    </Box>
  );
};
