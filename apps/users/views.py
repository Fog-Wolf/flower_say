from django.shortcuts import render
from django.views.generic.base import View
from django.db.models import Q
from django.contrib.auth.backends import ModelBackend
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import make_password
from .models import UserProfile
from .forms import LoginForm, RegisterForm, UserInforForm, ModifyPwdForm
from apps.utils.Mixin_utils import LoginRequiredMixin
import json


# Create your views here.

# 自定义登陆逻辑（setting.py 内AUTHENTICATION_BACKENDS关联）
class CustomBackEnd(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            # 验证输的用户名和邮箱是否匹配
            user = UserProfile.objects.get(Q(username=username) | Q(email=username))
            # 验证密码
            if user.check_password(password):
                return user
        except Exception as e:
            return None


# 登陆
class LoginView(View):
    def get(self, request):
        return render(request, "login.html", {})

    def post(self, request):
        # 校验
        login_form = LoginForm(request.POST)
        # 判断是否验证通过
        if login_form.is_valid():
            user_name = request.POST.get("username", "")
            password = request.POST.get("password", "")
            # 用户认证
            user = authenticate(username=user_name, password=password)
            # 验证失败返回None
            if user is not None:
                login(request, user)
                # 页面重定向
                from django.core.urlresolvers import reverse
                return HttpResponseRedirect(reverse("index"))
            else:
                return render(request, "login.html", {"msg": "用户名或密码错误"})
        else:
            return render(request, "login.html", {"login_form": login_form})


# 注册
class RegisterView(View):
    def get(self, request):
        register_from = RegisterForm(request.POST)
        return render(request, "register.html", {"register_from": register_from})

    def post(self, request):
        register_form = RegisterForm(request.POST)
        if register_form.is_valid():
            # 用户注册
            user_name = request.POST.get("email", "")
            if UserProfile.objects.filter(email=user_name):
                return render(request, "register.html", {"register_from": register_form, "msg": "用户已存在"})
            password = request.POST.get("password", "")
            user_profile = UserProfile()
            user_profile.username = user_name
            user_profile.email = user_name
            user_profile.is_active = False
            user_profile.password = make_password(password)
            user_profile.save()

            return render(request, "login.html")
        else:
            return render(request, "register.html", {"register_from": register_form})


# 用户信息
class CustomerInfoView(LoginRequiredMixin, View):
    def get(self, request):
        return render(request, "customer_info.html", {})

    def post(self, request):
        user_info_form = UserInforForm(request.POST, instance=request.user)
        if user_info_form.is_valid():
            user_info_form.save()
            return HttpResponse('{"status":"success"}', content_type="application/json")
        else:
            return HttpResponse(json.dumps(user_info_form.errors), content_type="application/json")


class ChangeUserPasswordView(LoginRequiredMixin, View):
    def get(self, request):
        return render(request, "change_password.html", {})

    def post(self, request):
        modify_form = ModifyPwdForm(request.POST)
        if modify_form.is_valid():
            pwd1 = request.POST.get("password1", "")
            pwd2 = request.POST.get("password2", "")
            if pwd1 != pwd2:
                return HttpResponse('{"status":"fail","msg":"密码不一致"}', content_type='application/json')
            user = request.user
            user.password = make_password(pwd2)
            user.save()

            return HttpResponse('{"status":"success"}', content_type='application/json')
        else:
            return HttpResponse(json.dumps(modify_form.errors), content_type='application/json')


