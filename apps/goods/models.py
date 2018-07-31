from django.db import models
from datetime import datetime
from DjangoUeditor.models import UEditorField
from apps.stores.models import StoreOrg


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50, verbose_name="类别名称")
    desc = models.CharField(max_length=300, verbose_name="类别描述")
    image = models.ImageField(upload_to="category/%Y/%m", verbose_name="封面图", max_length=100)
    status = models.IntegerField(choices=((1, '启用'), (2, '禁用'), (-1, '删除')), verbose_name='状态', default=1)
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "类别"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Commodity(models.Model):
    name = models.CharField(max_length=50, verbose_name="商品名称")
    desc = models.CharField(max_length=300, verbose_name="商品描述")
    price = models.CharField(max_length=50, verbose_name="商品价格", default=0)
    detail = UEditorField(verbose_name="商品详情", width=600, height=300, imagePath="commodity/ueditor/",
                          filePath="commodity/ueditor/", default='')
    is_index = models.BooleanField(default=False, verbose_name="是否首页")
    is_act = models.BooleanField(default=False, verbose_name="是否参与活动")
    image = models.ImageField(upload_to="commodity/%Y/%m", verbose_name="封面图", max_length=100,blank=True,null=True)
    category = models.ForeignKey(Category, verbose_name="商品类别")
    tag = models.CharField(default="", verbose_name="商品标签", max_length=20)
    click_nums = models.IntegerField(default=0, verbose_name="商品点击数")
    status = models.IntegerField(choices=((1, '启用'), (2, '禁用'), (-1, '删除')), verbose_name='状态', default=1)
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "商品"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Score(models.Model):
    commodity = models.ForeignKey(Commodity, verbose_name='商品')
    reputation = models.FloatField(default=5, verbose_name='信誉')
    service = models.FloatField(default=5, verbose_name='服务')
    desc = models.FloatField(default=5, verbose_name='描述')
    logistics = models.FloatField(default=5, verbose_name='物流')
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "评分"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.commodity.name


class StoreGoods(models.Model):
    store = models.ForeignKey(StoreOrg, verbose_name='门店')
    goods = models.ForeignKey(Commodity, verbose_name='商品')
    status = models.IntegerField(choices=((1, '启用'), (2, '禁用'), (-1, '删除')), verbose_name='状态', default=1)
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "门店商品列表"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.store.name
