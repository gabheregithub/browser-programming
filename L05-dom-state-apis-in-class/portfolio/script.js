let isDark = false;
const btnThemeToggle = document.getElementById("themeToggle");

function loadModePreference() {
    const saved = localStorage.getItem("portfolio_theme");
    if (saved !== null) {
      isDark = JSON.parse(saved);  // Convert string "true"/"false" to boolean
      if (isDark) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  }
  
  btnThemeToggle.onclick = function () {
    document.body.classList.toggle('dark');
    isDark = document.body.classList.contains('dark');  // Sync from actual class state
    localStorage.setItem("portfolio_theme", JSON.stringify(isDark));
    console.log(`DarkMode was toggled to ${isDark}`);
  };
  
  loadModePreference(); 

  // Last updated date - auto-generated
function updateLastUpdated() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    // Create or update the element
    let lastUpdatedEl = document.getElementById('last-updated');
    if (!lastUpdatedEl) {
      lastUpdatedEl = document.createElement('p');
      lastUpdatedEl.id = 'last-updated';
      lastUpdatedEl.textContent = `Last updated: ${formattedDate}`;
      document.querySelector('footer').appendChild(lastUpdatedEl);
    } else {
      lastUpdatedEl.textContent = `Last updated: ${formattedDate}`;
    }
  }
  
  // Run on page load
  updateLastUpdated();
  