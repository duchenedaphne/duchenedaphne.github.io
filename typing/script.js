function deletePost(id){
    let elementId = "article-container-"+id;
    let element = document.getElementById(elementId);
    element.remove();
}

function lovePost(id){
    let heart = document.getElementById("heart-image-"+id);
    if(heart.src.indexOf("active") === -1){
        heart.src = "heart-active.png";
    }else{
        heart.src = "Chrome-Heart.png"
    }
}

function checkCharacterCount(textArea){
    let counter = document.getElementById("input-characters");
    let container = document.getElementById("form-container");
    if (textArea.value.length > 140){
        textArea.value = textArea.value.substr(0, 140);
        container.classList.add("is-error");
    }else{
        container.classList.remove("is-error");
    }
    counter.innerText = textArea.value.length;
}

function submitPost(){
    let textArea = document.getElementById("input-textarea");
    let counter = document.getElementById("input-characters");
    let contentToPost = textArea.value;

    if(contentToPost.length === 0){
        return false;
    }

    textArea.value = "";
    counter.innerText = 0;

    createPostHTML(contentToPost);
    return false;
}
function createPostHTML(postContent){
    alert(postContent);
}

let currentPostId = 1;
function createPostHTML(postContent){
    let now = new Date();
    let time = now.toLocaleTimeString();
    let date = now.toLocaleString();
    let name = "Anonyme User";
    let username = "anonyme";

    currentPostId = currentPostId +1;

    postContent = postContent.replace(/</g, "&lt;");
    postContent = postContent.replace(/\n/g, "<br />");
    postContent = postContent.replace(/(https?:\/\/[^\s]+)/g, "<a href=\"$1\" target=\"_blank\">$1</a>");

    let template = `<article id="article-container-${currentPostId}">
    <header>
    <button class="close" onclick="deletePost(${currentPostId})">
    <img src="cross.png" height="15" width="15"/>
    </button>
    <div class="avatar">
    <img src="compose_icon.png" height="40" width="40" />
    </div>
    <h1>${name}</h1>
    <h2>@${username}</h2>
    </header>
    <blockquote>
    ${postContent}
    </blockquote>
    <hr/>
    <footer>
    <p class="date-posted">Posted
    <time>${date}</time>
    </p>
    <button class="heart" onclick="lovePost(${currentPostId})">
    <img src="Chrome-Heart.png" id="heart-image-${currentPostId}" height="15" width="16" />
    </button>
    </footer>
    </article>`;
    document.getElementById("form-container").insertAdjacentHTML("afterend", template);
}