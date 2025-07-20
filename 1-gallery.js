import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as r,S as n}from"./assets/vendor-5ObWk2rO.js";const i=document.querySelector(".search__input"),c=document.querySelector("button"),m="https://pixabay.com/api/",y="51405518-123002757a861b136415ef994",p=document.querySelector(".gallery"),t=document.querySelector(".loader");t.style.display="none";c.addEventListener("click",()=>{const s=i.value.trim();s?g(s):alert("Please enter a search term.")});const g=s=>{t.style.display="block";const a=`${m}?key=${y}&q=${encodeURIComponent(s)}&image_type=photo`;fetch(a).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{if(e.hits.length===0){t.style.display="none",r.error({title:"No results found",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}console.log(e.hits),p.innerHTML=e.hits.map(o=>`
            <div class="gallery__item">
                <a href="${o.largeImageURL}" class="gallery__item">
                    <img src="${o.webformatURL}" alt="${o.tags}" class="gallery__image" />
                </a>
                <div class="gallery__info">
                    <p class="gallery__info_item"><b>Likes</b> ${o.likes}</p>
                    <p class="gallery__info_item"><b>Views</b> ${o.views}</p>
                    <p class="gallery__info_item"><b>Comments</b> ${o.comments}</p>
                    <p class="gallery__info_item"><b>Downloads</b> ${o.downloads}</p>
                </div>
            </div>
            `).join("");const l=new n(".gallery a",{captionsData:"alt",captionDelay:250,scrollZoom:!1});t.style.display="none",l.refresh()}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};
//# sourceMappingURL=1-gallery.js.map
