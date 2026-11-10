// Please do not change the prewritten code

const Solution = async () => {
  // Write your code here
  const response = await require("axios").get(
    "https://api.codingninjas.com/api/v3/event_tags"
  );
  console.log(response.data);
};
Solution();
module.exports = Solution;
