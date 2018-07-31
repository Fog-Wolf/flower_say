"""flower_say URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.views.static import serve
from flower_say.settings import MEDIA_ROOT
from extra_apps import xadmin
from django.views.generic import TemplateView
from apps.users.views import LoginView,RegisterView
from apps.operation.views import IndexView

urlpatterns = [
    url(r'^xadmin/', xadmin.site.urls),
    # 富文本编辑器
    url(r'^ueditor/', include('DjangoUeditor.urls')),
    # 配置上传文件的访问处理函数
    url(r'^media/(?P<path>.*)$', serve, {"document_root": MEDIA_ROOT}),
    # 首页
    url(r'^$', IndexView.as_view(), name='index'),
    # 用户登录
    url(r'^login/$', LoginView.as_view(), name="login"),
    # 用户注册
    url(r'^register/$', RegisterView.as_view(), name="register"),
    # 验证码URL
    url(r'^captcha/', include('captcha.urls')),
    # 商品url配置
    url(r'^shopping/', include('apps.goods.urls', namespace="goods")),
    # 通用url配置
    url(r'^operation/', include('apps.operation.urls', namespace="operation")),
    # 门店url配置
    url(r'^stores/', include('apps.stores.urls', namespace="stores")),
    # 用户url配置
    url(r'^user/', include('apps.users.urls', namespace="user")),
]
