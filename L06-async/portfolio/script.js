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
  
// External API Demo
const loadDataBtn = document.getElementById('loadDataBtn');
const dataOutput = document.getElementById('dataOutput');

loadDataBtn.addEventListener('click', async function() {
    loadDataBtn.disabled = true;
    loadDataBtn.textContent = 'Loading...';
    dataOutput.textContent = 'Loading...';
    
    try {
        // Why do we use async/await? 
        // It makes asynchronous code readable like synchronous code, handles promises cleanly without .then() chains.
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        // Why do we check response.ok? 
        // It verifies the HTTP status is 200-299 (success); other statuses (like 404, 500) mean failure even if no exception thrown.
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const userData = await response.json();
        
        // Display selected fields
        dataOutput.innerHTML = `
            <h3>${userData.name}</h3>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Company:</strong> ${userData.company.name}</p>
        `;
    } catch (error) {
        // Why do we use try/catch? 
        // It handles runtime errors gracefully (network issues, JSON parse failures) instead of crashing the app.
        
        console.error('API Error:', error);
        dataOutput.textContent = 'Error loading data';
    } finally {
        loadDataBtn.disabled = false;
        loadDataBtn.textContent = 'Load Data';
    }
});
