var overlayElement = document.getElementById('overlay');
var locationBoxElement = document.getElementById('locationBox');

function toggleLocationBox() {
  if (overlayElement.style.display === 'none') {
    overlayElement.style.display = 'block';
    locationBoxElement.style.display = 'block';
  } else {
    overlayElement.style.display = 'none';
    locationBoxElement.style.display = 'none';
  }
}
/*------------------------------------------------slide-show--------------------------------------------------------*/
let currentSlide = 0;
        const slides = document.querySelector('.slides');
        const slideWidth = document.querySelector('.slide').clientWidth;
        let transitionDuration = 1; // Thời gian mặc định của hiệu ứng chuyển đổi

        function nextSlide() {
            currentSlide++;
            if (currentSlide >= slides.children.length) {
                currentSlide = 0;
                transitionDuration = 1; // Thay đổi thời gian của hiệu ứng chuyển đổi khi quay lại slide đầu
            } else {
                transitionDuration = 0.3; // Sử dụng thời gian mặc định khi chuyển đổi giữa các slide khác
            }
            updateSlidePosition();
        }

        function previousSlide() {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slides.children.length - 1;
                transitionDuration = 1;
            } else {
            transitionDuration = 0.3; // Sử dụng thời gian mặc định khi chuyển đổi giữa các slide khác
            }
            updateSlidePosition();
        }

        function updateSlidePosition() {
            const translateX = -currentSlide * slideWidth;
            slides.style.transition = `transform ${transitionDuration}s ease-in-out`;
            slides.style.transform = `translateX(${translateX}px)`;
        }

        // Đặt thời gian tự động chuyển slide (ví dụ: 3 giây)
        setInterval(nextSlide, 5000);
/*---------------------------------------------------- Slide-show Three -------------------------------------------------------------------- */
// Khai báo biến để theo dõi slide hiện tại
var currentSlideThree = 0;

// Lấy danh sách các slide và nút previous và next
var slidesThree = document.querySelector('.slides-three');
var slideWidthThree = document.querySelector('.slide-three').clientWidth;
var transitionDurationThree = 1; // Thời gian mặc định của hiệu ứng chuyển đổi

// Hàm để chuyển đổi đến slide tiếp theo
function nextSlideThree() {
    currentSlideThree++;
    if (currentSlideThree >= slidesThree.children.length) {
        currentSlideThree = 0;
        transitionDurationThree = 1; // Thay đổi thời gian của hiệu ứng chuyển đổi khi quay lại slide đầu
    } else {
        transitionDurationThree = 0.3; // Sử dụng thời gian mặc định khi chuyển đổi giữa các slide khác
    }
    updateSlidePositionThree();
}

// Hàm để chuyển đổi đến slide trước đó
function previousSlideThree() {
    currentSlideThree--;
    if (currentSlideThree < 0) {
        currentSlideThree = slidesThree.children.length - 1;
        transitionDurationThree = 1;
    } else {
        transitionDurationThree = 0.3; // Sử dụng thời gian mặc định khi chuyển đổi giữa các slide khác
    }
    updateSlidePositionThree();
}

// Hàm để cập nhật vị trí slide
function updateSlidePositionThree() {
    const translateX = -currentSlideThree * slideWidthThree;
    slidesThree.style.transition = `transform ${transitionDurationThree}s ease-in-out`;
    slidesThree.style.transform = `translateX(${translateX}px)`;
}

// Gán sự kiện click cho các nút previous và next
var prevButtonThree = document.querySelector('.prev-three');
var nextButtonThree = document.querySelector('.next-three');
prevButtonThree.addEventListener('click', previousSlideThree);
nextButtonThree.addEventListener('click', nextSlideThree);

// Hiển thị slide đầu tiên khi trang được tải
updateSlidePositionThree();

// Tự động chuyển slide sau một khoảng thời gian (ví dụ: 3 giây)
var slideInterval = setInterval(nextSlideThree, 5000);

// Dừng tự động chuyển slide khi người dùng tương tác với nút previous hoặc next
prevButtonThree.addEventListener('click', function () {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlideThree, 3000);
});

nextButtonThree.addEventListener('click', function () {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlideThree, 3000);
});
/*---------------------------------------------------- Gợi ý hôm nay -----------------------------------------------------------------------*/
// Lắng nghe sự kiện click trên các thẻ <a>
document.querySelectorAll(".option-sg a").forEach(function(tab) {
    tab.addEventListener("click", function(e) {
      e.preventDefault(); // Ngăn chuyển hướng trang khi click
  
      // Ẩn tất cả các danh sách sản phẩm
      document.querySelectorAll(".product-lists ul").forEach(function(ul) {
        ul.style.display = "none";
      });
  
      // Lấy giá trị của thuộc tính data-list và hiển thị danh sách sản phẩm tương ứng
      var target = this.getAttribute("data-list");
      document.getElementById(target).style.display = "block";
  
      // Đổi màu nền của tất cả các thẻ <a>
      document.querySelectorAll(".option-sg a").forEach(function(a) {
        a.style.backgroundColor = "#fff"; // Đặt màu nền ban đầu
      });
  
      // Đổi màu nền của thẻ <a> hiện tại
      this.style.backgroundColor = "#feb70b"; // Màu nền tùy chỉnh
    });
  });
  
  // Ẩn tất cả các danh sách sản phẩm trừ list1 và đặt màu nền cho thẻ <a> đầu tiên
  document.querySelectorAll(".product-lists ul").forEach(function(ul, index) {
    if (index === 0) {
      ul.style.display = "block"; // Hiển thị list1
    } else {
      ul.style.display = "none"; // Ẩn các danh sách sản phẩm khác
    }
  });
  
  // Đặt màu nền cho thẻ <a> đầu tiên khi trang web được nạp
  document.querySelector(".option-sg a").style.backgroundColor = "#feb70b"; // Màu nền tùy chỉnh
  