(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},16:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=(n(16),n(5)),c=n(6),s=n(8),p=n(7),A=n(9),d=n(2),g=n.n(d),m=n(1),y=n.n(m);var u={Polaroid_container:"styles_Polaroid_container__1Sglt",Polaroid_card:"styles_Polaroid_card__3GcWb",Polaroid_container_front:"styles_Polaroid_container_front__1yvYB",Polaroid_side_flip_card:"styles_Polaroid_side_flip_card__2ru1_",Polaroid_side_flip:"styles_Polaroid_side_flip__1D5ym",Polaroid_default_flip:"styles_Polaroid_default_flip__39xyv",Polaroid_container_back:"styles_Polaroid_container_back__3bgBb",Polaroid_text:"styles_Polaroid_text__1dAKc",Polaroid_image:"styles_Polaroid_image__2xda_"};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/* add css styles here (optional) */\n.styles_Polaroid_container__1Sglt {\n  perspective: 600px;\n  position: relative;\n}\n\n.styles_Polaroid_card__3GcWb {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition: transform 1s;\n  transform-style: preserve-3d;\n  cursor: pointer;\n  border-radius: 1%;\n}\n.styles_Polaroid_container_front__1yvYB {\n  display: flex;\n  position: absolute;\n  backface-visibility: hidden;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.styles_Polaroid_side_flip_card__2ru1_ {\n  transform-origin: center right;\n}\n.styles_Polaroid_side_flip__1D5ym {\n  transform: translateX(-100%) rotateY(-180deg);\n}\n.styles_Polaroid_default_flip__39xyv {\n  transform: rotateY(180deg);\n}\n.styles_Polaroid_container_back__3bgBb {\n  display: flex;\n\n  position: absolute;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n.styles_Polaroid_container_front__1yvYB:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.styles_Polaroid_container_back__3bgBb:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.styles_Polaroid_text__1dAKc {\n  margin-bottom: 1rem;\n  margin-left: 1rem;\n  text-align: center;\n  margin-right: 1rem;\n}\n\n.styles_Polaroid_image__2xda_ {\n  margin: 1rem;\n  margin-top: 2rem;\n  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5),\n    0 2px 3px rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), 0 2px 3px rgba(0, 0, 0, 0.5);\n  -o-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), 0 2px 3px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), 0 2px 3px rgba(0, 0, 0, 0.5);\n}\n");var x=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},P=function(e){function t(e){x(this,t);var n=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={flip:n.props.flip},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d["Component"]),f(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.state;return!this.props.disabled&&(!0===e.flip&&!1===t.flip||!1===e.flip&&!0===t.flip)&&this.setState({flip:!t.flip})}},{key:"render",value:function(){var e=this.props,t=e.frontText,n=e.imgSrc,r=e.style,o=e.width,a=e.height,i=e.rotation,l=e.backText,c=e.cardColor,s="default"!==this.props.type||this.props.disabled?"translateX(-100%) rotateY(-180deg)":"rotateY(180deg)",p=this.props.disabled||"side"!==this.props.type?"center":"center right";return g.a.createElement("div",{className:u.Polaroid_container,onClick:this.props.onClick,style:j({},r,{width:o,height:a,transform:"rotate("+i+"deg)",maxHeight:a,maxWidth:o})},g.a.createElement("div",{className:u.Polaroid_card,style:j({},r,{transform:this.state.flip?s:"rotateY(0deg)",transformOrigin:p,backgroundColor:c})},g.a.createElement("div",{className:u.Polaroid_container_back,style:j({},r)},g.a.createElement("p",{className:u.Polaroid_back_delay,style:{transform:"rotateY(180deg)"}},l)),g.a.createElement("div",{className:u.Polaroid_container_front,style:j({},r)},g.a.createElement("img",{src:n,className:u.Polaroid_image}),g.a.createElement("p",{className:u.Polaroid_text},t))))}}]),t}();P.propTypes={frontText:y.a.string,imgSrc:y.a.string,height:y.a.number,width:y.a.number,rotation:y.a.number,flip:y.a.bool,backText:y.a.string,disabled:y.a.bool,type:y.a.oneOf(["side","default"]),cardColor:y.a.string},P.defaultProps={height:400,width:220,imgSrc:"data:image/jpeg;base64,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",frontText:"Polaroid kitty - front",rotation:0,backText:"Polaroid kitty - back",flip:!1,disabled:!1,type:"default",cardColor:"white"};var V=P,b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).flip=function(){n.setState({flip1:!n.state.flip1})},n.sideFlip=function(){n.setState({flip2:!n.state.flip2})},n.state={flip1:!1,flip2:!1},n}return Object(A.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 col-xl-6"},o.a.createElement("div",null,o.a.createElement("h1",null,"Polaroid Kittens!"),o.a.createElement("h3",null,"React flippable polaroid component",o.a.createElement("small",null," (kittens not included)")),o.a.createElement("h4",null,"Click on them to see flipping in action")),o.a.createElement("div",{className:"row",style:{marginTop:"5rem"}},o.a.createElement("div",{className:"col-sm-12 col-lg-3",style:{marginLeft:"5rem",marginBottom:"5rem"}},o.a.createElement(V,{frontText:"Polaroid kitty - front with default flip",rotation:0,flip:this.state.flip1,onClick:function(){return e.flip()},style:{marginRight:"2rem"}})),o.a.createElement("div",{className:"col-sm-12 col-lg-3",style:{marginLeft:"5rem",marginBottom:"5rem"}},o.a.createElement(V,{onClick:function(){return e.sideFlip()},frontText:"Polaroid kitty - front with side flip",rotation:0,flip:this.state.flip2,imgSrc:"http://placekitten.com/200/300",type:"side"}))))))}}]),t}(r.Component);i.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.099939f3.chunk.js.map