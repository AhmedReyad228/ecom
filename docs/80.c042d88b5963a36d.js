"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[80],{5080:(m,d,i)=>{i.r(d),i.d(d,{WishlistComponent:()=>O});var l=i(6814),u=i(1120),p=i(9686),t=i(4769),c=i(9196),g=i(6286),r=i(2425);function a(n,h){if(1&n){const s=t.EpF();t.TgZ(0,"span",19),t.NdJ("click",function(){t.CHM(s);const o=t.oxw().$implicit,_=t.oxw(2);return t.KtG(_.removeProduct(o._id))}),t._UZ(1,"i",20),t.qZA()}}function v(n,h){if(1&n&&t._UZ(0,"i",21),2&n){const s=h.$implicit,e=t.oxw().$implicit;t.ekj("rating-color",e.ratingsAverage>=s)}}const f=function(n){return["/Ecommerce/details",n]},C=function(){return[1,2,3,4,5]};function E(n,h){if(1&n){const s=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.YNc(2,a,2,0,"span",7),t.TgZ(3,"div",8)(4,"div",9),t._UZ(5,"img",10),t.qZA(),t.TgZ(6,"h5",11),t._uU(7),t.qZA(),t.TgZ(8,"h4",12),t._uU(9),t.ALo(10,"termtext"),t.qZA(),t.TgZ(11,"div",13)(12,"span",14),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"div"),t.YNc(16,v,1,2,"i",15),t.TgZ(17,"span",16),t._uU(18),t.qZA()()()(),t.TgZ(19,"button",17,18),t.NdJ("click",function(){const _=t.CHM(s).$implicit,U=t.MAs(20),D=t.oxw(2);return t.KtG(D.addToCart(_._id,U))}),t._uU(21," +Add To Cart "),t.qZA()()()}if(2&n){const s=h.$implicit,e=t.oxw(2);t.xp6(2),t.Q6J("ngIf",e.wishListData.includes(s._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(15,f,s._id)),t.xp6(2),t.Q6J("src",s.imageCover,t.LSH)("alt",s.title),t.xp6(2),t.Oqu(s.category.name),t.xp6(2),t.hij(" ",t.xi3(10,9,s.title,2)," "),t.xp6(4),t.Oqu(t.xi3(14,12,s.price,"USD")),t.xp6(3),t.Q6J("ngForOf",t.DdM(17,C)),t.xp6(2),t.Oqu(s.ratingsAverage)}}function x(n,h){if(1&n&&(t.TgZ(0,"section",2)(1,"div",3),t.YNc(2,E,22,18,"div",4),t.qZA()()),2&n){const s=t.oxw();t.xp6(2),t.Q6J("ngForOf",s.products)}}function T(n,h){1&n&&(t.TgZ(0,"div",22),t._UZ(1,"img",23),t.qZA())}let O=(()=>{class n{constructor(s,e,o,_){this._WishlistService=s,this._Renderer2=e,this._CartService=o,this._ToastrService=_,this.products=[],this.wishListData=[]}ngOnInit(){this._WishlistService.getUserWishList().subscribe({next:s=>{if("success"===s.status){this.products=s.data;const e=s.data.map(o=>o._id);this.wishListData=e}},error:s=>{console.log(s)}})}addToCart(s,e){this._Renderer2.setAttribute(e,"disabled","true"),this._CartService.addProduct(s).subscribe({next:o=>{this._ToastrService.success(o.message),this._Renderer2.removeAttribute(e,"disabled"),this._CartService.cartNumber.next(o.numOfCartItems)},error:o=>{this._Renderer2.removeAttribute(e,"disabled")}})}removeProduct(s){this._WishlistService.removeProduct(s).subscribe({next:e=>{this._ToastrService.success(e.message),this.wishListData=e.data;const o=this.products.filter(_=>this.wishListData.includes(_._id));this.products=o,this._WishlistService.wishNum.next(o.length)},error:e=>{console.log(e)}})}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(c.M),t.Y36(t.Qsj),t.Y36(g.N),t.Y36(r._W))};static#s=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-wishlist"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","my-4",4,"ngIf","ngIfElse"],["msg",""],[1,"my-4"],[1,"row","g-4"],["class","col-md-2",4,"ngFor","ngForOf"],[1,"col-md-2"],[1,"product"],[3,"click",4,"ngIf"],[1,"cursor-pointer",3,"routerLink"],[1,"p-2"],[1,"w-100",3,"src","alt"],[1,"h6","mt-1","text-danger"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"font-sm"],["class","fas fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"btn-main","mx-auto","d-block","w-100",3,"click"],["btnAdded",""],[3,"click"],[1,"fa-solid","fa-heart","heart2"],[1,"fas","fa-star"],[1,"my-3"],["src","./assets/images/empty_wishlist.png","alt","Empty Cart",1,"mx-auto","d-block"]],template:function(e,o){if(1&e&&(t.YNc(0,x,3,1,"section",0),t.YNc(1,T,2,0,"ng-template",null,1,t.W1O)),2&e){const _=t.MAs(2);t.Q6J("ngIf",o.products.length>0)("ngIfElse",_)}},dependencies:[l.ez,l.sg,l.O5,l.H9,u.rH,p.Y]})}return n})()},6286:(m,d,i)=>{i.d(d,{N:()=>t});var l=i(5619),u=i(4769),p=i(9862);let t=(()=>{class c{constructor(r){this._HttpClient=r,this.cartNumber=new l.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/cart"}addProduct(r){return this._HttpClient.post(this.baseUrl,{productId:r})}getUserCart(){return this._HttpClient.get(this.baseUrl)}updateCart(r,a){return this._HttpClient.put(this.baseUrl+`/${r}`,{count:a})}removeProduct(r){return this._HttpClient.delete(this.baseUrl+`/${r}`)}clearUserCart(){return this._HttpClient.delete(this.baseUrl)}checkoutToPay(r,a){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${r}?url=http://localhost:4200`,{shippingAddress:a})}static#t=this.\u0275fac=function(a){return new(a||c)(u.LFG(p.eN))};static#s=this.\u0275prov=u.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},9196:(m,d,i)=>{i.d(d,{M:()=>t});var l=i(5619),u=i(4769),p=i(9862);let t=(()=>{class c{constructor(r){this._HttpClient=r,this.wishNum=new l.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/wishlist"}addToWishList(r){return this._HttpClient.post(this.baseUrl,{productId:r})}getUserWishList(){return this._HttpClient.get(this.baseUrl)}removeProduct(r){return this._HttpClient.delete(this.baseUrl+`/${r}`)}static#t=this.\u0275fac=function(a){return new(a||c)(u.LFG(p.eN))};static#s=this.\u0275prov=u.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()}}]);