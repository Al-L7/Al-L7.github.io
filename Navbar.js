export function renderNavbar(sections) {
    return `
    <nav>
      ${sections.map(section => `
        <button data-section="${section}">
          ${section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      `).join('')}
    </nav>
  `;
}
