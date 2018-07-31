#!/usr/bin/env python
# _*_ coding:utf-8 _*_
# Author: wang
# Date: 18/07/04 10:54
from django.conf.urls import url
from .views import CustomerInfoView,ChangeUserPasswordView

urlpatterns=[
    # 用户信息
    url(r'^info/$', CustomerInfoView.as_view(), name="info"),
    url(r'^change_password/$', ChangeUserPasswordView.as_view(), name="change_password"),
]