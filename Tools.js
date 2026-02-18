export const Tools = {
    render: () => {
        const tools = [
            { name: 'JavaScript', icon: 'code-2' },
            { name: 'React', icon: 'atom' },
            { name: 'CSS', icon: 'palette' },
            { name: 'Node.js', icon: 'server' },
            { name: 'Git', icon: 'git-branch' },
            { name: 'Figma', icon: 'pen-tool' }
        ];

        return `
      <section class="section-content">
        <div class="fluted-card">
          <h2>Tools & Technologies</h2>
          <div class="grid-tools">
            ${tools.map(tool => `
              <div class="tool-item">
                <i data-lucide="${tool.icon}" style="margin-bottom: 0.5rem;"></i>
                <span>${tool.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
    }
};
