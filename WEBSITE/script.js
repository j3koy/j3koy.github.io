document.addEventListener("DOMContentLoaded", () => {
  // Header scroll behavior
  const header = document.querySelector("header")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down & past the initial 100px
      header.classList.add("header-hidden")
    } else {
      // Scrolling up or at the top
      header.classList.remove("header-hidden")
    }

    lastScrollTop = scrollTop
  })

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const menu = document.querySelector(".menu")

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active")

    // Animate hamburger to X
    const spans = menuToggle.querySelectorAll("span")
    spans.forEach((span) => span.classList.toggle("active"))
  })

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest("nav") && menu.classList.contains("active")) {
      menu.classList.remove("active")

      const spans = menuToggle.querySelectorAll("span")
      spans.forEach((span) => span.classList.remove("active"))
    }
  })

  // Read More Button
  const readMoreBtn = document.querySelector(".read-more-btn")
  if (readMoreBtn) {
    const shortDescription = document.querySelector(".short-description")
    const fullDescription = document.querySelector(".full-description")

    readMoreBtn.addEventListener("click", () => {
      if (fullDescription.classList.contains("hidden")) {
        fullDescription.classList.remove("hidden")
        shortDescription.classList.add("hidden")
        readMoreBtn.textContent = "Read Less"
      } else {
        fullDescription.classList.add("hidden")
        shortDescription.classList.remove("hidden")
        readMoreBtn.textContent = "Read More"
      }
    })
  }

  // Search Bar Functionality
  const searchInput = document.querySelector(".search-bar input")
  const searchBtn = document.querySelector(".search-btn")
  const advancedBtn = document.querySelector(".advanced-btn")

  if (searchInput && searchBtn) {
    searchBtn.addEventListener("click", () => {
      performSearch()
    })

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        performSearch()
      }
    })
  }

  if (advancedBtn) {
    advancedBtn.addEventListener("click", () => {
      // Redirect to advanced search page
      window.location.href = "advanced-search.html"
    })
  }

  function performSearch() {
    const query = searchInput.value.trim()
    if (query) {
      // In a real application, this would send the search query to a server
      alert(`Searching for: ${query}`)
    } else {
      alert("Please enter a search term")
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Offset for fixed header
            behavior: "smooth",
          })

          // Close mobile menu if open
          if (menu.classList.contains("active")) {
            menu.classList.remove("active")
            const spans = menuToggle.querySelectorAll("span")
            spans.forEach((span) => span.classList.remove("active"))
          }
        }
      }
    })
  })
})
