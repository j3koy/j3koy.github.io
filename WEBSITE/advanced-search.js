document.addEventListener("DOMContentLoaded", () => {
    // Add criteria functionality
    const addCriteriaBtn = document.getElementById("add-criteria-btn")
    const additionalCriteria = document.getElementById("additional-criteria")
    let criteriaCount = 1

    addCriteriaBtn.addEventListener("click", () => {
        criteriaCount++
        const newCriteria = document.createElement("div")
        newCriteria.className = "search-criteria"
        newCriteria.innerHTML = `
        <div class="field-selector">
          <select name="field${criteriaCount}" id="field${criteriaCount}">
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="genre">Genre</option>
            <option value="isbn">ISBN</option>
            <option value="publisher">Publisher</option>
          </select>
        </div>
        <div class="operator-selector">
          <select name="operator${criteriaCount}" id="operator${criteriaCount}">
            <option value="contains">contains</option>
            <option value="exact">is exactly</option>
            <option value="starts">starts with</option>
            <option value="ends">ends with</option>
          </select>
        </div>
        <div class="input-field">
          <input type="text" name="query${criteriaCount}" id="query${criteriaCount}" placeholder="Enter search term...">
        </div>
        <button type="button" class="remove-criteria-btn">
          <i class="fas fa-minus"></i>
        </button>
      `
        additionalCriteria.appendChild(newCriteria)

        // Add event listener to the remove button
        const removeBtn = newCriteria.querySelector(".remove-criteria-btn")
        removeBtn.addEventListener("click", () => {
            newCriteria.remove()
        })
    })

    // Form submission
    const searchForm = document.getElementById("advanced-search-form")
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault()

        // Collect all form data
        const formData = new FormData(searchForm)
        const searchParams = {}

        for (const [key, value] of formData.entries()) {
            searchParams[key] = value
        }

        // In a real application, this would send the search query to a server
        console.log("Search parameters:", searchParams)
        alert("Search submitted! Check console for details.")

        // Here you would typically redirect to a results page or fetch results via AJAX
    })
})
