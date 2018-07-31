#!/usr/bin/env python
# _*_ coding:utf-8 _*_
# Author: wang
# Date: 18/06/23 15:53

import xadmin
from .models import UserAsk, CourseComments, UserFavorite, UserCourse, UserCoupon, UserAddress


class UserAskAdmin(object):
    # 列表页显示字段
    list_display = ['name', 'mobile','email', 'course_name', 'add_time']
    # 搜索功能
    search_fields = ['name', 'mobile','email', 'course_name']
    # 过滤器
    list_filter = ['name', 'mobile','email', 'course_name', 'add_time']


class CourseCommentsAdmin(object):
    # 列表页显示字段
    list_display = ['user', 'course', 'comments', 'status', 'add_time']
    # 搜索功能
    search_fields = ['user', 'course', 'comments']
    # 过滤器
    list_filter = ['user__nick_name', 'course', 'comments', 'status', 'add_time']


class UserFavoriteAdmin(object):
    # 列表页显示字段
    list_display = ['user', 'fav_id', 'fav_type', 'add_time']
    # 搜索功能
    search_fields = ['user', 'fav_id', 'fav_type']
    # 过滤器
    list_filter = ['user__nick_name', 'fav_id', 'fav_type', 'add_time']


class UserCourseAdmin(object):
    # 列表页显示字段
    list_display = ['user', 'course', 'add_time']
    # 搜索功能
    search_fields = ['user', 'course']
    # 过滤器
    list_filter = ['user__nick_name', 'course', 'add_time']


class UserCouponAdmin(object):
    # 列表页显示字段
    list_display = ['user', 'course','price','start_date','end_date','status', 'add_time']
    # 搜索功能
    search_fields = ['user', 'course','price']
    # 过滤器
    list_filter = ['user__nick_name', 'course', 'price','start_date','end_date','status','add_time']


class UserAddressAdmin(object):
    # 列表页显示字段
    list_display = ['user','city','shou_address','status','is_check','add_time']
    # 搜索功能
    search_fields = ['user', 'city','shou_address']
    # 过滤器
    list_filter = ['user__nick_name','city','shou_address','status','is_check','add_time']


xadmin.site.register(UserAsk, UserAskAdmin)
xadmin.site.register(CourseComments, CourseCommentsAdmin)
xadmin.site.register(UserFavorite, UserFavoriteAdmin)
xadmin.site.register(UserCourse, UserCourseAdmin)
xadmin.site.register(UserCoupon, UserCouponAdmin)
xadmin.site.register(UserAddress, UserAddressAdmin)
