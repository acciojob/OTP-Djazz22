document.addEventListener('DOMContentLoaded', () => {
    const codes = document.querySelectorAll('.code');

    codes.forEach((code, index) => {
        code.addEventListener('keydown', (e) => {
            if (e.key >= 0 && e.key <= 9) {
                codes[index].value = '';
                setTimeout(() => {
                    if (index < codes.length - 1) {
                        codes[index + 1].focus();
                    }
                }, 10);
            } else if (e.key === 'Backspace') {
                setTimeout(() => {
                    if (index > 0) {
                        codes[index - 1].focus();
                    }
                }, 10);
            }
        });
    });
});
