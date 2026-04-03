let currentPage = 0;
const imagesPerPage = 6;

// Image data
const images = [
    {
        thumb: "Stormlight-images/Axehound.jpg",
        high: "Stormlight-highres/Axehound.jpg",
        alt: "image of an Axehound"
    },
    {
        thumb: "Stormlight-images/Chasmfiend.jpeg",
        high: "Stormlight-highres/Chasmfiend.jpeg",
        alt: "image of a Chasmfiend"
    },
    {
        thumb: "Stormlight-images/Chull.jpg",
        high: "Stormlight-highres/Chull.jpg",
        alt: "image of a Chull"
    },
    {
        thumb: "Stormlight-images/Chull_Life_Cycle.jpeg",
        high: "Stormlight-highres/Chull_Life_Cycle.jpeg",
        alt: "image of a Chull's lifecycle"
    },
    {
        thumb: "Stormlight-images/Lait-flora.jpeg",
        high: "Stormlight-highres/Lait-flora.jpeg",
        alt: "image of flora in a lait of stone"
    },
    {
        thumb: "Stormlight-images/Plants.jpg",
        high: "Stormlight-highres/Plants.jpg",
        alt: "image of sketched plantlife"
    },
    {
        thumb: "Stormlight-images/Rockbuds.jpg",
        high: "Stormlight-highres/Rockbuds.jpg",
        alt: "image of Rockbuds"
    },
    {
        thumb: "Stormlight-images/Santhid.jpeg",
        high: "Stormlight-highres/Santhid.jpeg",
        alt: "image of a Santhid"
    },
    {
        thumb: "Stormlight-images/Shalebark.jpg",
        high: "Stormlight-highres/Shalebark.jpg",
        alt: "image of Shalebark"
    },
    {
        thumb: "Stormlight-images/Shardplate.jpeg",
        high: "Stormlight-highres/Shardplate.jpeg",
        alt: "image of Shardplate"
    },
    {
        thumb: "Stormlight-images/Skyeel.jpg",
        high: "Stormlight-highres/Skyeel.jpg",
        alt: "image of a Skyeel"
    },
    {
        thumb: "Stormlight-images/Whitespine.jpeg",
        high: "Stormlight-highres/Whitespine.jpeg",
        alt: "image of a Whitespine"
    }
];

const gallery = document.getElementById("gallery-grid");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close-modal");

// Render images
function renderGallery() {
    gallery.innerHTML = "";

    const start = currentPage * imagesPerPage;
    const end = start + imagesPerPage;

    const pageImages = images.slice(start, end);

    pageImages.forEach(image => {
        const img = document.createElement("img");

        img.src = image.thumb;
        img.alt = image.alt;
        img.setAttribute("tabindex", "0");
        img.loading = "lazy";

        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = image.high;
            modalImg.alt = image.alt;
        });
        // Enter Key support
        img.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                modal.style.display = "flex";
                modalImg.src = image.high;
                modalImg.alt = image.alt;
            }
        });

        gallery.appendChild(img);
    });

    updateButtons();
}
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        renderGallery();
    }
});

nextBtn.addEventListener("click", () => {
    if ((currentPage + 1) * imagesPerPage < images.length) {
        currentPage++;
        renderGallery();
    }
});

// Buttons
function updateButtons() {
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = (currentPage + 1) * imagesPerPage >= images.length;
}



// Close modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


renderGallery();