#Vertex International — Global Banking Dashboard
Vertex International Logo

Vertex International is a high-performance, modern fintech dashboard designed for seamless account management and financial tracking. Built with React and styled using a custom Dracula × Catppuccin hybrid color palette, this application offers a sleek, dark-mode interface for the modern user.

🚀 Live Demo
View Live Site at Vercel/Netlify: https://vertex-international-bo5ww1d41-gonzobonzogits-projects.vercel.app/

✨ Key Features
🏦 Interactive Account Management
Dynamic Account Switcher: Toggle between Debit, Credit, and Savings accounts with real-time balance updates.
Privacy Mode: "Hide/Unhide" functionality to obscure sensitive balance data from prying eyes.
Recent Activity Dropdown: View detailed transaction history directly inside the account card without leaving the main view.
📊 Financial Statistics & Insights
Monthly Overview: At-a-glance view of total monthly spending and bill averages.
Income Tracking: Automated list of incoming deposits, including dates and source accounts.
Credit Score Visualization: A custom-styled progress bar tracking credit worthiness (currently calibrated at 75% for the user profile).
💸 Robust Transaction Suite
Multi-Action Form: Support for Deposits, Internal Transfers (between user accounts), and External Payments.
Validation Engine: Prevents overdrafts and ensures valid amount entries with instant UI notifications.
Transaction Feed: A dedicated history feed that populates dynamically as users move money.
🎨 Premium UI/UX
Dracula x Catppuccin Themed: A carefully crafted dark-mode aesthetic designed for long-term use and high legibility.
Responsive Grid Layout: A sophisticated 3-column layout (Control Panel | Main Content | Statistics/Feed) that adapts to the user's current task.
🛠️ Tech Stack
Frontend: React.js (JSX)
Styling: CSS3 (Custom Properties, Flexbox, Grid)
State Management: React Hooks (useState, useEffect)
Icons/Avatars: DiceBear API / SVG Branding
Theme: Dracula & Catppuccin Framework
📦 Installation & Setup
To run this project locally, follow these steps:

Clone the repository:  https://github.com/gonzobonzogit/VertexInternational
```
bash


git clone 
```

Navigate to the project directory:

```bash


cd vertex-international
```

Install dependencies:

```bash


npm install
```
Start the development server:

```bash


npm run dev
```

📁 Project Structure
text


├── src
│   ├── components
│   │   ├── JS
│   │   │   ├── navbar.jsx           # Sticky top navigation
│   │   │   ├── accountSummary.jsx   # Center account switcher card
│   │   │   ├── statisticsCard.jsx   # Right-side financial insights
│   │   │   ├── transactionForm.jsx  # Execution logic for transfers/pays
│   │   │   └── notifications.jsx    # Pop-up status alerts
│   │   └── CSS
│   │       └── ... (Component-specific styling)
│   ├── services
│   │   └── AccountData.js           # Transaction processing logic
│   ├── App.jsx                      # Main layout and routing state
│   ├── main.jsx                     # Entry point
│   └── style.css                    # Global tokens and layout grid
🛡️ License
Distributed under the MIT License. See LICENSE for more information.

👤 Contact
Project Lead: [Gonzo] Project Link: https://github.com/gonzobonzogit/VertexInternational

Brought to you from a NixOS machine. React + Vite
