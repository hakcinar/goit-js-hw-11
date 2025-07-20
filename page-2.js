import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as a,S as n}from"./assets/vendor-5ObWk2rO.js";const i=document.querySelector(".search__input"),c=document.querySelector("button"),m="https://pixabay.com/api/",y="51405518-123002757a861b136415ef994",g=document.querySelector(".gallery"),s=document.querySelector(".loader");s.style.display="none";c.addEventListener("click",()=>{const o=i.value.trim();o?p(o):alert("Please enter a search term.")});const p=o=>{s.style.display="block";const r=`${m}?key=${y}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safe_search=true`;fetch(r).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{if(e.hits.length===0){s.style.display="none",a.error({title:"No results found",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g.innerHTML=e.hits.map(t=>`
            <div class="gallery__item">
                <a href="${t.largeImageURL}" class="gallery__item">
                    <img src="${t.webformatURL}" alt="${t.tags}" class="gallery__image" />
                </a>
                <div class="gallery__info">
                    <p class="gallery__info_item"><b>Likes</b> ${t.likes}</p>
                    <p class="gallery__info_item"><b>Views</b> ${t.views}</p>
                    <p class="gallery__info_item"><b>Comments</b> ${t.comments}</p>
                    <p class="gallery__info_item"><b>Downloads</b> ${t.downloads}</p>
                </div>
            </div>
            `).join("");const l=new n(".gallery a",{captionsData:"alt",captionDelay:250,scrollZoom:!1});s.style.display="none",l.refresh()}).catch(e=>{a.error({title:"Error fetching images",message:e.message,position:"topRight"})})};
//# sourceMappingURL=page-2.js.map
