#!/usr/bin/env python
# _*_ coding:utf-8 _*_
# Author: wang
# Date: 18/07/01 14:17

from django.conf.urls import url
from .views import DownlineView

urlpatterns=[
    url(r'^downline/$', DownlineView.as_view(), name="downline"),
]