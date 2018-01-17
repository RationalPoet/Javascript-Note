### DOM扩展
1. selectorsAPI：querySelector()，返回与css选择符模式匹配的第一个元素，没有找到返回null，querySelectorAll()与querySelector()类似，但它返回的是一个NodeList的对象；
2. Element Tranversal : 弥补IE9之前的浏览器只返回元素节点不返回文本节点的问题，定义了一组属性：
    - childElementCount：返回子元素的个数（不包括文本节点和注释节点）；
    - firstElementChild：指向第一个元素，firstChild的元素版；
    - lastElementChild：指向最后一个元素，lastChild的元素版；
    - previousElementSibling：指向前一个同辈元素，previousSibling的元素版；
    - nextElementSibing：指向后一个同辈元素，nextSibling的元素版
3. HTML5
    - 与类相关的扩充：
        - getElementsByClassName()，IE9 + FireFox3+ Safari 3.1+ Chrome和Opera9.5+；
        - classList属性，为所有元素添加classList属性，因此可以对元素的classList执行一些操作：add(value)、contains(value)、remove(value)、toggle(value)，支持的浏览器FireFox3.6+和Chrome；
    - 焦点管理：activeElement()，获取页面当前获得焦点的元素，hasFocus()，用于确定当前节点是否获得了焦点，支持的浏览器：IE4+、FireFox 3+、Safari 4+、Opera 8+和Chrome；
4. HTMLDocument的变化
    - readState，表示当前文档加载状态：loading，正在 加载文档、complete，已经加载完文档（IE4+、FireFox 3.6+、Safari、Chrome和Opera 9+）；
    - 兼容模式：compatMode，标准模式下：```compatMode='CSS1Compat'```、在混杂模式下：```compatMode = 'BackCompat'```（FireFox、Safari 3.1+、Opera、Chrome、IE6 +）；
5. 插入文本：最佳实践使用innerHTML()和outerHTML()；
6. scrollIntoView()，将当前调用元素的外层容器展示到当前视口中；
7. IE的专有扩展：设置文档的meta标签，```<meta http-equiv="X-UA-Compatible" content="IE=Edge">```，可以使当前浏览器以最新文档模式加载当前文档（如果是类似：EmulateIEX的格式则表示如果有文档类型说明，则按IEX标准渲染页面，否则将文档模式设置为IE5）；
     
