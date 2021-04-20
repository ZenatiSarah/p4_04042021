"use strict";(function(a,b){if(typeof exports==="object"){module.exports=b()}else{if(typeof define==="function"&&define.amd){define(["jquery","googlemaps!"],b)}else{a.GMaps=b()}}}(this,function(){
  /*!
   * GMaps.js v0.4.25
   * http://hpneo.github.com/gmaps/
   *
   * Copyright 2017, Gustavo Leon
   * Released under the MIT License.
   */
  ;var h=function(o,p){var n;if(o===p){return o}for(n in p){if(p[n]!==undefined){o[n]=p[n]}}return o};var d=function(p,o){var n;if(p===o){return p}for(n in o){if(p[n]!=undefined){p[n]=o[n]}}return p};var l=function(s,r){var o=Array.prototype.slice.call(arguments,2),q=[],n=s.length,p;if(Array.prototype.map&&s.map===Array.prototype.map){q=Array.prototype.map.call(s,function(u){var t=o.slice(0);t.splice(0,0,u);return r.apply(this,t)})}else{for(p=0;p<n;p++){callback_params=o;callback_params.splice(0,0,s[p]);q.push(r.apply(this,callback_params))}}return q};var f=function(p){var o=[],n;for(n=0;n<p.length;n++){o=o.concat(p[n])}return o};var m=function(o,p){var q=o[0],n=o[1];if(p){q=o[1];n=o[0]}return new google.maps.LatLng(q,n)};var i=function(o,p){var n;for(n=0;n<o.length;n++){if(!(o[n] instanceof google.maps.LatLng)){if(o[n].length>0&&typeof(o[n][0])==="object"){o[n]=i(o[n],p)}else{o[n]=m(o[n],p)}}}return o};var k=function(q,p){var o,n=q.replace(".","");if("jQuery" in this&&p){o=$("."+n,p)[0]}else{o=document.getElementsByClassName(n)[0]}return o};var a=function(p,o){var n,p=p.replace("#","");if("jQuery" in window&&o){n=$("#"+p,o)[0]}else{n=document.getElementById(p)}return n};var g=function(p){var s=0,o=0;if(p.getBoundingClientRect){var n=p.getBoundingClientRect();var r=-(window.scrollX?window.scrollX:window.pageXOffset);var q=-(window.scrollY?window.scrollY:window.pageYOffset);return[(n.left-r),(n.top-q)]}if(p.offsetParent){do{s+=p.offsetLeft;o+=p.offsetTop}while(p=p.offsetParent)}return[s,o]};var j=(function(o){var p=document;var n=function(w){if(!(typeof window.google==="object"&&window.google.maps)){if(typeof window.console==="object"&&window.console.error){console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js.")}return function(){}}if(!this){return new n(w)}w.zoom=w.zoom||15;w.mapType=w.mapType||"roadmap";var J=function(U,T){return U===undefined?T:U};var M=this,O,y=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],C=["mousemove","mouseout","mouseover"],E=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],u=w.el||w.div,A=w.markerClusterer,P=google.maps.MapTypeId[w.mapType.toUpperCase()],K=new google.maps.LatLng(w.lat,w.lng),S=J(w.zoomControl,true),r=w.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},N=r.style||"DEFAULT",s=r.position||"TOP_LEFT",F=J(w.panControl,true),z=J(w.mapTypeControl,true),D=J(w.scaleControl,true),B=J(w.streetViewControl,true),x=J(x,true),L={},H={zoom:this.zoom,center:K,mapTypeId:P},q={panControl:F,zoomControl:S,zoomControlOptions:{style:google.maps.ZoomControlStyle[N],position:google.maps.ControlPosition[s]},mapTypeControl:z,scaleControl:D,streetViewControl:B,overviewMapControl:x};if(typeof(w.el)==="string"||typeof(w.div)==="string"){if(u.indexOf("#")>-1){this.el=a(u,w.context)}else{this.el=k.apply(this,[u,w.context])}}else{this.el=u}if(typeof(this.el)==="undefined"||this.el===null){throw"No element defined."}window.context_menu=window.context_menu||{};window.context_menu[M.el.id]={};this.controls=[];this.overlays=[];this.layers=[];this.singleLayers={};this.markers=[];this.polylines=[];this.routes=[];this.polygons=[];this.infoWindow=null;this.overlay_el=null;this.zoom=w.zoom;this.registered_events={};this.el.style.width=w.width||this.el.scrollWidth||this.el.offsetWidth;this.el.style.height=w.height||this.el.scrollHeight||this.el.offsetHeight;google.maps.visualRefresh=w.enableNewStyle;for(O=0;O<E.length;O++){delete w[E[O]]}if(w.disableDefaultUI!=true){H=h(H,q)}L=h(H,w);for(O=0;O<y.length;O++){delete L[y[O]]}for(O=0;O<C.length;O++){delete L[C[O]]}this.map=new google.maps.Map(this.el,L);if(A){this.markerClusterer=A.apply(this,[this.map])}var G=function(X,ac){var ab="",ag=window.context_menu[M.el.id][X];for(var Y in ag){if(ag.hasOwnProperty(Y)){var aa=ag[Y];ab+='<li><a id="'+X+"_"+Y+'" href="#">'+aa.title+"</a></li>"}}if(!a("gmaps_context_menu")){return}var ad=a("gmaps_context_menu");ad.innerHTML=ab;var T=ad.getElementsByTagName("a"),af=T.length,Y;for(Y=0;Y<af;Y++){var V=T[Y];var W=function(ah){ah.preventDefault();ag[this.id.replace(X+"_","")].action.apply(M,[ac]);M.hideContextMenu()};google.maps.event.clearListeners(V,"click");google.maps.event.addDomListenerOnce(V,"click",W,false)}var Z=g.apply(this,[M.el]),U=Z[0]+ac.pixel.x-15,ae=Z[1]+ac.pixel.y-15;ad.style.left=U+"px";ad.style.top=ae+"px"};this.buildContextMenu=function(V,U){if(V==="marker"){U.pixel={};var T=new google.maps.OverlayView();T.setMap(M.map);T.draw=function(){var Y=T.getProjection(),X=U.marker.getPosition();U.pixel=Y.fromLatLngToContainerPixel(X);G(V,U)}}else{G(V,U)}var W=a("gmaps_context_menu");setTimeout(function(){W.style.display="block"},0)};this.setContextMenu=function(T){window.context_menu[M.el.id][T.control]={};var V,U=p.createElement("ul");for(V in T.options){if(T.options.hasOwnProperty(V)){var W=T.options[V];window.context_menu[M.el.id][T.control][W.name]={title:W.title,action:W.action}}}U.id="gmaps_context_menu";U.style.display="none";U.style.position="absolute";U.style.minWidth="100px";U.style.background="white";U.style.listStyle="none";U.style.padding="8px";U.style.boxShadow="2px 2px 6px #ccc";if(!a("gmaps_context_menu")){p.body.appendChild(U)}var X=a("gmaps_context_menu");google.maps.event.addDomListener(X,"mouseout",function(Y){if(!Y.relatedTarget||!this.contains(Y.relatedTarget)){window.setTimeout(function(){X.style.display="none"},400)}},false)};this.hideContextMenu=function(){var T=a("gmaps_context_menu");if(T){T.style.display="none"}};var I=function(U,T){google.maps.event.addListener(U,T,function(V){if(V==undefined){V=this}w[T].apply(this,[V]);M.hideContextMenu()})};google.maps.event.addListener(this.map,"zoom_changed",this.hideContextMenu);for(var Q=0;Q<y.length;Q++){var R=y[Q];if(R in w){I(this.map,R)}}for(var Q=0;Q<C.length;Q++){var R=C[Q];if(R in w){I(this.map,R)}}google.maps.event.addListener(this.map,"rightclick",function(T){if(w.rightclick){w.rightclick.apply(this,[T])}if(window.context_menu[M.el.id]["map"]!=undefined){M.buildContextMenu("map",T)}});this.refresh=function(){google.maps.event.trigger(this.map,"resize")};this.fitZoom=function(){var V=[],T=this.markers.length,U;for(U=0;U<T;U++){if(typeof(this.markers[U].visible)==="boolean"&&this.markers[U].visible){V.push(this.markers[U].getPosition())}}this.fitLatLngBounds(V)};this.fitLatLngBounds=function(W){var V=W.length,U=new google.maps.LatLngBounds(),T;for(T=0;T<V;T++){U.extend(W[T])}this.map.fitBounds(U)};this.setCenter=function(U,T,V){this.map.panTo(new google.maps.LatLng(U,T));if(V){V()}};this.getElement=function(){return this.el};this.zoomIn=function(T){T=T||1;this.zoom=this.map.getZoom()+T;this.map.setZoom(this.zoom)};this.zoomOut=function(T){T=T||1;this.zoom=this.map.getZoom()-T;this.map.setZoom(this.zoom)};var v=[],t;for(t in this.map){if(typeof(this.map[t])=="function"&&!this[t]){v.push(t)}}for(O=0;O<v.length;O++){(function(T,V,U){T[U]=function(){return V[U].apply(V,arguments)}})(this,this.map,v[O])}};return n})(this);j.prototype.createControl=function(n){var q=document.createElement("div");q.style.cursor="pointer";if(n.disableDefaultStyles!==true){q.style.fontFamily="Roboto, Arial, sans-serif";q.style.fontSize="11px";q.style.boxShadow="rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px"}for(var o in n.style){q.style[o]=n.style[o]}if(n.id){q.id=n.id}if(n.title){q.title=n.title}if(n.classes){q.className=n.classes}if(n.content){if(typeof n.content==="string"){q.innerHTML=n.content}else{if(n.content instanceof HTMLElement){q.appendChild(n.content)}}}if(n.position){q.position=google.maps.ControlPosition[n.position.toUpperCase()]}for(var p in n.events){(function(s,r){google.maps.event.addDomListener(s,r,function(){n.events[r].apply(this,[this])})})(q,p)}q.index=1;return q};j.prototype.addControl=function(n){var o=this.createControl(n);this.controls.push(o);this.map.controls[o.position].push(o);return o};j.prototype.removeControl=function(q){var n=null,p;for(p=0;p<this.controls.length;p++){if(this.controls[p]==q){n=this.controls[p].position;this.controls.splice(p,1)}}if(n){for(p=0;p<this.map.controls.length;p++){var o=this.map.controls[q.position];if(o.getAt(p)==q){o.removeAt(p);break}}}return q};j.prototype.createMarker=function(y){if(y.lat==undefined&&y.lng==undefined&&y.position==undefined){throw"No latitude or longitude defined."}var x=this,o=y.details,s=y.fences,u=y.outside,r={position:new google.maps.LatLng(y.lat,y.lng),map:null},p=h(r,y);delete p.lat;delete p.lng;delete p.fences;delete p.outside;var t=new google.maps.Marker(p);t.fences=s;if(y.infoWindow){t.infoWindow=new google.maps.InfoWindow(y.infoWindow);var n=["closeclick","content_changed","domready","position_changed","zindex_changed"];for(var v=0;v<n.length;v++){(function(A,z){if(y.infoWindow[z]){google.maps.event.addListener(A,z,function(B){y.infoWindow[z].apply(this,[B])})}})(t.infoWindow,n[v])}}var w=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"];var q=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"];for(var v=0;v<w.length;v++){(function(A,z){if(y[z]){google.maps.event.addListener(A,z,function(){y[z].apply(this,[this])})}})(t,w[v])}for(var v=0;v<q.length;v++){(function(B,A,z){if(y[z]){google.maps.event.addListener(A,z,function(C){if(!C.pixel){C.pixel=B.getProjection().fromLatLngToPoint(C.latLng)}y[z].apply(this,[C])})}})(this.map,t,q[v])}google.maps.event.addListener(t,"click",function(){this.details=o;if(y.click){y.click.apply(this,[this])}if(t.infoWindow){x.hideInfoWindows();t.infoWindow.open(x.map,t)}});google.maps.event.addListener(t,"rightclick",function(z){z.marker=this;if(y.rightclick){y.rightclick.apply(this,[z])}if(window.context_menu[x.el.id]["marker"]!=undefined){x.buildContextMenu("marker",z)}});if(t.fences){google.maps.event.addListener(t,"dragend",function(){x.checkMarkerGeofence(t,function(z,A){u(z,A)})})}return t};j.prototype.addMarker=function(o){var n;if(o.hasOwnProperty("gm_accessors_")){n=o}else{if((o.hasOwnProperty("lat")&&o.hasOwnProperty("lng"))||o.position){n=this.createMarker(o)}else{throw"No latitude or longitude defined."}}n.setMap(this.map);if(this.markerClusterer){this.markerClusterer.addMarker(n)}this.markers.push(n);j.fire("marker_added",n,this);return n};j.prototype.addMarkers=function(p){for(var o=0,n;n=p[o];o++){this.addMarker(n)}return this.markers};j.prototype.hideInfoWindows=function(){for(var o=0,n;n=this.markers[o];o++){if(n.infoWindow){n.infoWindow.close()}}};j.prototype.removeMarker=function(n){for(var o=0;o<this.markers.length;o++){if(this.markers[o]===n){this.markers[o].setMap(null);this.markers.splice(o,1);if(this.markerClusterer){this.markerClusterer.removeMarker(n)}j.fire("marker_removed",n,this);break}}return n};j.prototype.removeMarkers=function(r){var n=[];if(typeof r=="undefined"){for(var q=0;q<this.markers.length;q++){var o=this.markers[q];o.setMap(null);j.fire("marker_removed",o,this)}if(this.markerClusterer&&this.markerClusterer.clearMarkers){this.markerClusterer.clearMarkers()}this.markers=n}else{for(var q=0;q<r.length;q++){var p=this.markers.indexOf(r[q]);if(p>-1){var o=this.markers[p];o.setMap(null);if(this.markerClusterer){this.markerClusterer.removeMarker(o)}j.fire("marker_removed",o,this)}}for(var q=0;q<this.markers.length;q++){var o=this.markers[q];if(o.getMap()!=null){n.push(o)}}this.markers=n}};j.prototype.drawOverlay=function(o){var n=new google.maps.OverlayView(),p=true;n.setMap(this.map);if(o.auto_show!=null){p=o.auto_show}n.onAdd=function(){var t=document.createElement("div");t.style.borderStyle="none";t.style.borderWidth="0px";t.style.position="absolute";t.style.zIndex=100;t.innerHTML=o.content;n.el=t;if(!o.layer){o.layer="overlayLayer"}var s=this.getPanes(),q=s[o.layer],r=["contextmenu","DOMMouseScroll","dblclick","mousedown"];q.appendChild(t);for(var u=0;u<r.length;u++){(function(w,v){google.maps.event.addDomListener(w,v,function(x){if(navigator.userAgent.toLowerCase().indexOf("msie")!=-1&&document.all){x.cancelBubble=true;x.returnValue=false}else{x.stopPropagation()}})})(t,r[u])}if(o.click){s.overlayMouseTarget.appendChild(n.el);google.maps.event.addDomListener(n.el,"click",function(){o.click.apply(n,[n])})}google.maps.event.trigger(this,"ready")};n.draw=function(){var q=this.getProjection(),s=q.fromLatLngToDivPixel(new google.maps.LatLng(o.lat,o.lng));o.horizontalOffset=o.horizontalOffset||0;o.verticalOffset=o.verticalOffset||0;var t=n.el,u=t.children[0],r=u.clientHeight,v=u.clientWidth;switch(o.verticalAlign){case"top":t.style.top=(s.y-r+o.verticalOffset)+"px";break;default:case"middle":t.style.top=(s.y-(r/2)+o.verticalOffset)+"px";break;case"bottom":t.style.top=(s.y+o.verticalOffset)+"px";break}switch(o.horizontalAlign){case"left":t.style.left=(s.x-v+o.horizontalOffset)+"px";break;default:case"center":t.style.left=(s.x-(v/2)+o.horizontalOffset)+"px";break;case"right":t.style.left=(s.x+o.horizontalOffset)+"px";break}t.style.display=p?"block":"none";if(!p){o.show.apply(this,[t])}};n.onRemove=function(){var q=n.el;if(o.remove){o.remove.apply(this,[q])}else{n.el.parentNode.removeChild(n.el);n.el=null}};this.overlays.push(n);return n};j.prototype.removeOverlay=function(n){for(var o=0;o<this.overlays.length;o++){if(this.overlays[o]===n){this.overlays[o].setMap(null);this.overlays.splice(o,1);break}}};j.prototype.removeOverlays=function(){for(var n=0,o;o=this.overlays[n];n++){o.setMap(null)}this.overlays=[]};j.prototype.drawPolyline=function(v){var u=[],s=v.path;if(s.length){if(s[0][0]===undefined){u=s}else{for(var o=0,n;n=s[o];o++){u.push(new google.maps.LatLng(n[0],n[1]))}}}var p={map:this.map,path:u,strokeColor:v.strokeColor,strokeOpacity:v.strokeOpacity,strokeWeight:v.strokeWeight,geodesic:v.geodesic,clickable:true,editable:false,visible:true};if(v.hasOwnProperty("clickable")){p.clickable=v.clickable}if(v.hasOwnProperty("editable")){p.editable=v.editable}if(v.hasOwnProperty("icons")){p.icons=v.icons}if(v.hasOwnProperty("zIndex")){p.zIndex=v.zIndex}var r=new google.maps.Polyline(p);var t=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var q=0;q<t.length;q++){(function(x,w){if(v[w]){google.maps.event.addListener(x,w,function(y){v[w].apply(this,[y])})}})(r,t[q])}this.polylines.push(r);j.fire("polyline_added",r,this);return r};j.prototype.removePolyline=function(n){for(var o=0;o<this.polylines.length;o++){if(this.polylines[o]===n){this.polylines[o].setMap(null);this.polylines.splice(o,1);j.fire("polyline_removed",n,this);break}}};j.prototype.removePolylines=function(){for(var n=0,o;o=this.polylines[n];n++){o.setMap(null)}this.polylines=[]};j.prototype.drawCircle=function(n){n=h({map:this.map,center:new google.maps.LatLng(n.lat,n.lng)},n);delete n.lat;delete n.lng;var o=new google.maps.Circle(n),q=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var p=0;p<q.length;p++){(function(s,r){if(n[r]){google.maps.event.addListener(s,r,function(t){n[r].apply(this,[t])})}})(o,q[p])}this.polygons.push(o);return o};j.prototype.drawRectangle=function(n){n=h({map:this.map},n);var q=new google.maps.LatLngBounds(new google.maps.LatLng(n.bounds[0][0],n.bounds[0][1]),new google.maps.LatLng(n.bounds[1][0],n.bounds[1][1]));n.bounds=q;var o=new google.maps.Rectangle(n),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var p=0;p<r.length;p++){(function(t,s){if(n[s]){google.maps.event.addListener(t,s,function(u){n[s].apply(this,[u])})}})(o,r[p])}this.polygons.push(o);return o};j.prototype.drawPolygon=function(n){var q=false;if(n.hasOwnProperty("useGeoJSON")){q=n.useGeoJSON}delete n.useGeoJSON;n=h({map:this.map},n);if(q==false){n.paths=[n.paths.slice(0)]}if(n.paths.length>0){if(n.paths[0].length>0){n.paths=f(l(n.paths,i,q))}}var o=new google.maps.Polygon(n),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var p=0;p<r.length;p++){(function(t,s){if(n[s]){google.maps.event.addListener(t,s,function(u){n[s].apply(this,[u])})}})(o,r[p])}this.polygons.push(o);j.fire("polygon_added",o,this);return o};j.prototype.removePolygon=function(o){for(var n=0;n<this.polygons.length;n++){if(this.polygons[n]===o){this.polygons[n].setMap(null);this.polygons.splice(n,1);j.fire("polygon_removed",o,this);break}}};j.prototype.removePolygons=function(){for(var n=0,o;o=this.polygons[n];n++){o.setMap(null)}this.polygons=[]};j.prototype.getFromFusionTables=function(o){var q=o.events;delete o.events;var n=o,p=new google.maps.FusionTablesLayer(n);for(var r in q){(function(t,s){google.maps.event.addListener(t,s,function(u){q[s].apply(this,[u])})})(p,r)}this.layers.push(p);return p};j.prototype.loadFromFusionTables=function(n){var o=this.getFromFusionTables(n);o.setMap(this.map);return o};j.prototype.getFromKML=function(o){var n=o.url,q=o.events;delete o.url;delete o.events;var s=o,p=new google.maps.KmlLayer(n,s);for(var r in q){(function(u,t){google.maps.event.addListener(u,t,function(v){q[t].apply(this,[v])})})(p,r)}this.layers.push(p);return p};j.prototype.loadFromKML=function(n){var o=this.getFromKML(n);o.setMap(this.map);return o};j.prototype.addLayer=function(p,o){o=o||{};var q;switch(p){case"weather":this.singleLayers.weather=q=new google.maps.weather.WeatherLayer();break;case"clouds":this.singleLayers.clouds=q=new google.maps.weather.CloudLayer();break;case"traffic":this.singleLayers.traffic=q=new google.maps.TrafficLayer();break;case"transit":this.singleLayers.transit=q=new google.maps.TransitLayer();break;case"bicycling":this.singleLayers.bicycling=q=new google.maps.BicyclingLayer();break;case"panoramio":this.singleLayers.panoramio=q=new google.maps.panoramio.PanoramioLayer();q.setTag(o.filter);delete o.filter;if(o.click){google.maps.event.addListener(q,"click",function(s){o.click(s);delete o.click})}break;case"places":this.singleLayers.places=q=new google.maps.places.PlacesService(this.map);if(o.search||o.nearbySearch||o.radarSearch){var n={bounds:o.bounds||null,keyword:o.keyword||null,location:o.location||null,name:o.name||null,radius:o.radius||null,rankBy:o.rankBy||null,types:o.types||null};if(o.radarSearch){q.radarSearch(n,o.radarSearch)}if(o.search){q.search(n,o.search)}if(o.nearbySearch){q.nearbySearch(n,o.nearbySearch)}}if(o.textSearch){var r={bounds:o.bounds||null,location:o.location||null,query:o.query||null,radius:o.radius||null};q.textSearch(r,o.textSearch)}break}if(q!==undefined){if(typeof q.setOptions=="function"){q.setOptions(o)}if(typeof q.setMap=="function"){q.setMap(this.map)}return q}};j.prototype.removeLayer=function(o){if(typeof(o)=="string"&&this.singleLayers[o]!==undefined){this.singleLayers[o].setMap(null);delete this.singleLayers[o]}else{for(var n=0;n<this.layers.length;n++){if(this.layers[n]===o){this.layers[n].setMap(null);this.layers.splice(n,1);break}}}};var b,c;j.prototype.getRoutes=function(s){switch(s.travelMode){case"bicycling":b=google.maps.TravelMode.BICYCLING;break;case"transit":b=google.maps.TravelMode.TRANSIT;break;case"driving":b=google.maps.TravelMode.DRIVING;break;default:b=google.maps.TravelMode.WALKING;break}if(s.unitSystem==="imperial"){c=google.maps.UnitSystem.IMPERIAL}else{c=google.maps.UnitSystem.METRIC}var r={avoidHighways:false,avoidTolls:false,optimizeWaypoints:false,waypoints:[]},q=h(r,s);q.origin=/string/.test(typeof s.origin)?s.origin:new google.maps.LatLng(s.origin[0],s.origin[1]);q.destination=/string/.test(typeof s.destination)?s.destination:new google.maps.LatLng(s.destination[0],s.destination[1]);q.travelMode=b;q.unitSystem=c;delete q.callback;delete q.error;var p=this,o=[],n=new google.maps.DirectionsService();n.route(q,function(t,u){if(u===google.maps.DirectionsStatus.OK){for(var v in t.routes){if(t.routes.hasOwnProperty(v)){o.push(t.routes[v])}}if(s.callback){s.callback(o,t,u)}}else{if(s.error){s.error(t,u)}}})};j.prototype.removeRoutes=function(){this.routes.length=0};j.prototype.getElevations=function(o){o=h({locations:[],path:false,samples:256},o);if(o.locations.length>0){if(o.locations[0].length>0){o.locations=f(l([o.locations],i,false))}}var q=o.callback;delete o.callback;var n=new google.maps.ElevationService();if(!o.path){delete o.path;delete o.samples;n.getElevationForLocations(o,function(r,s){if(q&&typeof(q)==="function"){q(r,s)}})}else{var p={path:o.locations,samples:o.samples};n.getElevationAlongPath(p,function(r,s){if(q&&typeof(q)==="function"){q(r,s)}})}};j.prototype.cleanRoute=j.prototype.removePolylines;j.prototype.renderRoute=function(q,p){var o=this,n=((typeof p.panel==="string")?document.getElementById(p.panel.replace("#","")):p.panel),r;p.panel=n;p=h({map:this.map},p);r=new google.maps.DirectionsRenderer(p);this.getRoutes({origin:q.origin,destination:q.destination,travelMode:q.travelMode,waypoints:q.waypoints,unitSystem:q.unitSystem,error:q.error,avoidHighways:q.avoidHighways,avoidTolls:q.avoidTolls,optimizeWaypoints:q.optimizeWaypoints,callback:function(t,u,s){if(s===google.maps.DirectionsStatus.OK){r.setDirections(u)}}})};j.prototype.drawRoute=function(o){var n=this;this.getRoutes({origin:o.origin,destination:o.destination,travelMode:o.travelMode,waypoints:o.waypoints,unitSystem:o.unitSystem,error:o.error,avoidHighways:o.avoidHighways,avoidTolls:o.avoidTolls,optimizeWaypoints:o.optimizeWaypoints,callback:function(p){if(p.length>0){var q={path:p[p.length-1].overview_path,strokeColor:o.strokeColor,strokeOpacity:o.strokeOpacity,strokeWeight:o.strokeWeight};if(o.hasOwnProperty("icons")){q.icons=o.icons}n.drawPolyline(q);if(o.callback){o.callback(p[p.length-1])}}}})};j.prototype.travelRoute=function(o){if(o.origin&&o.destination){this.getRoutes({origin:o.origin,destination:o.destination,travelMode:o.travelMode,waypoints:o.waypoints,unitSystem:o.unitSystem,error:o.error,callback:function(v){if(v.length>0&&o.start){o.start(v[v.length-1])}if(v.length>0&&o.step){var s=v[v.length-1];if(s.legs.length>0){var r=s.legs[0].steps;for(var t=0,u;u=r[t];t++){u.step_number=t;o.step(u,(s.legs[0].steps.length-1))}}}if(v.length>0&&o.end){o.end(v[v.length-1])}}})}else{if(o.route){if(o.route.legs.length>0){var n=o.route.legs[0].steps;for(var p=0,q;q=n[p];p++){q.step_number=p;o.step(q)}}}}};j.prototype.drawSteppedRoute=function(q){var p=this;if(q.origin&&q.destination){this.getRoutes({origin:q.origin,destination:q.destination,travelMode:q.travelMode,waypoints:q.waypoints,error:q.error,callback:function(y){if(y.length>0&&q.start){q.start(y[y.length-1])}if(y.length>0&&q.step){var v=y[y.length-1];if(v.legs.length>0){var u=v.legs[0].steps;for(var w=0,x;x=u[w];w++){x.step_number=w;var t={path:x.path,strokeColor:q.strokeColor,strokeOpacity:q.strokeOpacity,strokeWeight:q.strokeWeight};if(q.hasOwnProperty("icons")){t.icons=q.icons}p.drawPolyline(t);q.step(x,(v.legs[0].steps.length-1))}}}if(y.length>0&&q.end){q.end(y[y.length-1])}}})}else{if(q.route){if(q.route.legs.length>0){var o=q.route.legs[0].steps;for(var r=0,s;s=o[r];r++){s.step_number=r;var n={path:s.path,strokeColor:q.strokeColor,strokeOpacity:q.strokeOpacity,strokeWeight:q.strokeWeight};if(q.hasOwnProperty("icons")){n.icons=q.icons}p.drawPolyline(n);q.step(s)}}}}};j.Route=function(o){this.origin=o.origin;this.destination=o.destination;this.waypoints=o.waypoints;this.map=o.map;this.route=o.route;this.step_count=0;this.steps=this.route.legs[0].steps;this.steps_length=this.steps.length;var n={path:new google.maps.MVCArray(),strokeColor:o.strokeColor,strokeOpacity:o.strokeOpacity,strokeWeight:o.strokeWeight};if(o.hasOwnProperty("icons")){n.icons=o.icons}this.polyline=this.map.drawPolyline(n).getPath()};j.Route.prototype.getRoute=function(o){var n=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:o.travelMode,waypoints:this.waypoints||[],error:o.error,callback:function(){n.route=e[0];if(o.callback){o.callback.call(n)}}})};j.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var o=this.route.legs[0].steps[this.step_count].path;for(var n in o){if(o.hasOwnProperty(n)){this.polyline.pop()}}}};j.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var o=this.route.legs[0].steps[this.step_count].path;for(var n in o){if(o.hasOwnProperty(n)){this.polyline.push(o[n])}}this.step_count++}};j.prototype.checkGeofence=function(o,n,p){return p.containsLatLng(new google.maps.LatLng(o,n))};j.prototype.checkMarkerGeofence=function(n,p){if(n.fences){for(var o=0,q;q=n.fences[o];o++){var r=n.getPosition();if(!this.checkGeofence(r.lat(),r.lng(),q)){p(n,q)}}}};j.prototype.toImage=function(o){var o=o||{},q={};q.size=o.size||[this.el.clientWidth,this.el.clientHeight];q.lat=this.getCenter().lat();q.lng=this.getCenter().lng();if(this.markers.length>0){q.markers=[];for(var p=0;p<this.markers.length;p++){q.markers.push({lat:this.markers[p].getPosition().lat(),lng:this.markers[p].getPosition().lng()})}}if(this.polylines.length>0){var n=this.polylines[0];q.polyline={};q.polyline["path"]=google.maps.geometry.encoding.encodePath(n.getPath());q.polyline["strokeColor"]=n.strokeColor;q.polyline["strokeOpacity"]=n.strokeOpacity;q.polyline["strokeWeight"]=n.strokeWeight}return j.staticMapURL(q)};j.staticMapURL=function(o){var u=[],M,q=(location.protocol==="file:"?"http:":location.protocol)+"//maps.googleapis.com/maps/api/staticmap";if(o.url){q=o.url;delete o.url}q+="?";var J=o.markers;delete o.markers;if(!J&&o.marker){J=[o.marker];delete o.marker}var x=o.styles;delete o.styles;var C=o.polyline;delete o.polyline;if(o.center){u.push("center="+o.center);delete o.center}else{if(o.address){u.push("center="+o.address);delete o.address}else{if(o.lat){u.push(["center=",o.lat,",",o.lng].join(""));delete o.lat;delete o.lng}else{if(o.visible){var n=encodeURI(o.visible.join("|"));u.push("visible="+n)}}}}var A=o.size;if(A){if(A.join){A=A.join("x")}delete o.size}else{A="630x300"}u.push("size="+A);if(!o.zoom&&o.zoom!==false){o.zoom=15}var K=o.hasOwnProperty("sensor")?!!o.sensor:true;delete o.sensor;u.push("sensor="+K);for(var v in o){if(o.hasOwnProperty(v)){u.push(v+"="+o[v])}}if(J){var w,y;for(var G=0;M=J[G];G++){w=[];if(M.size&&M.size!=="normal"){w.push("size:"+M.size);delete M.size}else{if(M.icon){w.push("icon:"+encodeURI(M.icon));delete M.icon}}if(M.color){w.push("color:"+M.color.replace("#","0x"));delete M.color}if(M.label){w.push("label:"+M.label[0].toUpperCase());delete M.label}y=(M.address?M.address:M.lat+","+M.lng);delete M.address;delete M.lat;delete M.lng;for(var v in M){if(M.hasOwnProperty(v)){w.push(v+":"+M[v])}}if(w.length||G===0){w.push(y);w=w.join("|");u.push("markers="+encodeURI(w))}else{w=u.pop()+encodeURI("|"+y);u.push(w)}}}if(x){for(var G=0;G<x.length;G++){var z=[];if(x[G].featureType){z.push("feature:"+x[G].featureType.toLowerCase())}if(x[G].elementType){z.push("element:"+x[G].elementType.toLowerCase())}for(var F=0;F<x[G].stylers.length;F++){for(var D in x[G].stylers[F]){var H=x[G].stylers[F][D];if(D=="hue"||D=="color"){H="0x"+H.substring(1)}z.push(D+":"+H)}}var t=z.join("|");if(t!=""){u.push("style="+t)}}}function I(p,N){if(p[0]==="#"){p=p.replace("#","0x");if(N){N=parseFloat(N);N=Math.min(1,Math.max(N,0));if(N===0){return"0x00000000"}N=(N*255).toString(16);if(N.length===1){N+=N}p=p.slice(0,8)+N}}return p}if(C){M=C;C=[];if(M.strokeWeight){C.push("weight:"+parseInt(M.strokeWeight,10))}if(M.strokeColor){var E=I(M.strokeColor,M.strokeOpacity);C.push("color:"+E)}if(M.fillColor){var L=I(M.fillColor,M.fillOpacity);C.push("fillcolor:"+L)}var B=M.path;if(B.join){for(var F=0,s;s=B[F];F++){C.push(s.join(","))}}else{C.push("enc:"+B)}C=C.join("|");u.push("path="+encodeURI(C))}var r=window.devicePixelRatio||1;u.push("scale="+r);u=u.join("&");return q+u};j.prototype.addMapType=function(n,o){if(o.hasOwnProperty("getTileUrl")&&typeof(o.getTileUrl)=="function"){o.tileSize=o.tileSize||new google.maps.Size(256,256);var p=new google.maps.ImageMapType(o);this.map.mapTypes.set(n,p)}else{throw"'getTileUrl' function required."}};j.prototype.addOverlayMapType=function(n){if(n.hasOwnProperty("getTile")&&typeof(n.getTile)=="function"){var o=n.index;delete n.index;this.map.overlayMapTypes.insertAt(o,n)}else{throw"'getTile' function required."}};j.prototype.removeOverlayMapType=function(n){this.map.overlayMapTypes.removeAt(n)};j.prototype.addStyle=function(o){var n=new google.maps.StyledMapType(o.styles,{name:o.styledMapName});this.map.mapTypes.set(o.mapTypeId,n)};j.prototype.setStyle=function(n){this.map.setMapTypeId(n)};j.prototype.createPanorama=function(n){if(!n.hasOwnProperty("lat")||!n.hasOwnProperty("lng")){n.lat=this.getCenter().lat();n.lng=this.getCenter().lng()}this.panorama=j.createPanorama(n);this.map.setStreetView(this.panorama);return this.panorama};j.createPanorama=function(o){var r=a(o.el,o.context);o.position=new google.maps.LatLng(o.lat,o.lng);delete o.el;delete o.context;delete o.lat;delete o.lng;var s=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],n=h({visible:true},o);for(var q=0;q<s.length;q++){delete n[s[q]]}var p=new google.maps.StreetViewPanorama(r,n);for(var q=0;q<s.length;q++){(function(u,t){if(o[t]){google.maps.event.addListener(u,t,function(){o[t].apply(this)})}})(p,s[q])}return p};j.prototype.on=function(o,n){return j.on(o,this,n)};j.prototype.off=function(n){j.off(n,this)};j.prototype.once=function(o,n){return j.once(o,this,n)};j.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"];j.on=function(q,n,p){if(j.custom_events.indexOf(q)==-1){if(n instanceof j){n=n.map}return google.maps.event.addListener(n,q,p)}else{var o={handler:p,eventName:q};n.registered_events[q]=n.registered_events[q]||[];n.registered_events[q].push(o);return o}};j.off=function(o,n){if(j.custom_events.indexOf(o)==-1){if(n instanceof j){n=n.map}google.maps.event.clearListeners(n,o)}else{n.registered_events[o]=[]}};j.once=function(p,n,o){if(j.custom_events.indexOf(p)==-1){if(n instanceof j){n=n.map}return google.maps.event.addListenerOnce(n,p,o)}};j.fire=function(r,n,q){if(j.custom_events.indexOf(r)==-1){google.maps.event.trigger(n,r,Array.prototype.slice.apply(arguments).slice(2))}else{if(r in q.registered_events){var p=q.registered_events[r];for(var o=0;o<p.length;o++){(function(u,t,s){u.apply(t,[s])})(p[o]["handler"],q,n)}}}};j.geolocate=function(n){var o=n.always||n.complete;if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(p){n.success(p);if(o){o()}},function(p){n.error(p);if(o){o()}},n.options)}else{n.not_supported();if(o){o()}}};j.geocode=function(n){this.geocoder=new google.maps.Geocoder();var o=n.callback;if(n.hasOwnProperty("lat")&&n.hasOwnProperty("lng")){n.latLng=new google.maps.LatLng(n.lat,n.lng)}delete n.lat;delete n.lng;delete n.callback;this.geocoder.geocode(n,function(q,p){o(q,p)})};if(typeof window.google==="object"&&window.google.maps){if(!google.maps.Polygon.prototype.getBounds){google.maps.Polygon.prototype.getBounds=function(q){var o=new google.maps.LatLngBounds();var t=this.getPaths();var s;for(var r=0;r<t.getLength();r++){s=t.getAt(r);for(var n=0;n<s.getLength();n++){o.extend(s.getAt(n))}}return o}}if(!google.maps.Polygon.prototype.containsLatLng){google.maps.Polygon.prototype.containsLatLng=function(s){var n=this.getBounds();if(n!==null&&!n.contains(s)){return false}var q=false;var o=this.getPaths().getLength();for(var r=0;r<o;r++){var y=this.getPaths().getAt(r);var v=y.getLength();var t=v-1;for(var u=0;u<v;u++){var x=y.getAt(u);var w=y.getAt(t);if(x.lng()<s.lng()&&w.lng()>=s.lng()||w.lng()<s.lng()&&x.lng()>=s.lng()){if(x.lat()+(s.lng()-x.lng())/(w.lng()-x.lng())*(w.lat()-x.lat())<s.lat()){q=!q}}t=u}}return q}}if(!google.maps.Circle.prototype.containsLatLng){google.maps.Circle.prototype.containsLatLng=function(n){if(google.maps.geometry){return google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(),n)<=this.getRadius()}else{return true}}}google.maps.Rectangle.prototype.containsLatLng=function(n){return this.getBounds().contains(n)};google.maps.LatLngBounds.prototype.containsLatLng=function(n){return this.contains(n)};google.maps.Marker.prototype.setFences=function(n){this.fences=n};google.maps.Marker.prototype.addFence=function(n){this.fences.push(n)};google.maps.Marker.prototype.getId=function(){return this["__gm_id"]}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(q){if(this==null){throw new TypeError()}var r=Object(this);var o=r.length>>>0;if(o===0){return -1}var s=0;if(arguments.length>1){s=Number(arguments[1]);if(s!=s){s=0}else{if(s!=0&&s!=Infinity&&s!=-Infinity){s=(s>0||-1)*Math.floor(Math.abs(s))}}}if(s>=o){return -1}var p=s>=0?s:Math.max(o-Math.abs(s),0);for(;p<o;p++){if(p in r&&r[p]===q){return p}}return -1}}return j}));ZZZ