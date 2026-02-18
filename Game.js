export const Game = {
    render: () => `
    <section class="section-content">
      <div class="fluted-card">
        <h2>Mini Game</h2>
        <p>A simple proof of concept for interactivity.</p>
        <div style="text-align: center; margin-top: 2rem;">
          <button id="clicker-btn" style="
            background: var(--color-highlight);
            border: none;
            padding: 1rem 2rem;
            border-radius: 50%;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            width: 100px;
            height: 100px;
            transition: transform 0.1s;
          ">
            Click
          </button>
          <p style="margin-top: 1rem; font-size: 1.5rem;">Score: <span id="clicker-count">0</span></p>
        </div>
      </div>
    </section>
  `,
    mount: () => {
        const btn = document.getElementById('clicker-btn');
        const countDisplay = document.getElementById('clicker-count');
        if (btn && countDisplay) {
            let count = 0;
            btn.onclick = () => {
                count++;
                countDisplay.textContent = count;
                // Simple scale effect
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => btn.style.transform = 'scale(1)', 100);
            };
        }
    }
};
