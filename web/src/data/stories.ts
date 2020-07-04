import { Story } from "../types/story";
import { dummyUser1, dummyUser2, dummyUser3 } from "./users";
import {
  dummyScene1,
  dummyScene2,
  dummyScene3,
  dummyScene4,
  dummyScene5,
  dummyScene6,
} from "./scenes";

const dummyStory1: Story = {
  title: "Resolving conflicts in the workplaces",
  creator: dummyUser1,
  assignees: [dummyUser3],
  scenes: [dummyScene1, dummyScene2, dummyScene3, dummyScene4, dummyScene5],
  lastUpdated: new Date(),
};

const dummyStory2: Story = {
  title: "Introduction to compliance",
  creator: dummyUser2,
  assignees: [dummyUser3],
  scenes: [dummyScene1, dummyScene2, dummyScene3, dummyScene4, dummyScene6],
  lastUpdated: new Date(),
};

export { dummyStory1, dummyStory2 };