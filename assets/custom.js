// 产品卡片 变体 product card variant
// let product_block = document.querySelectorAll(".product-block-options ")
// let product_option = document.querySelectorAll(".product-block-options .product-block-options__item ");
// for (let i = 0; i < product_option.length; i++) {
//     let li = product_option[i];
//     (function (j) {
//         product_option[j].onclick = function () {
//             let product_click = product_option[j].parentNode.parentNode.parentNode
//             console.log(product_click)
//             let product_options = product_click.querySelectorAll(".product-block-options__item");
//             for (let j = 0; j < product_options.length; j++) {
//                 product_option[j].classList.remove("active")
//             }
//             product_option[j].classList.add("active")
//         }
//     })(i)
// }

// 移动端 产品卡片
let new_adapt_inners = document.querySelectorAll('.new-adapt-product-block .inners');
let new_yuan_inner = document.querySelectorAll('.new-adapt-product-block .block-inner');
for (let i = 0; i < new_adapt_inners.length; i++) {
    if (/(iPhone|iPad|iPod|Android|Mobile)/i.test(navigator.userAgent) || window.screen.width < 768) {
        new_adapt_inners[i].parentNode.removeChild(new_adapt_inners[i])
        // var script = document.createElement("script");
        // script.src = "mobile.js";
        // document.head.appendChild(script);
    }
}

