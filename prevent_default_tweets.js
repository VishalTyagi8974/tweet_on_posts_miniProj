
const forms = document.querySelectorAll("form");
const comments = document.querySelectorAll(".comments")

for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", function (SO) {
        SO.preventDefault();
        const li = document.createElement("li");
        const userName = forms[i].elements.username.value;
        const tweet = forms[i].elements.tweet.value;
        li.innerHTML = `<b>${userName}</b>: ${tweet}`
        forms[i].elements.username.value = "";
        forms[i].elements.tweet.value = "";
        comments[i].append(li);
    })
}
