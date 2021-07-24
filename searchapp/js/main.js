import { setSearchFocus, showClearTextButton, clearSearchText, clearPushListener } from "/js/searchBar.js";
import { deleteSearchResults, buildSearchResults, clearStatsLine, setStatsLine } from "/js/searchResults.js";
import { getSearchTerm, retrieveSearchResults } from "/js/dataFunctions.js";

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    // set the focus :
    setSearchFocus();
    // 3 listerners clear text :
    const search = document.getElementById("search");
    search.addEventListener("input", showClearTextButton);

    const clear = document.getElementById("clear");
    clear.addEventListener("click", clearSearchText);

    clear.addEventListener("keydown", clearPushListener);

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
};

// procedural "workflow" function

const submitTheSearch = (event) => {
    event.preventDefault();
    // delete search results
    deleteSearchResults();
    // process the search
    processTheSearch();
    // set the focus
    setSearchFocus();
};

// Procedural
const processTheSearch = async () => {
    // clear stats line :
    clearStatsLine();
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray); // build search results
    // set stats line :
    setStatsLine(resultArray.length);
};