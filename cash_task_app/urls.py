from django.urls import path
from . import views

urlpatterns = [
    # TEMPLATES
    path('', views.index),
    path('homepage', views.homepage),
    # LOGIN REG PROCESS
    path('register', views.register),
    path('login', views.login),
    # path('logout', views.logout),
]