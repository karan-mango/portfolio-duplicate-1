function scrollto(i){
    const c1=document.getElementById(i);
    if (isElementInViewport(c1)) {
        return;
    }
    c1.scrollIntoView({behavior:'smooth'});

    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

}



