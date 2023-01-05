var place_data=[
  {    
   tag: "taipei_city",
   dataid: "F-D0047-061",
   place: "臺北市",
   low: 10,
   height: 30,
   weather:"cloudy&sun" 
  },
  
  {    
   tag: "new_taipei_city", 
   dataid: "F-D0047-069",
   place: "新北市",
   low: 20,
   height: 40,
   weather:"Rainy" 
  },
  
  {
   tag: "taichung_city",
   dataid: "F-D0047-073",
   place: "台中市",
   low: 30,
   height: 35,
   weather:"cloudy&rain"  
  },
  {    
   tag: "tainan_city", 
   dataid: "F-D0047-077",
   place: "臺南市",
   low: 30,
   height: 48,
   weather:"Storm"  
  },
  
  {    
   tag: "kaohsiung_city",
   dataid: "F-D0047-065",
   place: "高雄市",
   low: 25,
   height: 32,
   weather:"Rainy"  
  },
  
  {    
   tag: "keelung_city", 
   dataid: "F-D0047-049",
   place: "基隆市",
   low: 24,
   height: 35,
   weather:"Sunny" 
  },
  {    
   tag: "taoyuan_country", 
    dataid: "F-D0047-005",
   place: "桃園市",
   low: 22,
   height: 48,
   weather:"Storm" 
  },
  {    
   tag: "hsinchu_city", 
   dataid: "F-D0047-053",
   place: "新竹市",
   low: 15,
   height: 36,
   weather:"cloudy&sun" 
  },
  
  {    
   tag: "hsinchu_country", 
   dataid: "F-D0047-009",
   place: "新竹縣",
   low: 14,
   height: 29,
   weather:"cloudy&rain" 
  },
  {    
   tag: "miaoli_country",
   dataid: "F-D0047-013",
   place: "苗栗縣",
   low: 17,
   height: 49,
   weather:"Cloudly" 
  },
  {    
   tag: "changhua_country", 
   dataid: "F-D0047-017",
   place: "彰化縣",
   low: 25,
   height: 39,
   weather:"cloudy&rain" 
  },
  
  {    
   tag: "nantou_country", 
   dataid: "F-D0047-021",
   place: "南投縣",
   low: 33,
   height: 45,
   weather:"Rainy" 
  },
  
  {    
   tag: "yunlin_country",
   dataid: "F-D0047-025",
   place: "雲林縣",
   low: 45,
   height: 48,
   weather:"Storm" 
  },
  {    
   tag: "chiayi_city",
   dataid: "F-D0047-029",
   place: "嘉義市",
   low: 44,
   height: 50,
   weather:"Rainy" 
  },
  {    
   tag: "chiayi_country", 
   dataid: "F-D0047-021",
   place: "嘉義縣",
   low: 36,
   height: 39,
   weather:"Storm" 
  },
  
  {    
   tag: "pingtung_country", 
   dataid: "F-D0047-033",
   place: "屏東縣",
   low: 15,
   height: 45,
   weather:"Cloudly" 
  },
  {    
   tag: "yilan_country",
   dataid: "F-D0047-001",
   place: "宜蘭縣",
   low: 25,
   height: 35,
   weather:"storm&rain" 
  },
  {    
   tag: "hualien_country", 
   dataid: "F-D0047-041", 
   place: "花蓮縣",
   low: 34,
   height: 35,
   weather:"Sunny" 
  },
  
  {    
   tag: "taitung_country", 
   dataid: "F-D0047-037",
   place: "台東縣",
   low: 22,
   height: 39,
   weather:"storm&rain" 
  },
  
  {    
   tag: "penghu_country",
   dataid: "F-D0047-045",
   place: "澎湖縣",
   low: 33,
   height: 34,
   weather:"storm&rain" 
  },
  {    
   tag: "kinmen_country",
   dataid: "F-D0047-085",
   place: "金門縣",
   low: 37,
   height: 45,
   weather:"Rainy" 
  },
  
  {    
   tag: "lienchiang_country",
   dataid: "F-D0047-081",
   place: "連江縣",
   low: 33,
   height: 35,
   weather:"Rainy" 
  }
 ];
 

for(let i=0; i< 23; i++){
    let stnunmber = document.querySelector(".st"+i);
    let dataName = stnunmber.getAttribute('data-name');
    $.each(place_data, function(index, value) {
        if (value.tag == dataName) {
            // console.log(value.tag + ":"+ value.weather); 
            if (value.weather=="Rainy"){
                stnunmber.style.fill="url(#rain)";
            }
            else if (value.weather=="Sunny"){
                stnunmber.style.fill="url(#sun)";
            }
            else if (value.weather=="Cloudly"){
                stnunmber.style.fill="url(#cloudy)";
            }
            else if (value.weather=="Storm"){
                stnunmber.style.fill="url(#storm)";
            }
            else if (value.weather=="storm&rain"){
                stnunmber.style.fill="url(#storm&rain)";
            }
            else if (value.weather=="cloudy&sun"){
                stnunmber.style.fill="url(#cloudy&sun)";
            }
            else
                stnunmber.style.fill="url(#cloudy&sun)";
        return false;
        }       
  })
};


var vm = new Vue({
  el:"#app",
  data:{
    filter:"",
    place_data:place_data
  },computed:{
    now_area:function(){
      var vobj=this;
      var result= this.place_data.filter(function(obj){
        return obj.tag==vobj.filter;
      });
      if(result.length==0){
        return null;        
      }
      return result[0];
    }
  }
});
$("g").mouseenter(function(e){
  var tagname=$(this).attr("data-name");
    vm.filter=tagname;
  });
 