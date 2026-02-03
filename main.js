document.addEventListener('DOMContentLoaded', () => {
    // Theme switcher logic
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Function to apply theme
    const applyTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.checked = theme === 'dark';
    };

    // Event listener for the toggle
    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        applyTheme(newTheme);
    });

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);


    // Lotto generator logic
    const generateBtn = document.getElementById('generate-btn');
    const numbersDisplay = document.getElementById('numbers-display');

    const getBallColor = (number) => {
        if (number <= 10) return 'ball-color-1';
        if (number <= 20) return 'ball-color-2';
        if (number <= 30) return 'ball-color-3';
        if (number <= 40) return 'ball-color-4';
        return 'ball-color-5';
    };

    const generateLottoNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };

    const displayNumbers = (numbers) => {
        numbersDisplay.innerHTML = '';
        numbers.forEach(number => {
            const ball = document.createElement('div');
            ball.className = `lotto-ball ${getBallColor(number)}`;
            ball.textContent = number;
            numbersDisplay.appendChild(ball);
        });
    };

    generateBtn.addEventListener('click', () => {
        const lottoNumbers = generateLottoNumbers();
        displayNumbers(lottoNumbers);
    });

    // Display initial set of numbers on load
    displayNumbers(generateLottoNumbers());
});
