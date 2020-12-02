(function (doc) {
  var data = JSON.parse(doc.getElementById('J-data').innerHTML),
      sortData = sortDatas(data.course_field, data.course_data),
      oFilterList = doc.getElementsByClassName('J-filter-list')[0],
      oFilterItem = doc.getElementsByClassName('J-filter-item'),
      oCourseList = doc.getElementsByClassName('J-course-card-list')[0],
      tpl = doc.getElementById('J-tpl').innerHTML;

      console.log(data);
      
  var init = function () {
    renderList(sortData('field', 'multi'), '7');
    bindEvent();
  }

  function bindEvent () {
    oFilterList.addEventListener('click', FilterListClick, false);
  }

  function FilterListClick (ev) {
    var e = ev || window.event,
        tar = e.target || e.srcElement,
        className = tar.className,
        field = tar.getAttribute('data-field'),
        len = oFilterItem.length,
        item;

    if(className === 'J-filter-item filter-item'){
      for(var i = 0; i < len; i++){
        item = oFilterItem[i];
        item.className = 'J-filter-item filter-item';
      }
      tar.className += ' current';
      renderList(sortData('field', 'multi'), field);
    }
  }

  function renderList (data, field) {
    var list = '';

    data[field].forEach(function(item){
      list += tpl.replace(/{{(.*?)}}/g,function (node, key) {
        return {
          link: item.link,
          img: item.img_url,
          course_name: item.course_name,
          agency: item.agency,
          isFree: item.is_vip === '0' ? 'free' : '',
          price: item.is_vip === '0' ? '免费' : '￥ ' + item.price + '.00'
        }[key]
      })
    });

    oCourseList.innerHTML = list;
  }


  function sortDatas (sort, data) {
    var cache = {};
    
    return function (foreign_key, sortType) {
      if(sortType !== 'single' && sortType !== "multi"){
        console.log(new Error('Invalid sort type.[Only "single" and "multi" are valid values]'));
        return;
      }

      sort.forEach(function (sort) {
        var _id = sort.id;
        cache[_id] = [];
        
        data.forEach(function (item) {
          var foreign_val = item[foreign_key];

          switch(sortType){
            case 'single':
              if(foreign_val === _id){
                cache[_id].push(item);
              }
              break;
            case 'multi':
              var _arr = foreign_val.split(',');

              _arr.forEach(function (val) {
                if(val === _id){
                  cache[_id].push(item);
                }
              });
              break;
            default:
              break;
          }
        });
      });
      return cache;
    }
  }

  init();
})(document);