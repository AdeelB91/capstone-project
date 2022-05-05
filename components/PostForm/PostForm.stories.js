// import { PostForm } from "./PostForm";
// import React from "react";

// export default {
//   title: "Components/SeriesCard",
//   component: PostForm,
//   args: {},
// };

// const Template = (args) => <PostForm {...args} />;

// export const DefaultPostCard = Template.bind({});
// DefaultSeriesCard.args = {
//   value: PostForm,
// };
import PostForm from "./PostForm";

export default {
  title: "Components/PostForm",
};

export const Default = () => PostForm;
