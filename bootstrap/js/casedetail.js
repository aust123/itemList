!function(){function t(t){Service.post({url:"/InfoContentService.svc/GetInfoByID",params:{InfoID:t},success:function(o){$("#J_caseTitle").html(o.Title),$("#J_ProductScale").html(o.ProductScale),$("#J_ProductName").html(o.ProductName),$("#J_caseContent").html(o.Content),$("#J_caseContent img").removeAttr("title"),$("#J_caseContent a").attr("target","_blank"),o.SolutionID?(e(o.SolutionID),n(o.SolutionID,t)):($("#solution_container").hide(),$("#re_case").hide()),Global.config.share($("#share_sweibo"),o.ShareContent,o.ShareImgUrl,"sinaminiblog"),Global.config.share($("#share_wechat"),o.ShareContent,o.ShareImgUrl,"weixin")}})}function e(t){Service.post({url:"/InfoContentService.svc/GetInfoByID",params:{InfoID:t},success:function(t){$("#J_SolutionTitle").html(t.Title)}})}function n(t,e){Service.post({url:"/InfoContentService.svc/GetInfoBySolutionID",params:{SolutionID:t,InfoID:e},success:function(t){var e=$("#J_caseList"),n="";t&&t.Items.length>0?($.each(t.Items,function(t,e){var o=['<div class="col-xs-12 col-md-6 col-lg-4"><div class="bg-card case-item">','<a href="casedetail.html?ID={0}"><div class="pic"><img src="{1}" /></div>','<div class="info"><p class="tit">{2}</p>',"<ul>",'<li><span class="value">{5}</span>城市</li>','<li><span class="value">{4}</span>产品</li>',"</ul></div></a>","</div></div>"].join("");o=String.format(o,e.InfoID,e.Icon,e.Title,e.Summary,e.ProductName,e.ProductScale),n+=o}),e.empty(),e.html(n)):e.html('<div class="ac">暂无相关案例</div>')}})}$(function(){var e=decodeURI(Util.urlParam("ID"));t(e)})}();