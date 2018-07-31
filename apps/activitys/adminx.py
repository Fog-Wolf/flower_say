#!/usr/bin/env python
# _*_ coding:utf-8 _*_
# Author: wang
# Date: 18/06/22 18:31


import xadmin
from .models import Activity, ActivityGoods


class ActivityAdmin(object):
    # 列表页显示字段
    list_display = ['name', 'desc', 'detail','store_id', 'is_index', 'click_nums', 'status', 'start_date',
                    'end_date', 'add_time']
    # 搜索功能
    search_fields = ['name', 'desc', 'store_id','is_index', 'status']
    # 过滤器
    list_filter = ['name', 'start_date', 'store_id__name','end_date', 'add_time']


class ActivityGoodsAdmin(object):
    # 列表页显示字段
    list_display = ['activity_id', 'goods_id', 'price', 'status', 'add_time']
    # 搜索功能
    search_fields = ['activity_id', 'goods_id', 'price', 'status']
    # 过滤器
    list_filter = ['activity_id__name', 'goods_id__name', 'price', 'status','add_time']
    # 有外键的情况下：取消下拉菜单，改为输入和出现提示菜单
    relfield_style = 'fk-ajax'


xadmin.site.register(Activity, ActivityAdmin)
xadmin.site.register(ActivityGoods, ActivityGoodsAdmin)
