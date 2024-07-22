
//===============================================================
// debounce関数
//===============================================================
function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/*[1]クリック時に実行する関数*/
function clickListener(e) {
    /*クリックした要素のIDを表示*/
    alert(e.target.getAttribute("id") + "をクリックしました")
}
/*[2]IMG要素をすべてセレクト*/
document.querySelectorAll("img").forEach((imgElm) => {
    /*[3]要素のクリックイベントにイベントリスナーをひもづける*/
    imgElm.addEventListener('click', clickListener);
})