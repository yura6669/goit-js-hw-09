import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{S as a}from"./assets/vendor-c9def49e.js";const p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],n=document.querySelector(".gallery"),s=p.map(c);function c(t){const i=t.preview,o=t.original,e=t.description;return`
    <li class="gallery-item">
        <a class="gallery-link" href="${o}">
            <img
                class="gallery-image"
                src="${i}"
                data-source="${o}"
                alt="${e}"
            />
        </a>
    </li>
    `}n.insertAdjacentHTML("beforeend",s.join(""));const r=`<svg class="close-btn" width="14" height="14">
<use href="icons.svg#icon-close-btn"></use>
</svg>`,l=`<svg class="next-btn" width="14" height="14">
<use href="icons.svg#icon-next-btn"></use>
</svg>`,h=`<svg class="prev-btn" width="14" height="14">
<use href="icons.svg#icon-prev-btn"></use>
</svg>`;new a(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",animationSpeed:250,animationSlide:!0,swipeClose:!0,showCounter:!0,swipeTolerance:50,className:"gallery-lightbox",widthRatio:.9,heightRatio:.9,closeText:r,navText:[h,l]});
//# sourceMappingURL=commonHelpers.js.map
