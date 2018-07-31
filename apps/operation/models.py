from datetime import datetime
from django.db import models
from apps.users.models import UserProfile
from apps.goods.models import Commodity
from apps.stores.models import CityDict


# Create your models here.
class UserAsk(models.Model):
    name = models.CharField(max_length=100, verbose_name="姓名")
    mobile = models.CharField(max_length=11, verbose_name="手机号")
    email = models.EmailField(verbose_name='邮箱', default='')
    course_name = models.CharField(max_length=100, verbose_name="内容")
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")

    class Meta:
        verbose_name = "用户咨询"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class CourseComments(models.Model):
    # 商品评论
    user = models.ForeignKey(UserProfile, verbose_name="用户")
    course = models.ForeignKey(Commodity, verbose_name="商品")
    comments = models.TextField(blank=True, null=True , verbose_name="评论")
    rating = models.IntegerField(default=5,verbose_name="评级")
    status = models.IntegerField(choices=((1, '启用'), (2, '禁用'), (-1, '删除')), verbose_name='状态', default=1)
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")

    class Meta:
        verbose_name = "商品评论"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.user.nick_name


class UserFavorite(models.Model):
    user = models.ForeignKey(UserProfile, verbose_name="用户")
    fav_id = models.IntegerField(default=0, verbose_name="数据ID")
    fav_type = models.IntegerField(choices=((1, "商品"), (2, "商品类别"), (3, "门店")), default=1, verbose_name="收藏类型")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="创建时间", max_length=100)
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "用户收藏"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.user.nick_name


class UserCourse(models.Model):
    user = models.ForeignKey(UserProfile, verbose_name="用户")
    course = models.ForeignKey(Commodity, verbose_name="商品")
    nums = models.IntegerField(default=1, verbose_name='商品数量')
    status = models.IntegerField(choices=((1, '成功'), (0, '未支付'), (-1, '取消')), verbose_name='订单状态', default=0)
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "用户订单"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.user.nick_name


class UserCoupon(models.Model):
    user = models.ForeignKey(UserProfile, verbose_name="用户")
    course = models.CharField(default='', verbose_name="优惠券名称", max_length=300)
    price = models.CharField(default=0, verbose_name="优惠券金额", max_length=50)
    start_date = models.DateTimeField(default='', verbose_name='活动开始时间')
    end_date = models.DateTimeField(default='', verbose_name='活动结束时间')
    status = models.IntegerField(choices=((1, '启用'), (2, '禁用'), (-1, '删除')), verbose_name='状态', default=1)
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "优惠券"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.user.nick_name


class UserAddress(models.Model):
    user = models.ForeignKey(UserProfile, verbose_name="用户")
    shou_name = models.CharField(default='', verbose_name='姓名', max_length=50)
    country = models.CharField(default='', verbose_name='国家', max_length=100)
    city = models.ForeignKey(CityDict, verbose_name='城市')
    town = models.CharField(default='', verbose_name='镇', max_length=300, null=True, blank=True)
    company = models.CharField(default='', verbose_name='公司名称', max_length=300)
    shou_address = models.CharField(default='', verbose_name='地址', max_length=300)
    postal_code = models.IntegerField(default=0, verbose_name='邮编')
    is_check = models.IntegerField(default=1, verbose_name='是否为默认地址')
    status = models.IntegerField(choices=((1, '启用'), (2, '禁用'), (-1, '删除')), verbose_name='状态', default=1)
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "用户地址"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.user.nick_name


class ShouCustomerInfo(models.Model):
    course = models.ForeignKey(UserCourse, verbose_name='订单')
    city = models.ForeignKey(CityDict, verbose_name='城市')
    shou_name = models.CharField(default='', max_length=100, verbose_name="收货人")
    shou_phone = models.CharField(default=0, max_length=11, verbose_name='收货人手机号')
    shou_address = models.CharField(default='', max_length=500, verbose_name='收货地址')
    post_code = models.IntegerField(default=10086, verbose_name="邮政编码")
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "订单收件地址"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.course.id


class ShoppingBase(models.Model):
    user = models.ForeignKey(UserProfile, verbose_name="用户")
    course = models.ForeignKey(Commodity, verbose_name="商品")
    nums = models.IntegerField(default=1, verbose_name='商品数量')
    all_price = models.IntegerField(default=0,verbose_name="商品总价")
    status = models.IntegerField(choices=((1, '开启'), (-1, '关闭')), verbose_name='订单状态', default=1)
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "购物车"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.user.id
