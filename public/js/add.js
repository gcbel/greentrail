// DEPENDENCIES

// ELEMENTS
const addEatModal = $("#addEatModal");
const saveNewEatProviderBtn = $("#saveNewEatProviderBtn");
const addExploreModal = $("#addExploreModal");
const saveNewExploreProviderBtn = $("#saveNewExploreProviderBtn");
const addServiceModal = $("#addServiceModal");
const saveNewServiceProviderBtn = $("#saveNewServiceProviderBtn");
const addStayModal = $("#addStayModal");
const saveNewStayProviderBtn = $("#saveNewStayProviderBtn");

// DATA
const TAGS = {
  AMENITY: 1,
  COFFEE: 2,
  COOKING_LESSONS: 3,
  EAT: 4,
  EXPLORE: 5,
  FLORA_AND_FAUNA: 6,
  GROCERIES: 7,
  HISTORY: 8,
  LANGUAGE_LESSONS: 9,
  LEARN: 10,
  MASSAGE: 11,
  STAY: 12,
};

// FUNCTIONS

// adds a Provider and associated EAT Tag
function handleSaveEatProvider() {
  const communityId = $("#eatCommunityInput").val();
  const providerName = $("#eatNameInput").val();
  const providerDescription = $("#eatDescriptionInput").val();
  return addProviderAndTag(
    TAGS.EAT,
    communityId,
    providerName,
    providerDescription
  );
}
// adds a Provider and associated EXPLORE Tag
function handleSaveExploreProvider() {
  const communityId = $("#exploreCommunityInput").val();
  const providerName = $("#exploreNameInput").val();
  const providerDescription = $("#exploreDescriptionInput").val();
  return addProviderAndTag(
    TAGS.EXPLORE,
    communityId,
    providerName,
    providerDescription
  );
}
// adds a Provider and associated AMENITY Tag
function handleSaveServiceProvider() {
  const communityId = $("#serviceCommunityInput").val();
  const providerName = $("#serviceNameInput").val();
  const providerDescription = $("#serviceDescriptionInput").val();
  return addProviderAndTag(
    TAGS.AMENITY,
    communityId,
    providerName,
    providerDescription
  );
}
// adds a Provider and associated STAY Tag
function handleSaveStayProvider() {
  const communityId = $("#stayCommunityInput").val();
  const providerName = $("#stayNameInput").val();
  const providerDescription = $("#stayDescriptionInput").val();
  return addProviderAndTag(
    TAGS.STAY,
    communityId,
    providerName,
    providerDescription
  );
}

// adds a Provider and associated Tag of specified type
const addProviderAndTag = async (
  tagId,
  community_id,
  provider_name,
  providerDescription
) => {
  const site_id = 14;
  const service = providerDescription; // name change from service to providerDescription is WIP

  if (!(community_id && provider_name && site_id && providerDescription)) {
    alert("All fields are required");
    return;
  }
  console.log("community_id", community_id);
  console.log("provider_name", provider_name);
  console.log("site_id", site_id);
  console.log("providerDescription", providerDescription);
  console.log("tagId", tagId);

  const response = await fetch("/api/providers", {
    method: "POST",
    body: JSON.stringify({
      community_id,
      provider_name,
      site_id,
      service,
      tag_id: tagId,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log(response);
  } else {
    alert("response failed");
  }
};

saveNewEatProviderBtn.on("click", handleSaveEatProvider);
saveNewExploreProviderBtn.on("click", handleSaveExploreProvider);
saveNewServiceProviderBtn.on("click", handleSaveServiceProvider);
saveNewStayProviderBtn.on("click", handleSaveStayProvider);
