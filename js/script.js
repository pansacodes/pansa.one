function callElement(pass) {
    return document.getElementById(pass);
}

function changeText() {
    callElement("readmore").style.display = `none`;
    callElement("subheading").innerHTML += " I enjoy creating things that live on the internet, be it websites, apps, or anything in between. I've managed to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work. I'm fueled by coffee & the lyrical magic of music";
}
function copyText() {
    navigator.clipboard.writeText("");

}