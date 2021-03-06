/**
 * @author linlingyu
 */
///import baidu.dom;
///import baidu._util_.getWindowOrDocumentWidthOrHeight;
///import baidu._util_.getWidthOrHeight;
/**
 * @description 取得第一个匹配元素的宽度，该宽度包含border, padding的计算并通过参数来加入对margin的计算
 * @function 
 * @name baidu.dom().outerWidth()
 * @grammar baidu.dom(args).outerWidth([margin])
 * @param {Boolean} margin 参数传递一个布尔值为true时，该接口取得第一个匹配元素相的宽度值，该宽度值包含对margin, border, padding的计算
 * @return {Number} 返回一个整型的宽度值
 */
baidu.dom.extend({
    outerWidth: function(margin){
        if(this.size()<=0){return 0;}     
        var ele = this[0],
            type = ele != null && ele === ele.window ? 'window'
                : (ele.nodeType === 9 ? 'document' : false);
        return type ? baidu._util_.getWindowOrDocumentWidthOrHeight(ele, type, 'width')
            : baidu._util_.getWidthOrHeight(ele, 'width', 'padding|border' + (margin ? '|margin' : ''));
    }
});