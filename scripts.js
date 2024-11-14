let 模块=["入库复核","门店优先分拣","分公司优先分拣","特殊业务","成品装箱","成品装箱(新)","复核查询","发货复核","批量发货复核","商品优先分拣","物流","异常处理"]
var obj=document.querySelector(".con")
模块.forEach(index=>{
	let item=document.createElement("a")
	item.innerHTML=index
	item.className="mk"
	item.href="./rkfh.html"
	item.target="_blank"
	obj.appendChild(item)
	
})
   class MyButton extends HTMLElement {
     constructor() {
       super(); // 调用父类的构造函数
       const shadow = this.attachShadow({ mode: 'open' }); // 创建Shadow DOM
       const wrapper = document.createElement('div'); // 创建一个包装器元素
       wrapper.setAttribute('class', 'button-wrapper'); // 设置包装器元素的类名
       const button = document.createElement('button'); // 创建一个按钮元素
       button.textContent = 'Click Me!'; // 设置按钮的文本内容
       button.addEventListener('click', () => { // 为按钮添加点击事件监听器
         alert('Button clicked!');
       });
       shadow.appendChild(wrapper); // 将包装器元素添加到Shadow DOM中
       wrapper.appendChild(button); // 将按钮元素添加到包装器元素中
     }
   }
      window.customElements.define('my-button', MyButton);
   
