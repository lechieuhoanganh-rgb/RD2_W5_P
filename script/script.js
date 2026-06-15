// Dữ liệu mở rộng cho 4 tựa game khi nhấn phóng to
const gameDatabase = {
    stardew: {
        title: "Stardew Valley",
        desc: "Được phát triển hoàn toàn bởi duy nhất một người - ConcernedApe trong vòng 4 năm. Tựa game chứng minh đồ họa đỉnh cao không bằng lối chơi có chiều sâu cực lớn cùng cốt truyện nông trại ấm lòng người chơi.",
        img: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?w=800&auto=format&fit=crop"
    },
    celeste: {
        title: "Celeste",
        desc: "Một kiệt tác game đi ải (platformer) dùng phong cách đồ họa pixel để kể câu chuyện sâu sắc về chứng trầm cảm và nỗ lực vượt qua giới hạn bản thân. Cơ chế chuyển động chính xác hoàn hảo.",
        img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop"
    },
    terraria: {
        title: "Terraria",
        desc: "Thường được gọi vui là Minecraft 2D, Terraria đưa người chơi vào thế giới pixel ngẫu nhiên, nơi bạn có thể đào sâu, xây dựng, chế tạo và chiến đấu với hàng trăm con Boss hoành tráng.",
        img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop"
    },
    deadcells: {
        title: "Dead Cells",
        desc: "Sự kết hợp hoàn hảo giữa thể loại Roguelike và Metroidvania (Roguevania). Đồ họa pixel mang lại các pha hành động chặt chém cực kỳ mượt mà với tốc độ khung hình lý tưởng.",
        img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. HIỆU ỨNG CUỘN XUẤT HIỆN (SCROLL REVEAL) & THANH TRẠNG THÁI ---
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 50) {
                el.classList.add("visible");
                
                // Nếu là thẻ chứa thanh trạng thái, chạy hiệu ứng tăng thanh sống động
                const progressBar = el.querySelector(".progress");
                if (progressBar) {
                    const targetWidth = progressBar.getAttribute("data-width");
                    progressBar.style.width = targetWidth;
                }
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Chạy ngay lần đầu tiên tải trang

    // --- 2. XỬ LÝ SỰ KIỆN PHÓNG TO HÌNH ẢNH & CHI TIẾT (MODAL) ---
    const gameCards = document.querySelectorAll(".game-card");
    const modal = document.getElementById("gameModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalClose = document.querySelector(".modal-close");

    gameCards.forEach(card => {
        card.addEventListener("click", () => {
            const gameKey = card.getAttribute("data-game");
            const gameData = gameDatabase[gameKey];

            if (gameData) {
                modalImg.src = gameData.img;
                modalTitle.textContent = gameData.title;
                modalDesc.textContent = gameData.desc;
                
                modal.classList.add("show");
                document.body.style.overflow = "hidden"; // Khóa cuộn trang khi mở modal
            }
        });
    });

    // Đóng Modal
    const closeModal = () => {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
    };

    modalClose.addEventListener("click", closeModal);
    
    // Đóng khi click ra ngoài vùng nội dung modal
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});