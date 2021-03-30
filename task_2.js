let rectangle = (x1, y1, x2, y2, color = 'green')=>{
    return {    
    'x1' : x1 < x2 ? x1 : x2,
    'y1' : y1 < y2 ? y1 : y2, 
    'x2' :  x1 >= x2 ? x1 : x2,
    'y2' : y1 > y2 ? y1 : y2,
    color : color
}}
let rect_1 = rectangle(50,10, 250,200)
function show(obj){
    let figure = document.createElement('div')
    figure.classList.add('figure')
    figure.style.width = width(obj)+'px'
    figure.style.height = height(obj)+'px'
    figure.style.left = obj.x1 +'px'
    figure.style.top = obj.y1 +'px'
    figure.style.backgroundColor = obj.color
    document.querySelector('.canvas').insertAdjacentElement('beforeend', figure)
    return 'Figure was added!'
}
function width(obj){
    return Math.abs(obj.x1 - obj.x2)
}
function height(obj){
    return Math.abs(obj.y1 - obj.y2)
}
function square(obj){
    return width(obj) * height(obj)
}
function perimetr(obj){
    return (width(obj) + height(obj)) * 2
}

function changeWidth(obj, diff){
    obj.x2 += diff
    return obj
}
function changeHeight(obj, diff){
    obj.y2 += diff
    return obj
}
function changeSize(obj, diff_w, diff_h){
    obj.x2 += diff_w
    obj.y2 += diff_h
    return obj
}
function changeX(obj,diff){
    obj.x1 += diff
    obj.x2 += diff
    return obj
}
function changeY(obj,diff){
    obj.y1 += diff
    obj.y2 += diff
    return obj
}
function changeXY(obj,diffX,diffY){
    obj.x1 += diffX
    obj.x2 += diffX
    obj.y1 += diffY
    obj.y2 += diffY
    return obj
}