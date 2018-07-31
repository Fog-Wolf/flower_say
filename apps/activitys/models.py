from django.db import models
from DjangoUeditor.models import UEditorField
from apps.stores.models import StoreOrg
from apps.goods.models import Commodity


# Create your models here.
class Activity(models.Model):
    name = models.CharField(max_length=50, verbose_name="活动名称")
    desc = models.CharField(max_length=300, verbose_name="活动描述")
    detail = UEditorField(verbose_name="活动详情", width=600, height=300, imagePath="activity/ueditor/",
                          filePath="activity/ueditor/", default='')
    store_id = models.ForeignKey(StoreOrg, verbose_name='所属门店')
    is_index = models.BooleanField(default=False, verbose_name="是否首页")
    click_nums = models.IntegerField(default=0, verbose_name="活动点击数")
    status = models.IntegerField(choices=((1, '启用'), (2, '禁用'), (-1, '删除')), verbose_name='状态', default=1)
    start_date = models.DateTimeField(default='', verbose_name='活动开始时间')
    end_date = models.DateTimeField(default='', verbose_name='活动结束时间')
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "活动"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class ActivityGoods(models.Model):
    activity_id = models.ForeignKey(Activity, verbose_name='活动ID')
    goods_id = models.ForeignKey(Commodity, verbose_name='关联商品')
    price = models.CharField(default=0, verbose_name='活动价',max_length=50)
    status = models.IntegerField(choices=((1, '启用'), (2, '禁用'), (-1, '删除')), verbose_name='状态', default=1)
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "活动关联商品"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.activity_id.name



