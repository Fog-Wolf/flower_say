from django.shortcuts import render
from django.views.generic.base import View
from django.db.models import Q
from django.http import HttpResponse
from .models import Commodity, StoreGoods, Score, Category
from apps.operation.models import CourseComments


# Create your views here.
class GoodsView(View):
    def get(self, request):
        all_goods = Commodity.objects.filter(status=True).order_by("category_id")
        return render(request, "all_shopping.html", {
            "all_goods": all_goods
        })


class GoodsInfoView(View):
    def get(self, request, goods_id):
        # 获取商品信息
        goods_info = Commodity.objects.get(id=int(goods_id))
        # 获取关联网点
        goods_store = StoreGoods.objects.filter(goods_id=int(goods_id))
        # 获取评分
        goods_core = Score.objects.get(commodity=int(goods_id))
        # 获取相同类别的商品
        same_category = Commodity.objects.filter(~Q(id=int(goods_id)), category=int(goods_info.category_id))[:4]
        # 热卖商品
        hot_goods = Commodity.objects.all().order_by("-click_nums")[:8]
        # 获取评论内容
        course_comment = CourseComments.objects.filter(course=goods_id,status=1)
        return render(request, "goods_info.html", {
            "goods_info": goods_info,
            "goods_store": goods_store,
            "goods_core": goods_core,
            "same_category": same_category,
            "hot_goods": hot_goods,
            "course_comment":course_comment
        })


class AddShoppingBase(View):
    def post(self, request):
        goods_id = request.POST.get("goods_id",0)
        from apps.operation.models import ShoppingBase
        shopping_base = ShoppingBase()
        try:
            check = ShoppingBase.objects.get(user=request.user,course=int(goods_id))
            if check.status == 1:
                check.nums += 1
                check.all_price = int(check.course.price) * check.nums
                check.save()
            elif check.status == 0:
                check.status = 1
                check.save()
        except shopping_base.DoesNotExist:
            shopping_base.course = Commodity.objects.get(id=int(goods_id))
            shopping_base.user = request.user
            shopping_base.all_price = int(shopping_base.course.price) * 1
            shopping_base.save()

        return HttpResponse('{"status":"success"}', content_type="application/json")




