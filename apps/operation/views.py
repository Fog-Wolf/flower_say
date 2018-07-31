from django.shortcuts import render
from django.views.generic.base import View
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import redirect
from apps.utils.Mixin_utils import LoginRequiredMixin
from .models import UserCoupon, UserAddress, UserCourse, ShouCustomerInfo, ShoppingBase,CourseComments
from apps.stores.models import CityDict
from apps.goods.models import Commodity
from .forms import AddressForm
import json


# Create your views here.

class IndexView(View):
    def get(self, request):
        new_plants = Commodity.objects.filter(status=1).order_by('-add_time')[:4]
        plants = Commodity.objects.filter(status=1, category=1).order_by('-add_time')[:4]
        return render(request, "index.html", {
            "new_plants": new_plants,
            "plants": plants
        })


class AboutView(View):
    def get(self, request):
        return render(request, "about.html", {})


class PayTypeView(View):
    def get(self, request):
        return render(request, "pay_type.html", {})


class CustomerCouponView(LoginRequiredMixin, View):
    def get(self, request):
        user_coupon = UserCoupon.objects.filter(user=request.user)
        return render(request, "customer_coupon.html", {
            "user_coupon": user_coupon
        })


class CustomerAddressView(LoginRequiredMixin, View):
    def get(self, request):
        citys = CityDict.objects.all()
        try:
            user_address = UserAddress.objects.get(user=request.user)
        except UserAddress.DoesNotExist:
            return render(request, "customer_address.html", {
                "citys": citys
            })
        return render(request, "customer_address.html", {
            'address': user_address,
            "citys": citys
        })

    def post(self, request):
        check_address = UserAddress.objects.filter(user=request.user)

        if check_address:
            check_address.delete()

        address_form = AddressForm(request.POST)

        if address_form.is_valid():
            address_form.save()
            return HttpResponse('{"status":"success"}', content_type="application/json")
        else:
            return HttpResponse(json.dumps(address_form.errors), content_type="application/json")


class CustomerOrderView(LoginRequiredMixin, View):
    def get(self, request, order_status):
        if int(order_status) == 0:
            order_info = UserCourse.objects.filter(user=request.user)
        elif int(order_status) == 1:
            order_info = UserCourse.objects.filter(user=request.user).exclude(status=-1)
        else:
            order_info = UserCourse.objects.filter(user=request.user, status=-1)

        for order in order_info:
            order.status = order.get_status_display()
            order.all_pirce = int(order.course.price) * int(order.nums)

        return render(request, 'customer_order.html', {
            "orders": order_info,
            "order_status": int(order_status)
        })


class OrderCancelView(LoginRequiredMixin, View):
    def get(self, request, order_id):
        order = UserCourse.objects.get(id=int(order_id))
        if order:
            order.status = -1
            order.save()
            return redirect("/operation/user_order/0")
        else:
            return redirect("/operation/user_order/0")


class OrderInfoView(LoginRequiredMixin, View):
    def get(self, request, order_id):
        order = UserCourse.objects.get(id=int(order_id))
        order_address = ShouCustomerInfo.objects.get(course=int(order_id))
        order.all_price = order.course.price * order.nums
        return render(request, "order_info.html", {
            "order": order,
            "order_address": order_address
        })


class ShoppingBaseView(LoginRequiredMixin, View):
    def get(self, request):
        courses = ShoppingBase.objects.filter(user=request.user, status=1)
        sum_price = 0
        for course in courses:
            sum_price += course.all_price
        return render(request, "shopping_base.html", {
            "courses": courses,
            "sum_price": sum_price
        })


class ChannelShoppingBaseView(LoginRequiredMixin, View):
    def get(self, request, list_id):
        base_list = ShoppingBase.objects.get(id=int(list_id))
        base_list.status = 0
        base_list.save()
        return redirect("/operation/shopping_base/")


class AddShoppingNums(LoginRequiredMixin, View):
    def get(self, request, list_id):
        add_nums = ShoppingBase.objects.get(id=int(list_id))
        add_nums.nums += 1
        add_nums.all_price = float(add_nums.course.price) * float(add_nums.nums)
        add_nums.save()
        return redirect("/operation/shopping_base/")


class SubShoppingNums(LoginRequiredMixin, View):
    def get(self, request, list_id):
        add_nums = ShoppingBase.objects.get(id=int(list_id))
        if int(add_nums.nums) >= 0:
            add_nums.nums -= 1
            add_nums.all_price = float(add_nums.course.price) * float(add_nums.nums)
            add_nums.save()
        return redirect("/operation/shopping_base/")


class CourseComment(LoginRequiredMixin,View):
    def post(self,request):
        goods_id =  Commodity.objects.get(id=int(request.POST.get("comment_goods")))
        rating = request.POST.get("rating",5)
        comment = request.POST.get("comment")
        course_comments = CourseComments()
        course_comments.user = request.user
        course_comments.course = goods_id
        course_comments.rating = rating
        course_comments.comments = comment
        course_comments.save()

        return HttpResponse('{"status":"success"}', content_type="application/json")

