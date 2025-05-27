function startRandomBackgroundColorChange() {
  const colors = [
    "#FF5733","#33FF57","#3357FF","#F39C12","#8E44AD","#1ABC9C","#E74C3C","#2ECC71","#3498DB","#9B59B6" 
  ];

  setInterval(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }, 100);
}

startRandomBackgroundColorChange();
