from django.db import models

from django.contrib.auth.models import AbstractUser



# Create your models here.
class UserProfile(AbstractUser):
    nick_name = models.CharField(max_length=50, verbose_name='昵称', default='')
    birthday = models.DateField(verbose_name="生日", null=True, blank=True)
    sex = models.CharField(choices=(("male", "男"), ("female", "女")), default="男", max_length=6)
    address = models.CharField(max_length=100, default="")
    mobile = models.CharField(max_length=11, null=True, blank=True)
    image = models.ImageField(upload_to="image/%Y/%m", default="image/default.png", max_length=100, blank=True,
                              null=True)
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "用户信息"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.username

    def coupon_nums(self):
        from apps.operation.models import UserCoupon
        return UserCoupon.objects.filter(user=self.id, status=1).count()

    def order_nums(self):
        from apps.operation.models import UserCourse
        return UserCourse.objects.filter(user=self.id).exclude(status=-1).count()


# 轮播图
class Banner(models.Model):
    title = models.CharField(max_length=100, verbose_name="标题")
    image = models.ImageField(upload_to="banner/%Y/%m", verbose_name="轮播图地址", max_length=100, blank=True, null=True)
    url = models.URLField(max_length=200, verbose_name="访问地址")
    index = models.IntegerField(default=100, verbose_name="顺序")
    add_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    class Meta:
        verbose_name = "轮播图"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.username



