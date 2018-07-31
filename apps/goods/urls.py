#!/usr/bin/env python
# _*_ coding:utf-8 _*_
# Author: wang
# Date: 18/06/24 13:36

from django.conf.urls import url
from .views import GoodsView,GoodsInfoView,AddShoppingBase


urlpatterns = [
    url(r'^list/$', GoodsView.as_view(), name="list"),
    url(r'^info/(?P<goods_id>\d+)$', GoodsInfoView.as_view(), name="info"),
    url(r'^add_shopping_base/$', AddShoppingBase.as_view(), name="add_shopping_base"),
]