import useNewsQuery from "../hooks/useNewsQuery";

export function newsReducer(state, action) {
  console.log("action", action);
  switch (action.type) {
    case "category":
      return useNewsQuery(`/top-headlines?category=${action.payload.category}`);
    case "search":
      const data = useNewsQuery(
        `/top-headlines/search?q=${action.payload.searchText}`
      );
      console.log("data", data);
      return [];
    default:
      return useNewsQuery();
  }
}
