// 1. Create your getBusinesses function here:

async function getBusinesses(search_term, location, num_results) {
    search_term.log
    location.log
    num_results.log
}

// 2. When you're done, uncomment the test code below and preview index.html in your browser:

console.log(
    "Should display 3 pizza restaurants in Asheville:",
    getBusinesses("Asheville, NC", "pizza", 3)
);
console.log(
    "Should display 10 thai restaurants in San Francisco:",
    getBusinesses("San Francisco, CS", "thai", 10)
);