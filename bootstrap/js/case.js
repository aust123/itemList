!function(){function n(n){var e=12;Service.post({url:"/InfoContentService.svc/GetSuccessfulCase",params:{InfoCategoryID:EnumConfig.InfoCategoryIDEmun.内容列表,MenuID:EnumConfig.MenuIDEnum.成功案例,strParentID:EnumConfig.ParentIDEnum.智慧农业成功方案,PageNumber:n,PageSize:e},success:function(n){n&&(s=n.Total,t(n.Items))}})}function t(n){var t=$("#J_caseList"),e="";$.each(n,function(n,t){var a=['<div class="col-sm-6 col-lg-4"><div class="bg-card case-item"><a href="casedetail.html?ID={0}" target="_blank">','<div class="pic"><img src="{1}" /></div>','<div class="info">','<p class="tit">{2}</p>',"<ul>",'<li><span class="value">{5}</span>城市</li>','<li><span class="value">{4}</span>产品</li>',"</ul>","</div>","</a></div></div>"].join("");a=String.format(a,t.InfoID,t.Icon,t.Title,t.Summary=null==t.Summary?"":t.Summary,t.ProductName,t.ProductScale),e+=a}),t.append(e);var a=t.find(".col-sm-6").length;a==s&&$("#J_btnLoadMore").hide()}function e(){$("#J_btnLoadMore").on("click",function(){i+=1,n(i)})}function a(){Service.post({url:"/BigDataService.svc/GetBigDataList",params:{PageNumber:1,PageSize:1},success:function(n){n.Items.length>0&&($(".j_p_ProvinceCount").text(n.Items[0].ProvinceCount),$(".j_p_CityCount").text(n.Items[0].CityCount),$(".j_p_BaseCount").text(n.Items[0].BaseCount+"+"))}})}var i=1,s=0;$(function(){n(i),e(),a()})}();