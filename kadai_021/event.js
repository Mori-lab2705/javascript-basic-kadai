const addBtn = document.getElementById('btn');




addBtn.addEventListener('click', () => {
    setTimeout(() => {
        const text = document.getElementById('text');
        text.textContent = 'ボタンをクリックしました';
});
}, 2000);
