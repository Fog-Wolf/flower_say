#!/usr/bin/env python
# _*_ coding:utf-8 _*_
# Author: wang
# Date: 18/06/23 19:12

import xadmin
from .models import CityDict, StoreOrg, Staff


class CityDictAdmin(object):
    # 列表页显示字段
    list_display = ['name', 'desc', 'add_time']
    # 搜索功能
    search_fields = ['name', 'desc']
    # 过滤器
    list_filter = ['name', 'desc', 'add_time']


class StoreOrgAdmin(object):
    # 列表页显示字段
    list_display = ['name', 'desc', 'category', 'address', 'city', 'tag', 'status', 'add_time']
    # 搜索功能
    search_fields = ['name', 'desc', 'category', 'address', 'tag', 'city']
    # 过滤器
    list_filter = ['name', 'desc', 'category', 'city', 'address', 'status', 'add_time']
    # # 有外键的情况下：取消下拉菜单，改为输入和出现提示菜单
    # relfield_style = 'fk-ajax'


class StaffAdmin(object):
    # 列表页显示字段
    list_display = ['store_id', 'user_id', 'status', 'add_time']
    # 搜索功能
    search_fields = ['store_id', 'user_id']
    # 过滤器
    list_filter = ['store_id__name', 'user_id__nick_name', 'status', 'add_time']


xadmin.site.register(CityDict, CityDictAdmin)
xadmin.site.register(StoreOrg, StoreOrgAdmin)
xadmin.site.register(Staff, StaffAdmin)
