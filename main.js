
import { renderNavbar } from './components/Navbar.js';
import { Home } from './sections/Home.js';
import { CV } from './sections/CV.js';
import { Tools } from './sections/Tools.js';
import { Game } from './sections/Game.js';

const routes = {
    'home': Home,
    'cv': CV,
    'tools': Tools,
    'game': Game
};

function init() {
    const app = document.getElementById('app');
    const header = document.getElementById('header');
    const main = document.getElementById('main-content');

    // Render Navbar
    header.innerHTML = renderNavbar(Object.keys(routes));

    // Handle Navigation
    function navigate(sectionName) {
        const section = routes[sectionName];
        if (section) {
            // Render content
            main.innerHTML = section.render();

            // Mount lifecycle for interactivity
            if (section.mount) {
                section.mount();
            }

            // Update active state in nav
            document.querySelectorAll('nav button').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.section === sectionName);
            });

            // Re-initialize icons
            if (window.lucide) {
                window.lucide.createIcons();
            }
        }
    }

    // Event Delegation for Navigation
    header.addEventListener('click', (e) => {
        if (e.target.matches('button[data-section]')) {
            const sectionName = e.target.dataset.section;
            navigate(sectionName);
        }
    });

    // Initial Load
    navigate('home');
}

document.addEventListener('DOMContentLoaded', init);
