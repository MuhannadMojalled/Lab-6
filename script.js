const initLikes = 100;
const initDislikes = 20;

let likesCount = initLikes;
let dislikesCount = initDislikes;


// get the ui elements
const likesBtn = document.getElementById('like');
const dislikesBtn = document.getElementById('dislike');
const comment = document.getElementById('comment');
const submitBtn = document.getElementById('submit');
const clearBtn = document.getElementById('clear');
const commentsAreas = document.getElementById('commentsArea');

// set the initial values
likesBtn.innerHTML = "👍" + likesCount;
dislikesBtn.innerHTML = "👍" + dislikesCount;


// handel likes
likesBtn.addEventListener('click', () => {
    likesCount++;
    likesBtn.innerHTML = "👍" + likesCount;
    setCookies();
});

// handel likes
dislikesBtn.addEventListener('click', () => {
    dislikesCount++;
    dislikesBtn.innerHTML = "👍" + dislikesCount;
    setCookies();
});

// handel submit
submitBtn.addEventListener('click', () => {
    if (comment.value !== "") {
        const pelem = document.createElement('p');
        pelem.innerHTML = comment.value.trim();
        commentsAreas.appendChild(pelem);
        comment.value = "";
    }
});

// handel clear
clearBtn.addEventListener('click', () => {
    commentsAreas.innerHTML = "";
    document.cookie = document.cookie = "voted=; path=/; expires=" + new Date(Date.now() - 1).toUTCString() + "; SameSite=Strict;";
    likesBtn.disabled = false;
    dislikesBtn.disabled = false;
    submitBtn.disabled = false;

});

// set cookies
function setCookies() {
    const expiresOn = new Date(Date.now() + 60 * 1000);
    const cookieString = "voted=true; path=/; expires=" + expiresOn.toUTCString() + "; SameSite=Strict;"
    document.cookie = cookieString;
}

// check for cookies on load
window.onload = () => {
    if (document.cookie && document.cookie.includes("voted=true")) {
        likesBtn.disabled = true;
        dislikesBtn.disabled = true;
        submitBtn.disabled = true;
    }

}

