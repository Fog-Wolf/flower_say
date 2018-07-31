from django.db import models
from apps.users.models import UserProfile


# Create your models here.
class CityDict(models.Model):
    name = models.CharField(max_length=20, verbose_name="城市")
    desc = models.CharField(max_length=200, verbose_name="描述")
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "城市"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


# 机构
class StoreOrg(models.Model):
    name = models.CharField(max_length=50, verbose_name="门店名称")
    desc = models.TextField(verbose_name="门店描述")
    category = models.CharField(max_length=20, verbose_name="门店类型", default="xn",
                                choices=(("xx", "线下"), ("xn", "虚拟")))
    image = models.ImageField(upload_to="Store/%Y/%m", verbose_name="封面图", max_length=100,blank=True,null=True)
    address = models.CharField(max_length=150, verbose_name="门店地址")
    city = models.ForeignKey(CityDict, verbose_name="所在城市")
    tag = models.CharField(max_length=10, verbose_name="机构标签", default="优秀")
    status = models.IntegerField(choices=((1, '启用'), (2, '禁用'), (-1, '删除')), verbose_name='状态', default=1)
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "门店机构"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Staff(models.Model):
    store_id = models.ForeignKey(StoreOrg, verbose_name='所属门店')
    user_id = models.ForeignKey(UserProfile, verbose_name='员工ID')
    status = models.IntegerField(choices=((1, '启用'), (2, '禁用'), (-1, '删除')), verbose_name='状态', default=1)
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "门店下员工"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name
