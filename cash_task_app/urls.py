from django.urls import path
from . import views

urlpatterns = [
    # TEMPLATES
    path('', views.index),
    path('homepage', views.homepage),
    # LOGIN REG PROCESS
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),
    # JOB PROCESS
    path('createJob', views.createJob),
    path('deleteJob/<int:id>', views.deleteJob),
    # path('updateJob', views.updateJob),
    # path('pinJob', views.pinJob),
]