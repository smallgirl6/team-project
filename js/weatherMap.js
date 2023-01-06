function isDayTime() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 18) {
    return true;
  } else {
    return false;
  }
}



fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-DF2CB80E-CB70-453A-B35E-80356742388A",{
  method:"GET",
}).then(function(response){
  return response.json();
}).then(function(result){ 
  var timeRanges = [
    {
      "startTime": result["records"]["location"][0]["weatherElement"][0]["time"][0]["startTime"],
      "endTime": result["records"]["location"][0]["weatherElement"][0]["time"][0]["endTime"],
      },
    {
      "startTime": result["records"]["location"][0]["weatherElement"][0]["time"][1]["startTime"],
      "endTime": result["records"]["location"][0]["weatherElement"][0]["time"][1]["endTime"],
    },
    {
      "startTime": result["records"]["location"][0]["weatherElement"][0]["time"][2]["startTime"],
      "endTime": result["records"]["location"][0]["weatherElement"][0]["time"][2]["endTime"],
    }
  ];
  
  var currentTime = new Date();
  
  for (var i = 0; i < timeRanges.length; i++) {
    var startTime = new Date(timeRanges[i].startTime);
    var endTime = new Date(timeRanges[i].endTime);
    if (currentTime >= startTime && currentTime < endTime) {
      // console.log(startTime + endTime);
      // console.log(currentTime);
      var timenum = i
      break;
    }
  }
  // console.log(result["records"]["location"][0]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"])
  const place_data=[
    {    
    tag: "taipei_city",
    dataid: "F-D0047-061",
    place: result["records"]["location"][5].locationName,
    low: result["records"]["location"][5]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][5]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather: result["records"]["location"][5]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][5]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"]
    },
    
    {    
    tag: "new_taipei_city", 
    dataid: "F-D0047-069",
    place: result["records"]["location"][1].locationName,
    low: result["records"]["location"][1]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][1]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][1]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][1]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"] 
    },
    
    {
    tag: "taichung_city",
    dataid: "F-D0047-073",
    place: result["records"]["location"][11].locationName,
    low: result["records"]["location"][11]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][11]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][11]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][11]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"] 
    },
    {    
    tag: "tainan_city", 
    dataid: "F-D0047-077",
    place: result["records"]["location"][6].locationName,
    low: result["records"]["location"][6]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height:result["records"]["location"][6]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][6]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][6]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"]
    },
    
    {    
    tag: "kaohsiung_city",
    dataid: "F-D0047-065",
    place: result["records"]["location"][15].locationName,
    low: result["records"]["location"][15]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][15]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][15]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][15]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"]  
    },
    
    {    
    tag: "keelung_city", 
    dataid: "F-D0047-049",
    place: result["records"]["location"][18].locationName,
    low: result["records"]["location"][18]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][18]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][18]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][18]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"]
    },
    {    
    tag: "taoyuan_country", 
      dataid: "F-D0047-005",
    place: result["records"]["location"][13].locationName,
    low: result["records"]["location"][13]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][13]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][13]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][13]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"] 
    },
    {    
    tag: "hsinchu_city", 
    dataid: "F-D0047-053",
    place: result["records"]["location"][4].locationName,
    low: result["records"]["location"][4]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][4]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][4]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][4]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"]
    },
    
    {    
    tag: "hsinchu_country", 
    dataid: result["records"]["location"][3].locationName,
    place: "新竹縣",
    low: result["records"]["location"][3]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][3]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][3]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][3]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"] 
    },
    {    
    tag: "miaoli_country",
    dataid: "F-D0047-013",
    place: result["records"]["location"][8].locationName,
    low: result["records"]["location"][8]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][8]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][8]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][8]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"] 
    },
    {    
    tag: "changhua_country", 
    dataid: "F-D0047-017",
    place: result["records"]["location"][20].locationName,
    low: result["records"]["location"][20]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][20]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][20]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][20]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"] 
    },
    
    {    
    tag: "nantou_country", 
    dataid: "F-D0047-021",
    place: result["records"]["location"][14].locationName,
    low: result["records"]["location"][14]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][14]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][14]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][14]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"]
    },
    
    {    
    tag: "yunlin_country",
    dataid: "F-D0047-025",
    place: result["records"]["location"][9].locationName,
    low: result["records"]["location"][9]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][9]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][9]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][9]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"] 
    },
    {    
    tag: "chiayi_city",
    dataid: "F-D0047-029",
    place: result["records"]["location"][2].locationName,
    low: result["records"]["location"][2]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][2]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][2]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"], 
    weathernum: result["records"]["location"][2]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"]
    },
    {    
    tag: "chiayi_country", 
    dataid: "F-D0047-021",
    place: result["records"]["location"][0].locationName,
    low: result["records"]["location"][0]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][0]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][0]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][0]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"]
    },
    
    {    
    tag: "pingtung_country", 
    dataid: "F-D0047-033",
    place: result["records"]["location"][17].locationName,
    low: result["records"]["location"][17]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][17]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][17]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][17]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"]
    },
    {    
    tag: "yilan_country",
    dataid: "F-D0047-001",
    place: result["records"]["location"][7].locationName,
    low: result["records"]["location"][7]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][7]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][7]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][7]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"]
    },
    {    
    tag: "hualien_country", 
    dataid: "F-D0047-041", 
    place: result["records"]["location"][10].locationName,
    low: result["records"]["location"][10]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][10]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][10]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][10]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"] 
    },
    
    {    
    tag: "taitung_country", 
    dataid: "F-D0047-037",
    place: result["records"]["location"][12].locationName,
    low: result["records"]["location"][12]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][12]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][12]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][12]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"]
    },
    
    {    
    tag: "penghu_country",
    dataid: "F-D0047-045",
    place: result["records"]["location"][19].locationName,
    low: result["records"]["location"][19]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][19]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][19]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][19]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"] 
    },
    {    
    tag: "kinmen_country",
    dataid: "F-D0047-085",
    place: result["records"]["location"][16].locationName,
    low: result["records"]["location"][16]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][16]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][16]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: result["records"]["location"][16]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"] 
    },
    
    {    
    tag: "lienchiang_country",
    dataid: "F-D0047-081",
    place: result["records"]["location"][21].locationName,
    low: result["records"]["location"][21]["weatherElement"][2]["time"][timenum]["parameter"]["parameterName"],
    height: result["records"]["location"][21]["weatherElement"][4]["time"][timenum]["parameter"]["parameterName"],
    weather:result["records"]["location"][21]["weatherElement"][0]["time"][timenum]["parameter"]["parameterName"],
    weathernum: Number(result["records"]["location"][21]["weatherElement"][0]["time"][timenum]["parameter"]["parameterValue"])
    }
  ];
    
  for(let i=0; i< 23; i++){
  let stnunmber = document.querySelector(".st"+i);
  let dataName = stnunmber.getAttribute('data-name');
  $.each(place_data, function(index, value) {
    if (value.tag == dataName) {
        // console.log(value.tag + ":"+ value.weathernum); 
        if ((value.weathernum==1 || value.weathernum==24) && isDayTime()==true){
            stnunmber.style.fill="url(#sun1)";
        }
        else if ((value.weathernum==1 || value.weathernum==24) && isDayTime()==false){
          stnunmber.style.fill="url(#moon1)";
        }
        else if ((value.weathernum==2 || value.weathernum==25) && isDayTime()==true){
          stnunmber.style.fill="url(#sun2)";
        }
        else if ((value.weathernum==2 || value.weathernum==25) && isDayTime()==false){
          stnunmber.style.fill="url(#moon2)";
        }
        else if ((value.weathernum==3 || value.weathernum==26 || value.weathernum==27) && isDayTime()==true){
            stnunmber.style.fill="url(#sun3)";
        }
        else if ((value.weathernum==3 || value.weathernum==26 || value.weathernum==27) && isDayTime()==false){
          stnunmber.style.fill="url(#moon3)";
        }
        else if ((value.weathernum==4 || value.weathernum==28) && isDayTime()==true){
          stnunmber.style.fill="url(#cloudy&sun4)";
        }
        else if ((value.weathernum==4 || value.weathernum==28) && isDayTime()==false){
          stnunmber.style.fill="url(#cloudy&moon4)";
        }
        else if (4<value.weathernum<8){
            stnunmber.style.fill="url(#cloudy5)";
        }
        else if (7<value.weathernum<15){  
          stnunmber.style.fill="url(#rain8)";
        }
        else if (14<value.weathernum<19 || value.weathernum==41){
          stnunmber.style.fill="url(#storm&rain15)";
        }
        else if ((value.weathernum==19 || value.weathernum==21) && isDayTime()==true){
          stnunmber.style.fill="url(#sumtorain19)";
        }
        else if ((value.weathernum==19 || value.weathernum==21) && isDayTime()==false){
          stnunmber.style.fill="url(#moontorain19)";
        }
        else if ((value.weathernum==20 || value.weathernum==22) && isDayTime()==true){
          stnunmber.style.fill="url(#cloudtorain20)";
        }
        else if ((value.weathernum==20 || value.weathernum==22) && isDayTime()==false){
          stnunmber.style.fill="url(#moontorain20)";
        }
        else if (value.weathernum==23 || value.weathernum==37){  
          stnunmber.style.fill="url(#rain&snow23)";
        }
        else if ((value.weathernum==29 || value.weathernum==31) && isDayTime()==true){  
          stnunmber.style.fill="url(#sum&rain29)";
        }
        else if ((value.weathernum==29 || value.weathernum==31) && isDayTime()==false){ 
          stnunmber.style.fill="url(#noon&rain29)";
        }
        else if (value.weathernum==30 || value.weathernum==32 || value.weathernum==38 || value.weathernum==39){  
          stnunmber.style.fill="url(#cloud&rain30)";
        }
        else if ((value.weathernum==33 || value.weathernum==35) && isDayTime()==true){  
          stnunmber.style.fill="url(#sun&rain&storm33)";
        }
        else if ((value.weathernum==33 || value.weathernum==35) && isDayTime()==false){ 
          stnunmber.style.fill="url(#moon&rain&storm33)";
        }
        else if (value.weathernum==34 || value.weathernum==36){  
          stnunmber.style.fill="url(#cloud&rain&storm34)";
        }
        
        else if (value.weathernum==42){
          stnunmber.style.fill="url(#snow)";
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
});
 