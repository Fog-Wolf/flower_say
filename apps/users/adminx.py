#!/usr/bin/env python
# _*_ coding:utf-8 _*_
# Author: wang
# Date: 18/06/23 19:17

import xadmin
from xadmin import views
from .models import Banner


# 主题功能
class BaseSetting(object):
    # 开启主题功能
    enable_themes = True
    # 开启主题选择列表
    use_bootswatch = True


class GlobalSetting(object):
    site_title = "后台管理系统"
    site_footer = "花语"
    menu_style = "accordion"


class BannerAdmin(object):
    # 列表页显示字段
    list_display = ['id', 'title', 'image', 'url', 'index', 'add_time']
    # 搜索功能
    search_fields = ['title', 'image', 'url', 'index']
    # 过滤器
    list_filter = ['title', 'image', 'url', 'index', 'add_time']


xadmin.site.register(Banner, BannerAdmin)
# 注册主题功能
xadmin.site.register(views.BaseAdminView, BaseSetting)
# 修改页眉和页脚
xadmin.site.register(views.CommAdminView, GlobalSetting)
