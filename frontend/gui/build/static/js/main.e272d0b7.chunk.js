(this.webpackJsonpgui=this.webpackJsonpgui||[]).push([[0],{168:function(e,t,a){e.exports=a(390)},390:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(63),s=a.n(c),r=a(43),o=a(3),u=a(91),i=a.n(u),d=a(159),m=a(160),E=a(161),h=a(64),f=a(167),p=a(166),v=a(162),b=a.n(v),L=a(392),y=a(37),g=void 0,w=Object(y.withScriptjs)(Object(y.withGoogleMap)((function(e){var t=e.covidLocations;e.userInfo;return g.state={selectedLoc:null,centre:[-33.873432,151.206396]},l.a.createElement("div",{style:{height:"100vh",width:"100%"}},l.a.createElement(y.GoogleMap,{zoom:5,center:{lat:g.state.centre[0],long:g.state.centre[1]},bootstrapURLKeys:{key:"put your API key here"}},t.map((function(e){return l.a.createElement(y.Marker,{key:e.id,position:{lat:e.Lat,lng:e.Lon},onClick:function(){g.setState({selectedLoc:e})}})})),";",g.state.selectedLoc&&l.a.createElement(y.InfoWindow,{onCloseClick:function(){g.state.selectedLoc=null},position:{lat:g.state.selectedLoc.Lat,lng:g.state.selectedLoc.Lon}},l.a.createElement("div",null,l.a.createElement("h3",null,g.state.selectedLoc.Venue),l.a.createElement("h4",null,"Alert: "+g.state.selectedLoc.Alert),l.a.createElement("h5",null,"Suburb:"+g.state.selectedLoc.Suburb),l.a.createElement("h5",null,g.state.selectedLoc.Date),l.a.createElement("h5",null,g.state.selectedLoc.Time)))))}))),k=function(e){Object(f.a)(t,e);Object(p.a)(t);function t(e){return Object(m.a)(this,t),(void 0).state={userInfo:e.userInfo,userLocations:e.userLocations,cases:[]},Object(h.a)(void 0)}return Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://data.nsw.gov.au/data/dataset/0a52e6c1-bc0b-48af-8b45-d791a6d8e289/resource/f3a28eed-8c2a-437b-8ac1-2dab3cf760f9/download/venue-data.json").then((function(e){t.setState({cases:e.data})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,{covidLocations:this.state.cases,userInfo:this.state.user}),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"col-sm-12 btn btn-info",style:{marginBottom:"20px"}},l.a.createElement("h3",null,"Recent Cases"))),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"d-flex flex-row flex-nowrap"},l.a.createElement(L.a,null,l.a.createElement(L.a.Body,null,this.state.cases[0].Venue)),l.a.createElement(L.a,null,l.a.createElement(L.a.Body,null,this.state.cases[1].Venue)),l.a.createElement(L.a,null,l.a.createElement(L.a.Body,null,this.state.cases[2].Venue)),l.a.createElement(L.a,null,l.a.createElement(L.a.Body,null,this.state.cases[3].Venue)),l.a.createElement(L.a,null,l.a.createElement(L.a.Body,null,this.state.cases[4].Venue)),l.a.createElement(L.a,null,l.a.createElement(L.a.Body,null,this.state.cases[5].Venue)),l.a.createElement(L.a,null,l.a.createElement(L.a.Body,null,this.state.cases[6].Venue)),l.a.createElement(L.a,null,l.a.createElement(L.a.Body,null,this.state.cases[7].Venue)))))}}]),t}(n.Component);var j=function(){return l.a.createElement(r.a,null,l.a.createElement("div",{className:"container"},l.a.createElement(o.a,{path:"/",exact:!0,component:k})))};s.a.render(l.a.createElement(r.a,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.e272d0b7.chunk.js.map