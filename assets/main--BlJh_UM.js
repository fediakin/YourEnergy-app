import{a as ee,i as _}from"./vendor-D9ezOI0e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const c={exerciseModal:document.querySelector("#exercise-modal"),ratingModal:document.querySelector("#give-rating-modal"),ratingBlock:document.querySelector(".rating-modal-rating-block"),ratingDisplay:document.querySelector(".rating-modal-rating")},o={IS_OPEN:"is-open",EXERCISE_MODAL_CARD:".exercise-modal-card",RATING_MODAL_RATING_BLOCK:".rating-modal-rating-block",RATING_MODAL_RATING:".rating-modal-rating",RATING_MODAL_RATING_ICON:".rating-modal-rating-icon",CLOSE_MODAL_BTN:".close-modal-btn",ADD_TO_FAVORITES:"#add-to-favorites",GIVE_RATING:"#give-rating",REMOVE_FROM_FAVORITES:"#remove-from-favorites",RATING_MODAL_FORM:"rating-modal-form",OPEN_EXERCISE_MODAL:".card__start",EXERCISE_ITEM_FOR_DATA_ID:".exercise-item"},te="https://your-energy.b.goit.study/api",E=ee.create({baseURL:te});function se(e,t,s){const r=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return e?!t||!r.test(t)?(g.showErrorToast("Please enter a valid email address."),!1):s?!0:(g.showErrorToast("Please enter a comment."),!1):(g.showErrorToast("Please select a rating before submitting."),!1)}const g={showErrorToast:function(e){return _.error({title:"Error",message:e,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})},showSuccessToast:function(e){return _.success({title:"Success",message:e,position:"topRight",transitionIn:"fadeInDown",timeout:3e3,close:!0})}},y={fetchFilters:async({filter:e,page:t=1,limit:s=10})=>{try{const r=new URLSearchParams({filter:e||"",page:t,limit:s}),{data:a}=await E.get(`/filters?${r}`);return a}catch{return{results:[],totalPages:0,page:1}}},fetchExercises:async({page:e,limit:t=10,keyword:s,muscles:r,bodypart:a,equipment:n})=>{try{const i={page:e,limit:t,...s&&{keyword:s},...r&&{muscles:r},...a&&{bodypart:a},...n&&{equipment:n}},{data:l}=await E.get("/exercises",{params:i});return l}catch{return{results:[],totalPages:0,page:1}}},getExerciseById:async e=>{try{const{data:t}=await E.get(`/exercises/${e}`);return t}catch(t){throw g.showErrorToast(`Error: ${t.message}`),t}},updateRating:async(e,t)=>{const{data:s}=await E.patch(`/exercises/${e}/rating`,t);return s},quoteOfDay:async()=>{const{data:e}=await E.get("/quote");return e},getExercisesFilteredOrSearched:async(e={})=>{const{filters:t={},search:s,page:r,limit:a}=e,n={page:r,limit:a,...t,...s&&{keyword:s}},{data:i}=await E.get("/exercises",{params:n});return i},getFilters:async e=>y.fetchFilters(e)},d=""+new URL("sprite-DSg959dL.svg",import.meta.url).href;function re(e){return`<div class="rating-container">
    <form data-id=${e} class="rating-modal-form">
      <button aria-label="Close" class="close-modal-btn" type="button">
        <svg class="close-modal-icon">
          <use href="${d}#icon-close"></use>
        </svg>
      </button>
      <h2 class="rating-modal-title">Rating</h2>
      <div class="rating-modal-rating-block">
        <p class="rating-modal-rating">0.0</p>
        <input type="radio" id="star-1" name="rating" value="1"/>
        <label for="star-1">
          <svg class="rating-modal-rating-icon">
            <use href="${d}#icon-star"></use>
          </svg>
        </label>
        <input type="radio" id="star-2" name="rating" value="2" />
        <label for="star-2">
          <svg class="rating-modal-rating-icon">
            <use href="${d}#icon-star"></use>
          </svg>
        </label>
        <input type="radio" id="star-3" name="rating" value="3" />
        <label for="star-3">
          <svg class="rating-modal-rating-icon">
            <use href="${d}#icon-star"></use>
          </svg>
        </label>
        <input type="radio" id="star-4" name="rating" value="4" />
        <label for="star-4">
          <svg class="rating-modal-rating-icon">
            <use href="${d}#icon-star"></use>
          </svg>
        </label>
        <input type="radio" id="star-5" name="rating" value="5" />
        <label for="star-5">
          <svg class="rating-modal-rating-icon">
            <use href="${d}#icon-star"></use>
          </svg>
        </label>
      </div>
      <input
        type="email"
        name="email"
        class="rating-modal-email"
        placeholder="Email"
      />
      <textarea
        name="comment"
        class="rating-modal-comment"
        rows="4"
        placeholder="Your comment"
      ></textarea>
      <button aria-label="Submit rating" class="btn primary-btn" type="submit">
        Send
    </form>
  </div>`}const U="my-saved-exercises",I=()=>{try{const e=localStorage.getItem(U);return e?JSON.parse(e):[]}catch(e){return console.error("Error reading storage:",e),[]}},V=e=>{localStorage.setItem(U,JSON.stringify(e))},q=e=>I().includes(e),k=(e,t=null)=>{const s=I();return s.includes(e)?!1:(s.push(e),V(s),t&&localStorage.setItem(`saved_ex_${e}`,JSON.stringify({...t,favorite:!0})),!0)},H=e=>{const t=I(),s=t.filter(r=>r!==e);return s.length!==t.length?(V(s),localStorage.removeItem(`saved_ex_${e}`),!0):!1},ae=e=>{try{const t=localStorage.getItem(`saved_ex_${e}`);return t?JSON.parse(t):null}catch{return null}},ne=(e,t)=>{const s=document.createElement("li");s.className="favorites__item",s.innerHTML=`
      <div class="favorites__card card exercise-item" data-id="${e._id}">
        <div class="card__header">
          <div class="card__workout">
            <div class="card__label">WORKOUT</div>
            <button aria-label="Delete" type="button" class="card__delete">
              <svg width="16" height="16">
                <use href="${d}#icon-trash"></use>
              </svg>
            </button>
          </div>
          <button aria-label="Start" type="button" class="card__start">
            Start
            <i>
              <svg width="16" height="16">
                <use href="${d}#icon-arrow"></use>
              </svg>
            </i>
          </button>
        </div>
        <div class="card__body">
          <div class="card__exercise">
            <svg class="card__exercise-logo">
              <use href="${d}#running-stick-figure-border"></use>
            </svg>
            <p>${e.name}</p>
          </div>
          <ul class="card__list">
            <li class="card__list-item">
              <p>Burned calories:</p>
              <span>${e.burnedCalories} / ${e.time} min</span>
            </li>
            <li class="card__list-item">
              <p>Body part:</p>
              <span>${e.bodyPart}</span>
            </li>
            <li class="card__list-item">
              <p>Target:</p>
              <span>${e.target}</span>
            </li>
          </ul>
        </div>
      </div>
    `,t.appendChild(s),s.querySelector(".card__delete")?.addEventListener("click",()=>{H(e._id),N()})},N=()=>{const e=document.querySelector(".favorites__list"),t=document.querySelector(".favorites__empty");if(!e||!t)return;const s=t.closest(".favorites__body"),r=I();if(e.innerHTML="",r.length===0){t.classList.remove("is-hidden"),e.classList.add("is-hidden"),s?.classList.add("center");return}t.classList.add("is-hidden"),e.classList.remove("is-hidden"),s?.classList.remove("center"),r.forEach(a=>{const n=ae(a);n&&ne(n,e)})};function ie({_id:e,name:t,target:s,bodyPart:r,popularity:a,time:n,burnedCalories:i,rating:l,description:p,gifUrl:u,equipment:b}){const O=Array.from({length:5},(f,L)=>`<svg class="exercise-modal-rating-icon ${L<Math.floor(l)?"rated":""}">
              <use href="${d}#icon-star"></use>
            </svg>`).join(""),x=q(e);return`<div data-id=${e} class="exercise-modal-card">
            <button aria-label="Close modal" class="close-modal-btn">
              <svg class="close-modal-icon">
                <use href="${d}#icon-close"></use>
              </svg>
            </button>
            <div class="exercise-gif-wrapper">
              <img
                class="exercise-gif"
                src=${u}
                alt="alt text from backend here"
              />
            </div>
            <div class="exercise-modal-overview">
              <div>
                <h2 class="exercise-modal-title">${t}</h2>
                <div class="exercise-modal-rating-block">
                  <p class="exercise-modal-rating">${l}</p>
                  ${O}
                </div>
              </div>
              <div class="exercise-modal-info-block">
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Target</p>
                  <p class="exercise-modal-info-descr">${s}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Body Part</p>
                  <p class="exercise-modal-info-descr">${r}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Equipment</p>
                  <p class="exercise-modal-info-descr">${b}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Popular</p>
                  <p class="exercise-modal-info-descr">${a}</p>
                </div>
                <div class="exercise-modal-info">
                  <p class="exercise-modal-info-title">Burned Calories</p>
                  <p class="exercise-modal-info-descr">${i}/${n} min</p>
                </div>
              </div>
              <div class="exercise-modal-descr">${p}</div>
              <div class="exercise-modal-buttons-block">
              ${x?`<button aria-label="Remove favorite" id="remove-from-favorites" class="btn btn-primary">
                      Remove favorite
                      <svg class="exercise-modal-btn-icon">
                        <use href="${d}#trash"></use>
                      </svg>
                    </button>`:`<button aria-label"Add favorite" id="add-to-favorites" class="btn btn-primary">
                      Add to favorites
                      <svg class="exercise-modal-btn-icon">
                        <use href="${d}#icon-heart"></use>
                      </svg>
                    </button>`}
                <button aria-label"Rate" id="give-rating" class="btn btn-secondary">Give a rating</button>
              </div>
            </div>
          </div>
          `}async function Y(e){try{c.exerciseModal.classList.add(o.IS_OPEN);const t=await y.getExerciseById(e),s=ie(t);c.exerciseModal.innerHTML=s}catch(t){g.showErrorToast(t.message)}}function oe(e){const s=q(e)?`<button aria-label="Remove favorite" id="remove-from-favorites" class="btn btn-primary">
         Remove favorite
         <svg class="exercise-modal-btn-icon">
           <use href="${d}#trash"></use>
         </svg>
       </button>`:`<button aria-label="Add to favorites" id="add-to-favorites" class="btn btn-primary">
         Add to favorites
         <svg class="exercise-modal-btn-icon">
           <use href="${d}#icon-heart"></use>
         </svg>
       </button>`,r=document.querySelector(".exercise-modal-buttons-block");r&&(r.innerHTML=`
      ${s}
      <button id="give-rating" class="btn btn-secondary">Give a rating</button>
    `)}const ce=async(e,t)=>{try{const s=q(e);let r=!1;if(s)r=H(e),r&&g.showSuccessToast("Exercise removed from favorites!");else try{const a=await y.getExerciseById(e);r=k(e,a),r&&g.showSuccessToast("Exercise added to favorites!")}catch{r=k(e),r&&g.showSuccessToast("Exercise added to favorites!")}r&&(oe(e),window.location.pathname.includes("favorites.html")&&N(),t())}catch(s){g.showErrorToast(s.message)}},le=e=>{const t=e.target.closest(o.EXERCISE_MODAL_CARD).dataset.id;ce(t,()=>{window.location.pathname.includes("favorite.html")})},K=e=>{e.classList.remove(o.IS_OPEN)},de=e=>{const t=e.target.closest(o.EXERCISE_MODAL_CARD).dataset.id;c.exerciseModal.classList.remove(o.IS_OPEN),c.ratingModal.classList.add(o.IS_OPEN),c.ratingModal.innerHTML=re(t),c.ratingBlock=document.querySelector(o.RATING_MODAL_RATING_BLOCK),c.ratingDisplay=document.querySelector(o.RATING_MODAL_RATING),fe()},ue=e=>{if(e.target===c.exerciseModal||e.target.closest(o.CLOSE_MODAL_BTN)){K(c.exerciseModal);return}if(e.target.closest(o.ADD_TO_FAVORITES)||e.target.closest(o.REMOVE_FROM_FAVORITES)){le(e);return}e.target.closest(o.GIVE_RATING)&&de(e)},me=e=>{(e.target===c.ratingModal||e.target.closest(o.CLOSE_MODAL_BTN))&&(K(c.ratingModal),c.exerciseModal.classList.add(o.IS_OPEN))},ge=()=>{document.addEventListener("click",e=>{c.exerciseModal.classList.contains(o.IS_OPEN)&&ue(e),c.ratingModal.classList.contains(o.IS_OPEN)&&me(e)})},pe=(e,t)=>{e.forEach((s,r)=>{const a=r<t;s.style.fill=`rgba(var(--rgba-${a?"orange":"light"}), ${a?1:.2})`})},fe=()=>{c.ratingBlock.addEventListener("change",({target:e})=>{if(e.name!=="rating")return;const t=parseInt(e.value,10);c.ratingDisplay.textContent=t.toFixed(1);const s=c.ratingBlock.querySelectorAll(o.RATING_MODAL_RATING_ICON);pe(s,t)})};function ve(){document.addEventListener("click",e=>{if(e.target.closest(o.OPEN_EXERCISE_MODAL)){const t=e.target.closest(o.EXERCISE_ITEM_FOR_DATA_ID).dataset.id;Y(t)}})}const ye=async e=>{const t=new FormData(e),s=e.querySelector('input[name="rating"]:checked'),r=t.get("email"),a=t.get("comment");if(!se(s,r,a))return;const n={rate:Number(s.value),email:r,review:a};try{await y.updateRating(e.dataset.id,n),c.ratingModal.classList.remove(o.IS_OPEN),g.showSuccessToast("Rating submitted successfully!")}catch(i){const l=i.response?.data?.message||"An unknown error occurred";g.showErrorToast(l)}},he=()=>{document.addEventListener("submit",async e=>{e.preventDefault(),e.target.classList.contains(o.RATING_MODAL_FORM)&&await ye(e.target)})};async function Ee(e){try{return(await E.post("/subscription",{email:e})).data}catch(t){throw t.response&&t.response.status===409?new Error("This email is already subscribed."):new Error("Something went wrong. Try again.")}}const be=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;function Le(e){e.preventDefault();const t=e.currentTarget,r=t.querySelector('input[type="email"]').value.trim();if(!be.test(r)){_.error({title:"Error",message:"Please enter a valid email.",position:"topRight"});return}Ee(r).then(()=>{_.success({title:"Success",message:"Subscription successful!",position:"topRight"}),t.reset()}).catch(a=>{_.info({title:"Info",message:a.message,position:"topRight"})})}function Se(){const e=document.querySelector(".js-footer-form");e&&e.addEventListener("submit",Le)}const X="Muscles",_e="Body parts",xe="Equipment",we=X,Ie=[X,_e,xe];let S=we;const T=document.querySelector(".exercises-categories"),z=document.querySelector(".exercises-list"),R=document.querySelector(".exercises-pagination"),Oe=e=>{const t=Ie.map(s=>{const r=document.createElement("li");r.classList.add("exercises-category-item"),s===e&&r.classList.add("active-category");const a=document.createElement("a");return a.classList.add("exercises-category-link"),a.textContent=s,r.append(a),r});T.replaceChildren(...t)},M=async(e,t)=>{const s=await y.fetchFilters({filter:e,page:t,limit:12}),r=s.results.map(n=>{const i=document.createElement("div");i.classList.add("filter-item");const l=document.createElement("div");l.classList.add("filter-bg"),l.style.backgroundImage=`linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n.imgURL})`;const p=document.createElement("span");p.classList.add("filter-label"),p.textContent=n.name;const u=document.createElement("span");return u.classList.add("filter-category"),u.textContent=n.filter,i.append(p,u,l),i});z.replaceChildren(...r);const a=Array.from({length:s.totalPages},(n,i)=>i+1).map(n=>{const i=document.createElement("li");t===n&&i.classList.add("page-active");const l=document.createElement("a");return l.textContent=n,i.append(l),i});R.replaceChildren(...a)},Me=()=>{!T||!z||!R||(Oe(S),M(S,1),R.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName==="A"){const s=e.target.textContent;M(S,+s)}}),T.addEventListener("click",e=>{e.preventDefault(),document.querySelector(".filtered-exercises-cards-wrapper").classList.add("hide");const t=document.querySelector(".breadcrumb-current"),s=document.querySelector(".breadcrumb-divider"),r=e.target;r.nodeName==="A"&&(S=e.target.textContent,document.querySelector(".active-category").classList.remove("active-category"),r.parentElement.classList.add("active-category"),M(S,1),t.textContent="",s.style.display="none",document.querySelector(".exercises-content").classList.remove("hide"))}))};function B({quote:e,author:t}){const s=document.querySelector(".js-quote");s&&(s.innerHTML=`
    <p class="quote-text">"${e}"</p>
    <p class="quote-signature">- ${t}</p>
    `)}const P="daily-motivation-data",Ce=async()=>{const e=new Date().toDateString();try{const t=localStorage.getItem(P);if(t){const{date:r,data:a}=JSON.parse(t);if(r===e){B(a);return}}const s=await y.quoteOfDay();localStorage.setItem(P,JSON.stringify({date:e,data:s})),B(s)}catch{}};function Ae(){const e=document.querySelector(".menu-btn"),t=document.querySelector(".sidebar"),s=document.querySelector(".close-btn"),r=document.querySelector(".modal-overlay-brg");if(!e)return;const a=()=>{t.classList.add("active"),document.body.classList.add("no-scroll"),r.classList.add("is-open")},n=()=>{t.classList.remove("active"),document.body.classList.remove("no-scroll"),r.classList.remove("is-open")};e.addEventListener("click",a),s.addEventListener("click",n),r.addEventListener("click",n),t.querySelectorAll("a").forEach(i=>{i.addEventListener("click",()=>{n()})})}const h={runningStickFigure:{svgClass:"exercise-icon"},arrow:{svgClass:"start-exercise-icon",path:`${d}#arrow`,fill:"var(--primary)"},star:{svgClass:"rating-icon",path:`${d}#icon-star`,fill:"var(--gold)"}},J=e=>{const t=document.querySelector(".filtered-exercises-list");if(!t){console.error("List element not found");return}t.innerHTML="",e.forEach(s=>{const r=document.createElement("li");r.className="filtered-exercise-card",r.innerHTML=`
            <div class="exercise-header">
              <span class="badge">Workout</span>
              <p class="rating">${s.rating.toFixed(1)}</p>
            <span class="rating">
  <svg class="${h.star.svgClass}" fill="${h.star.fill}" width="16" height="16">
    <use href="${h.star.path}"></use>
  </svg>
</span>
  <button aria-label="start" class="start-btn">Start
              <span class='start-exercise-icon'>
              <svg class="${h.arrow.svgClass}" fill="${h.arrow.fill}" width="16" height="16">
              <use href="${h.arrow.path}"></use>
              </svg></span>
              </button>
            </div>
            <div class="exercise-content">
            
              <span >
             <svg class="${h.runningStickFigure.svgClass}" width="24" height="24">
              <use href="${d}#running-stick-figure-border"></use>
              </svg>
              </span>
              <h3 class="exercise-title">${s.name}</h3>
            </div>
            <div class="exercise-meta">
              <p >Burned calories: <span class="meta-span">${s.burnedCalories}/${s.time} min</span>
              </p>
              <p>Body part: <span class="meta-span">${s.bodyPart}</span></p>
              <p>Target: <span class="meta-span">${s.target}</span></p>
            </div>
          `,r.addEventListener("click",()=>Y(s._id)),t.appendChild(r)})},v={currentFilter:null,currentCategory:null},$=e=>{e&&e.classList.add("hide")},w=e=>{e&&e.classList.remove("hide")},Q=()=>{const e=document.querySelector(".breadcrumb-current"),t=document.querySelector(".breadcrumb-divider");v.currentFilter?(e.textContent=v.currentFilter,e.style.display="inline",t.style.display="inline"):(e.textContent="",e.style.display="none",t.style.display="none")},Te=(e,t=500)=>{let s;return(...r)=>{clearTimeout(s),s=setTimeout(()=>e(...r),t)}},G=Te(async(e,t=1,s=10)=>{const r=e.trim();if(!r)return;const a=v.currentCategory||"",n=v.currentFilter||"";if(!n&&!r&&!a)return;const i={...a==="Muscles"&&{muscles:n},...a==="Body parts"&&{bodypart:n},...a==="Equipment"&&{equipment:n}},l=i.muscles||i.bodypart||i.equipment,p={filters:{muscles:a==="Muscles"?n:"",bodypart:a==="Body parts"?n:"",equipment:a==="Equipment"?n:""},search:l?r:"",page:t,limit:s},u=await y.getExercisesFilteredOrSearched(p);J(u.results),j(u.totalPages,u.page,"Keyword",r)},500),Z=(e,t,s,r)=>{const a={filters:{muscles:e==="Muscles"?t:"",bodypart:e==="Body parts"?t:"",equipment:e==="Equipment"?t:""},page:s,limit:r};return async()=>{try{const n=await y.getExercisesFilteredOrSearched(a);if(!n||!n.results||n.results.length===0){const l=document.querySelector(".filtered-exercises-cards-wrapper");l&&(l.innerHTML='<div class="no-exercises-message"><p>No exercises found for the selected filters.</p></div>',w(l));return}$(document.querySelector(".exercises-content")),w(document.querySelector(".filtered-exercises-cards-wrapper")),w(document.querySelector(".form-search")),v.currentFilter=t,v.currentCategory=e;const i=n.results;J(i),j(n.totalPages,n.page,e,t)}catch{}}};async function j(e,t,s,r){const a=document.querySelector(".filtered-pagination");if(!a)return;if(a.innerHTML="",e<=1){a.style.display="none";return}a.style.display="flex";const n=(m,O=null,x=!1)=>{const f=document.createElement("button");return f.className=`page-item ${m===t?"active":""}`,f.textContent=O||m,f.disabled=x,f.style.cursor=x?"not-allowed":"pointer",f.setAttribute("data-page",m),f.setAttribute("data-category",s),f.setAttribute("data-filter-name",r),f.addEventListener("click",async L=>{const D=Number(L.target.getAttribute("data-page")),F=L.target.getAttribute("data-category"),W=L.target.getAttribute("data-filter-name");await Z(F,W,D,10)()}),f},i=()=>{const m=document.createElement("span");return m.textContent="...",m.className="pagination-ellipsis",m};a.appendChild(n(1,"<<",t===1)),a.appendChild(n(t-1,"<",t===1));const p=Math.floor(3/2),u=Math.max(1,t-p),b=Math.min(e,t+p);u>1&&(a.appendChild(n(1)),u>2&&a.appendChild(i()));for(let m=u;m<=b;m++)a.appendChild(n(m));b<e&&(b<e-1&&a.appendChild(i()),a.appendChild(n(e))),a.appendChild(n(t+1,">",t===e)),a.appendChild(n(e,">>",t===e))}document.querySelector(".exercises-list")?.addEventListener("click",async e=>{const t=e.target.closest(".filter-item");if(!t)return;const s=t.querySelector(".filter-label")?.textContent,r=document.querySelector(".exercises-category-item.active-category")?.textContent,a=1;s&&r&&(v.currentFilter=s,await Z(r,s,a)(),Q())});document.querySelector(".breadcrumb-home")?.addEventListener("click",async()=>{$(document.querySelector(".filtered-exercises-cards-wrapper")),$(document.querySelector(".form-search")),w(document.querySelector(".exercises-content")),v.currentFilter=null,Q()});const C=document.querySelector(".search-input"),A=document.getElementById("search-form");C&&A&&(C.addEventListener("input",e=>{const t=e.target.value.trim();G(t)}),A.addEventListener("submit",e=>{e.preventDefault();const t=C.value.trim();t&&(G(t),A.reset())}));const Re=()=>{const e=document.querySelectorAll(".menu-item");let t=Number(sessionStorage.getItem("activeNavItemIndex"));isNaN(t)&&(t=0),e[t]&&e[t].classList.add("active"),e.forEach((s,r)=>{s.querySelector(".menu-item-link")?.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),s.classList.add("active"),sessionStorage.setItem("activeNavItemIndex",r)})})};function $e(){const e=document.getElementById("scroll-up-btn");if(!e){console.error("Scroll button not found in HTML");return}window.addEventListener("scroll",()=>{window.scrollY>300?e.classList.remove("is-hidden"):e.classList.add("is-hidden")}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}document.addEventListener("DOMContentLoaded",()=>{ge(),ve(),he(),Se(),Ce(),Me(),Ae(),Re(),$e()});document.addEventListener("keydown",e=>{e.key==="Escape"&&(c.exerciseModal.classList.contains(o.IS_OPEN)&&c.exerciseModal.classList.remove(o.IS_OPEN),c.ratingModal.classList.contains(o.IS_OPEN)&&(c.ratingModal.classList.remove(o.IS_OPEN),c.exerciseModal.classList.add(o.IS_OPEN)))});document.addEventListener("DOMContentLoaded",function(){window.location.pathname.includes("favorites.html")&&N()});
//# sourceMappingURL=main--BlJh_UM.js.map
