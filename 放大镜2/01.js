let box = document.querySelector('.zoom-box-small');
let boximg = document.querySelector('.zoom-box-small>img');
let layer = document.querySelector('.layer');
let box2 = document.querySelector('.zoom-box-detail');
let img = document.querySelector('.zoom-box-detail>img');
console.log(img);

// 设置产品图的父亲元素的宽度
let boxWidth = boximg.offsetWidth;
let boxHeight = boximg.offsetHeight;

// 因为输出的是字符串的形式所以要转换成数值得形式
box.style.width = Number(boxWidth) + 1 + 'px';

// 给box添加鼠标事件
box.addEventListener('mouseover', function() {
    layer.style.display = 'block';
    box2.style.display = 'block';
});
box.addEventListener('mouseout', function() {
    layer.style.display = 'none';
    box2.style.display = 'none';
});

// 添加鼠标移动时遮罩层跟随的样式
box.addEventListener('mousemove', function(e) {

    // 获取遮罩层当前的位置
    let layerwidth = layer.offsetWidth;
    let layerHeight = layer.offsetHeight;

    let nowLeft = -((e.clientX - 50) / boxWidth * (img.offsetWidth - box2.offsetWidth));
    let nowTop = -((e.clientY - 50) / boxHeight * (img.offsetHeight - box2.offsetHeight));
    img.style.top = nowTop + 'px';
    img.style.left = nowLeft + 'px';

    layer.style.left = (e.clientX - 50) - 75 + 'px';
    layer.style.top = (e.clientY - 50) - 75 + 'px';

    // 根据鼠标移动的时候遮罩层也跟着移动
    // 当鼠标在最左侧的时
    if (parseInt(layer.style.left) <= 0) {
        layer.style.left = 0 + 'px';
    }
    // 当遮罩层在最上面的时候
    if (parseInt(layer.style.top) <= 0) {
        layer.style.top = 0 + 'px';
    }
    // 当遮罩层在最右边的时候
    if (parseInt(layer.style.left) >= (boxWidth - layerwidth)) {
        layer.style.left = boxWidth - layerwidth + 'px';
    }
    if (parseInt(layer.style.top) >= (boxHeight - layerHeight)) {
        layer.style.top = boxHeight - layerHeight + 'px';
    }
})