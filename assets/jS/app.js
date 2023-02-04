const availabilityForm = document.querySelector("#availability-form");
const availabilityList = document.querySelector("#availability-list");
const friendSearch = document.querySelector("#friend-search");
const searchResultsContainer = document.querySelector("#search-results");

let availabilities = [];

availabilityForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const formData = new FormData(availabilityForm);
  const name = formData.get("name");
  const startTime = new Date("1970-01-01T" + formData.get("start-time") + "Z");
  const endTime = new Date("1970-01-01T" + formData.get("end-time") + "Z");

  if (startTime >= endTime) {
    alert("The end time must be after the start time.");
    return;
  }

  availabilities.push({ name, startTime, endTime });
  
  renderAvailabilityList();
  clearForm();
});

function renderAvailabilityList(list = availabilities) {
    availabilityList.innerHTML = "";
    
    for (const availability of list) {
      const listItem = document.createElement("li");
      listItem.textContent = `${availability.name}: ${availability.startTime} - ${availability.endTime}`;
      availabilityList.appendChild(listItem);
    }
  }
// search for a friend's availability
friendSearch.addEventListener("input", function(event) {
  const searchTerm = event.target.value.toLowerCase();
  
  const filteredAvailabilities = availabilities.filter(availability => {
    return availability.name.toLowerCase().includes(searchTerm) || 
    availability.startTime.toLowerCase().includes(searchTerm) || 
    availability.endTime.toLowerCase().includes(searchTerm);
  });
  
  renderAvailabilityList(filteredAvailabilities);
});

function renderSearchResults(results) {
  searchResultsContainer.innerHTML = "";
  
  if (results.length === 0) {
    searchResultsContainer.textContent = "No results found.";
    return;
  }
  
  for (const result of results) {
    const resultItem = document.createElement("div");
    resultItem.textContent = `${result.name}: ${result.startTime} - ${result.endTime}`;
    searchResultsContainer.appendChild(resultItem);
  }
}

function clearForm() {
  availabilityForm.reset();
}