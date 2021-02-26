class Timeline {
    constructor(timeline) {
        this.timeline = timeline;

        let children = [].slice.call(timeline.children);
        this.items = children.map((child) => {
            return child
        })
        let lastItem;
        this.items.forEach((item, index) => {
            let topPos = "200px";
            let leftPos = 0;
            if (index % 2 === 0) {
                topPos = "0"
            }

            let offset = 300;
            if (window.innerWidth < 900) {
                offset = 0;
            }
            leftPos = offset + index * 250;


            item.style.top = topPos;
            item.style.left = leftPos + "px";
            lastItem = item;
        });
        timeline.style.height = (lastItem.offsetHeight * 2 + 50) + "px";
        timeline.style.width = (lastItem.offsetWidth * this.items.length) + "px";
    }
}

let onReady = () => {
    let timeLine = new Timeline(document.querySelector('#timeline1'));
};

document.addEventListener('DOMContentLoaded', onReady);
