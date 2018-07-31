#!/usr/bin/env python
# _*_ coding:utf-8 _*_
# Author: wang
# Date: 18/06/23 15:24

import xadmin
from .models import Category, Commodity, StoreGoods,Score


class ScoreInLine(object):
    model = Score
    extra = 0


class CategoryAdmin(object):
    # 列表页显示字段
    list_display = ['name', 'desc', 'image', 'status', 'add_time']
    # 搜索功能
    search_fields = ['name', 'desc', 'status']
    # 过滤器
    list_filter = ['name', 'status', 'add_time']
    model_icon = 'fa fa-tasks'


class CommodityAdmin(object):
    # 列表页显示字段
    list_display = ['name', 'desc', 'price', 'is_index', 'is_act', 'category', 'status',
                    'add_time']
    # 搜索功能
    search_fields = ['name', 'price']
    # 过滤器
    list_filter = ['name', 'price', 'is_index', 'is_act', 'category',
                   'status', 'add_time']

    # 排序
    ordering = ['id']
    # 只读
    readonly_fields = ['click_nums']
    # 在列表页面就可以对对应字段进行修改
    list_editable = ['price', 'status']
    # 编辑器设置
    style_fields = {'detail': "ueditor"}
    # 图标
    model_icon = 'fa fa-shopping-bag'
    # 添加内容
    inlines = [ScoreInLine]




class StoreGoodsAdmin(object):
    # 列表页显示字段
    list_display = ['store', 'goods', 'status', 'add_time']
    # 搜索功能
    search_fields = ['store__name', 'goods__name']
    # 过滤器
    list_filter = ['store__name', 'goods__name','status', 'add_time']

    # 排序
    ordering = ['store']
    # 在列表页面就可以对对应字段进行修改
    list_editable = ['status']
    model_icon = 'fa fa-shopping-bag'


xadmin.site.register(Category, CategoryAdmin)
xadmin.site.register(Commodity, CommodityAdmin)
xadmin.site.register(StoreGoods, StoreGoodsAdmin)
