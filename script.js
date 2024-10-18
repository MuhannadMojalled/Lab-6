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

    /* the aminations were done withe the help of chatgpt, though I modified it, played with it and understood it. */
    likesBtn.classList.add('bounce1');
    setTimeout(() => {
        likesBtn.classList.remove('bounce1');
    }, 100);

    alertUser("Like");

});

// handel likes
dislikesBtn.addEventListener('click', () => {
    dislikesCount++;
    dislikesBtn.innerHTML = "👍" + dislikesCount;
    setCookies();

    /* the aminations were done withe the help of chatgpt, though I modified it, played with it and understood it. */
    dislikesBtn.classList.add('bounce2');
    setTimeout(() => {
        dislikesBtn.classList.remove('bounce2');
    }, 100);

    alertUser("Dislike");
});

// handel submit
submitBtn.addEventListener('click', () => {
    if (comment.value !== "") {
        const pelem = document.createElement('p');
        pelem.innerHTML = comment.value.trim();
        commentsAreas.appendChild(pelem);
        comment.value = "";
        alertUser("Comment");
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

function alertUser(text) {
    setTimeout(() => {
        alert("Your " + text + " Has Been Registered Successfully");
    }, 100);
}

