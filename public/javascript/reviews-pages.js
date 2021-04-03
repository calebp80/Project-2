function init () {
    title = document.location.href;
    titleArr = title.split('/')
    let titleEdit = titleArr[4].replaceAll("%20", " ");
    let words = titleEdit.split(" ");
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }
    words.join(" ")
    let finishedTitle = ""
    for(let i = 0; i < words.length; i++) {
        finishedTitle += words[i] + " "
    }
    let titleEl = document.querySelector('.review-title');
    titleEl.innerHTML = finishedTitle;
}

init();