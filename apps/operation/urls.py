#!/usr/bin/env python
# _*_ coding:utf-8 _*_
# Author: wang
# Date: 18/07/01 13:36


from django.conf.urls import url

from .views import AboutView, PayTypeView, CustomerCouponView, CustomerAddressView, CustomerOrderView, OrderCancelView, \
    OrderInfoView,ShoppingBaseView,ChannelShoppingBaseView,SubShoppingNums,AddShoppingNums,CourseComment

urlpatterns = [
    url(r'^about/$', AboutView.as_view(), name="about"),
    url(r'^pay_type/$', PayTypeView.as_view(), name="pay_type"),
    url(r'^user_coupon/$', CustomerCouponView.as_view(), name="user_coupon"),
    url(r'^user_address/$', CustomerAddressView.as_view(), name="user_address"),
    url(r'^user_order/(?P<order_status>\d+)$', CustomerOrderView.as_view(), name="user_order"),
    url(r'^order_cancel/(?P<order_id>\d+)$', OrderCancelView.as_view(), name="order_cancel"),
    url(r'^order_info/(?P<order_id>\d+)$', OrderInfoView.as_view(), name="order_info"),
    url(r'^shopping_base/$', ShoppingBaseView.as_view(), name="shopping_base"),
    url(r'^base_channel/(?P<list_id>\d+)$', ChannelShoppingBaseView.as_view(), name="base_channel"),
    url(r'^add_num/(?P<list_id>\d+)$', AddShoppingNums.as_view(), name="add_num"),
    url(r'^sub_num/(?P<list_id>\d+)$', SubShoppingNums.as_view(), name="sub_num"),
    url(r'^course_comments/$', CourseComment.as_view(), name="course_comments"),
]
