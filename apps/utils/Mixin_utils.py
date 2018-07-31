#!/usr/bin/env python
# _*_ coding:utf-8 _*_
# Author: wang
# Date: 18/05/23 22:09

from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator


class LoginRequiredMixin(object):
    # 验证登陆
    @method_decorator(login_required(login_url='/login/'))
    def dispatch(self, request, *args, **kwargs):
        return super(LoginRequiredMixin, self).dispatch(request, *args, **kwargs)
