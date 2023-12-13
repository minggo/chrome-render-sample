System.register("chunks:///_virtual/GuideInRect.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,i,n,o,a,s,c,l,u,d;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,s=e.Vec3,c=e.Camera,l=e.UITransform,u=e.Node,d=e.Component}],execute:function(){var p,f,g,m,h,b,y,T,v,w,N,z,I,P,R;o._RF.push({},"308b4eVuqNNYqenFMVDs7oL","GuideInRect",void 0);var D=a.ccclass,G=a.property,x=new s;e("GuideInRect",(p=D("GuideInRect"),f=G(c),g=G(l),m=G(l),h=G(u),b=G(u),y=G(u),p((w=r((v=function(e){function r(){for(var r,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return r=e.call.apply(e,[this].concat(o))||this,i(r,"camera",w,n(r)),i(r,"rectTransform",N,n(r)),i(r,"guideTransform",z,n(r)),i(r,"guideDirection",I,n(r)),i(r,"sourceNode",P,n(r)),i(r,"targetNode",R,n(r)),r}t(r,e);var o=r.prototype;return o.onLoad=function(){console.assert(this.guideTransform.node.parent==this.rectTransform.node)},o.lateUpdate=function(e){this.updateGuidePosition()},o.updateGuidePosition=function(){var e=this.camera.convertToUINode(this.targetNode.worldPosition,this.rectTransform.node,x),t=this.rectTransform.width*this.rectTransform.node.scale.x*.5,i=this.rectTransform.height*this.rectTransform.node.scale.y*.5,n=this.guideTransform.node.position=r.closestPointOnRectangleEdges(e.x,e.y,t,i,e);this.guideDirection.angle=Math.atan2(n.y,n.x)/Math.PI*180},r.closestPointOnRectangleEdges=function(e,r,t,i,n){var o,a,s,c;return e<=-t?o=-t:e>=t?o=t:(o=e,s=!0),r<=-i?a=-i:r>=i?a=i:(a=r,c=!0),s&&c&&(o=e,a=r),n.x=o,n.y=a,n},r}(d)).prototype,"camera",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=r(v.prototype,"rectTransform",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=r(v.prototype,"guideTransform",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=r(v.prototype,"guideDirection",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=r(v.prototype,"sourceNode",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=r(v.prototype,"targetNode",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=v))||T));o._RF.pop()}}}));

System.register("chunks:///_virtual/GuideInRectDemo.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,a,r,i,n,l,c,u,s,p,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,a=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,n=e._decorator,l=e.Vec2,c=e.Vec3,u=e.Camera,s=e.Node,p=e.game,d=e.Component}],execute:function(){var y,f,h,m,g,v,b,I,w;i._RF.push({},"2c6ebBIs7FOfaAIpRNIvVaA","GuideInRectDemo",void 0);var R=n.ccclass,D=n.property,z=new l,O=new l,P=new c;e("GuideInRectDemo",(y=R("GuideInRectDemo"),f=D(u),h=D(s),m=D(s),y((b=t((v=function(e){function t(){for(var t,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return t=e.call.apply(e,[this].concat(i))||this,a(t,"camera",b,r(t)),a(t,"dragOperation",I,r(t)),a(t,"localPlayer",w,r(t)),t}o(t,e);var i=t.prototype;return i.onLoad=function(){this.dragOperation.on(s.EventType.TOUCH_MOVE,this.touchMove,this)},i.touchStart=function(e){},i.touchMove=function(e){var t=e.getUIStartLocation(z),o=e.getUILocation(O),a=l.subtract(z,o,t);if(0!=a.length()){var r=this.camera.node.worldRotation,i=c.transformQuat(P,P.set(a.x,0,-a.y),r);i.y=0,i.normalize(),i.multiplyScalar(4*p.deltaTime),this.localPlayer.position=this.localPlayer.position.add(i)}},i.touchEnd=function(e){},t}(d)).prototype,"camera",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=t(v.prototype,"dragOperation",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=t(v.prototype,"localPlayer",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=v))||g));i._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./GuideInRect.ts","./GuideInRectDemo.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});