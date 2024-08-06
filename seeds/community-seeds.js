const Community = require("../models/Community");

const communityData = [
  {
    community_name: "Chacala",
    description:
      "Chacala is a coastal village, in the state of Nayarit, 60 miles north of Puerto Vallarta. Visitors tend to fall in love with the warm community; visitors on their 6th or 10th visit are more common than first-timers. There is nothing here that you 'have to do' - no obligatory tourist destinations, postcard moments that you have to check off - and so there is nothing to do but explore, enjoy and connect.",
    town_id: 1,
    community_center_site_id: 2,
  },
];

const seedCommunity = () => Community.bulkCreate(communityData);

module.exports = seedCommunity;
