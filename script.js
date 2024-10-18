// 这里将来添加交互功能
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // 每5秒切换一次
}

// 自动轮播
setInterval(() => {
    plusSlides(1);
}, 5000);

console.log("网站加载完成");
